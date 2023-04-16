import React, { useState, useEffect } from "react";

import { Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { callApi } from "@/lib/callApi";
import { isEmpty, startCase, get } from "lodash";

function SearchBar({ perPage, setData, setPagination }) {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getItems();
  }, [search]);

  const getItems = () => {
    if (!isEmpty(search)) {
      setLoading(true);
      callApi(`/api/search/${search}`, "GET", {})
        .then(({ status, response }) => {
          if (!status) {
            setError("Data Not Available");
            setItems([]);
            return;
          }
          setLoading(false);
          setItems(get(response, "data", []));
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    }
  };

  const getData = (id) => {
    setLoading(true);
    callApi(`/api/getItems/${id}`, "GET", {})
      .then(({ status, response }) => {
        if (!status) {
          setError("Data Not Available");
          setData([]);
          return;
        }
        setLoading(false);
        setData(get(response, "data.docs", []));
        setPagination(1);
        console.log(response);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };

  return (
    <div className="relative flex flex-col w-auto h-auto">
      <div className="relative md:w-52 items-center justify-center flex flex-row border-[1px] border-black">
        <input
          type="text"
          placeholder="Search here..."
          className="h-[2.75rem] w-3/4 flex flex-row items-center justify-center mx-auto focus:outline-none "
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <SearchOutlined className="cursor-pointer hover:bg-footer rounded-full p-2" />
      </div>
      {!isEmpty(items) && (
        <div className="flex flex-col px-2 py-1 items-center overlay z-[9] top-[3.25rem] absolute h-auto md:w-52 border-[0.75px] border-black bg-white">
          {items.map(({ _id, name, price }) => {
            return (
              <Row
                className="[&:not(:last-child)]:border-b-[0.5px] border-black flex flex-row flex-wrap justify-start w-full py-2 cursor-pointer hover:text-gray-500"
                key={_id}
                onClick={() => getData(_id)}
              >
                {startCase(name.toLowerCase())}
              </Row>
            );
          })}
          {/* <div className="flex flex-row h-[2.5rem] my-2 w-[100%] bg-black text-sm uppercase text-white justify-center items-center cursor-pointer hover:bg-slate-800">
            View All Result
          </div> */}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
