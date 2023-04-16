import React, { useState, useEffect } from "react";
// import axios from "axios";
// import useSWR from "swr";

import Pagination from "../pagination/Pagination";
import ShoeCard from "../card/ShoeCard";
import GridWrapper from "../loading/LoadingWrapper";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";

import { FilterOutlined } from "@ant-design/icons";
import { get, omitBy, isEmpty } from "lodash";
import { Col, Row } from "antd";
import { callApi, swrFetcher } from "@/lib/callApi";

const Grid = ({ gridUrl, filter, perPage }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOptions, setFilterOptions] = useState({});
  const [colCount, setColCount] = useState(4);

  const onChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getItems({
      searchFilter: filterOptions,
      page: currentPage,
      limit: perPage,
    });
  }, [filterOptions, currentPage]);

  const onHandleFilterClick = (value) => {
    setFilterOptions(value);
  };

  // const fetcher = (args) => {
  //   const { url, method , body} = args
  //   console.log(method)
  //   axios.post(url).then(res => res.data)
  // }
  // const { data } = useSWR({url:`${process.env.NEXT_PUBLIC_API_URL_1}/api/${gridUrl}`,method:'POST',body:filterOptions},fetcher)
  // console.log(data);

  const getItems = async (payload) => {
    setLoading(true);
    callApi(`/api/${gridUrl}`, "POST", payload)
      .then(({ status, response }) => {
        if (!status) {
          setError("Data Not Available");
          setItems([]);
          return;
        }
        setLoading(false);
        setItems(get(response, "data.docs", []));
        setTotalPages(Math.ceil(get(response, "data.total", 2)) / perPage);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };
  const colCounts = {};
  const colOptions = [2, 3, 4, 6];
  colOptions.forEach((value, i) => {
    colCounts[i] = value;
  });
  return (
    <GridWrapper loading={loading} error={error} size={items.length}>
      <div className="px-12 mt-4 h-full drawer drawer-end">
        <div className="flex flex-row items-center justify-between space-x-4">
          <div className="flex flex-row justify-between items-center space-x-2">
            <label
              htmlFor="my-drawer"
              className="h-12 w-32 border-black border-[1px] flex justify-center cursor-pointer items-center transition-all hover:bg-black hover:text-white"
            >
              <FilterOutlined className="mx-2" />
              <h4 className="tracking-wide uppercase font-semibold">Filter</h4>
            </label>
          </div>
          <div className="flex flex-row justify-end items-center">
            <div
              className="group h-[2.75rem] absolute w-auto right-10 flex justify-between overflow-hidden"
              id="parent"
            >
              <span className="button-icon-container">
                <div className="h-[2.75rem] w-[2.75rem] border-black border-[1px] grid grid-cols-3 justify-center cursor-pointer p-1">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                    return (
                      <div
                        key={i}
                        className="bg-black rounded-full h-1.5 w-1.5 m-[0.15rem] hover:bg-form-blue-dark hover:h-2 hover:w-2"
                      ></div>
                    );
                  })}
                </div>
              </span>
              <div id="child">
                <span className="flex flex-col md:flex-row md:space-x-2">
                  {colOptions.map((colOption) => {
                    return (
                      <div
                        key={colOption}
                        onClick={() => {
                          setColCount(colOption);
                        }}
                        className="h-[2.75rem] w-[2.75rem] border-black border-[1px] flex justify-center text-center cursor-pointer items-center transition-all hover:bg-black hover:text-white"
                      >
                        {colOption}
                      </div>
                    );
                  })}
                </span>
              </div>
            </div>
            <SearchBar
              perPage={perPage}
              setData={setItems}
              setPagination={setTotalPages}
            />
          </div>
        </div>
        <div className="mt-0 flex flex-row">
          <motion.div
            animate={{
              width: condensed ? 600 : 0,
              transition: {
                type: "tween",
                duration: 0.4,
                ease: "linear",
              },
            }}
          >
            <input
              id="my-drawer"
              type="checkbox"
              className="drawer-toggle"
              onChange={() => setCondensed((prevVal) => !prevVal)}
            />
            <label htmlFor="my-drawer" className="drawer-content"></label>
            <div className="drawer-side items-start overlay">
              <ul className="menu p-2 w-[20rem] h-screen md:flex mr-2 hover:bg-white text-black">
                <div className="space-y-4 items-start">
                  {filter &&
                    !loading &&
                    filter.map((f) => {
                      const {
                        title = "",
                        options = [],
                        className = "",
                        filterKey = "",
                      } = f;
                      return (
                        <span key={title}>
                          <Title>{title}</Title>
                          <div className={className}>
                            {options &&
                              options.map((option) => {
                                const { label = "", value = "" } = option;
                                return (
                                  <FilterOptions
                                    key={label}
                                    label={label}
                                    value={value}
                                    filterKey={filterKey}
                                    globalFilter={filterOptions}
                                    setFilter={onHandleFilterClick}
                                  />
                                );
                              })}
                          </div>
                        </span>
                      );
                    })}
                </div>
              </ul>
            </div>
          </motion.div>
          <Row gutter={[16, 16]} className="mt-[0.3rem]">
            {items &&
              items.map((item) => {
                return (
                  <Col key={item.id} span={24 / colCount}>
                    <ShoeCard data={item} />
                  </Col>
                );
              })}
          </Row>
        </div>
        <div className="flex justify-center items-center h-24">
          <Pagination
            total={totalPages}
            current={currentPage}
            perPage={perPage}
            onChange={onChange}
          />
        </div>
      </div>
    </GridWrapper>
  );
};

export default Grid;

const Title = ({ children }) => {
  return (
    <div className="flex flex-row space-x-4 items-center my-2">
      <div className="h-4 bg-black w-1"></div>
      <div className="text-md font-bold tracking-wide uppercase">
        {children}
      </div>
      <div className="flex-1 bg-footer h-[0.09rem]"></div>
    </div>
  );
};

const FilterOptions = ({
  label,
  value,
  filterKey,
  globalFilter,
  setFilter,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const selectFilter = () => {
    let updateFilter = globalFilter;
    if (!isSelected) {
      if (isEmpty(updateFilter)) updateFilter[[filterKey]] = [value];
      else {
        for (const [key, val] of Object.entries(updateFilter)) {
          if (key === filterKey) updateFilter[[filterKey]] = [...val, value];
          else updateFilter[[filterKey]] = [value];
        }
      }
    } else {
      for (const [key, val] of Object.entries(updateFilter)) {
        if (key === filterKey)
          updateFilter[[filterKey]] = updateFilter[[filterKey]].filter(
            (f) => f !== value
          );
      }
    }
    setIsSelected((selected) => !selected);
    setFilter(omitBy(updateFilter, (v) => v.length === 0));
  };
  return (
    <div>
      <div
        onClick={selectFilter}
        style={{ borderRadius: "0px" }}
        className={
          !isSelected
            ? "p-2 h-auto w-auto border-black border-[1px] flex justify-center cursor-pointer items-center transition-all text-sm hover:bg-slate-800 hover:border-gray-800 hover:text-white"
            : "p-2 h-auto w-auto border-black border-[1px] flex justify-center cursor-pointer items-center transition-all text-sm bg-black text-white hover:bg-white hover:text-black"
        }
      >
        {label}
      </div>
    </div>
  );
};
