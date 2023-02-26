import React, { useState, useEffect, useRef} from "react"
import ShoeCard from "../card/ShoeCard"
import { Avatar } from "antd"
import { Splide, SplideSlide,SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { UserOutlined} from "@ant-design/icons"
import { nikeList } from "../utils/data";

export default function ShoeList() {
    const session = false
    const options = {
        type         : 'loop',
        gap          : '1.5rem',
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: false,
        perPage      : '5',
        breakpoints  : {
            960:{
                perPage:'3',
            },
            800:{
                perPage:'2',
            },
			640: {
				perPage: '1',
			},
        },
        classes: {
            arrows: 'splide__arrows your-class-arrows',
            arrow : 'splide__arrow your-class-arrow',
            prev  : 'splide__arrow--prev your-class-prev',
            next  : 'splide__arrow--next your-class-next',
      },
    }
    /*@TODO 
        1.customise the arrow key
    */
  return (
    <>
    <div className="my-4 mx-auto px-4 md:px-12 h-full w-full">
        <div className="menu left" style={{ top: "-1rem" }}>
              <a href="./">
                <h2 style={{ fontSize: "2em" }}>Kick Store</h2>
              </a>
            </div>
            {<div className="menu right" style={{ top: "1.55rem", paddingRight: "5px" }}>
              {session && <span><Avatar src={session.user.image} style={{ backgroundColor: '#87d068'}}icon={<UserOutlined  />}/></span>}
              {session && <span onClick={handleSignOut}>Sign out</span>}
              {!session && <span><a href='./login'>Login</a></span>}
              {!session && <span><a href='./register'>Sign up</a></span>}
            </div>}
     <h1 className="text-center text-3xl mt-20 uppercase bg-white text-gray-700 mx-auto px-2 tracking-widest">Nike</h1>
     <div className='h-1 bg-form-blue-dark w-1/12 mx-auto'></div>
      <Splide
        options={ options }
        aria-labelledby="autoplay-example-heading"
        className="my-0"
        hasTrack={ false }
      >
        <div style={ { position: 'relative' } }>
          <SplideTrack>
            { nikeList && nikeList.map(nikeItem => {
            return(
                <SplideSlide key={ nikeItem.id }>
                    <div className="flex flex-col md:flex-row h-full">
                        <ShoeCard data={nikeItem}/>
                    </div>
                </SplideSlide>
                )
            })}
          </SplideTrack>
        </div>
      </Splide>
    </div>
    </>
  )
}