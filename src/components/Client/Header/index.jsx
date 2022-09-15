import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Headers = () => {
  return (
    <>

      <div className="">
        <div className=" bg-[#005E2E] ">
          <header className=" h-[84px] w-[1920px]  m-auto   ">
            <div>
              <div className="menu m-auto ">
                <div>
                  <figure className="">
                    <a href="">
                      <p><img src="https://beautyspa4.shostweb.com/wp-content/uploads/2021/12/logo-spa-4.svg" width="200px" className="ml-[450px]" /></p>
                    </a>
                  </figure>
                </div>
                <div>
                  <ul className=" pl-10 pt-[5px]">
                    <a href="" ><button className="px-[23px] text-[#fff]" >Trang chủ</button></a>
                    <a href=""><button className="px-[23px] text-[#fff] ">Sản phẩm</button></a>
                    <a href=""><button className="px-[23px] text-[#fff]">Hỗ trợ</button></a>
                    <a href=""><button className="px-[23px] text-[#fff]">Hỗ trợ</button></a>
                    <a href=""><button className="px-[23px] text-[#fff]">Hỗ trợ</button></a>
                    <a href=""><button className="px-[23px] text-[#fff]">Hỗ trợ</button></a>
                  </ul>
                </div>
                <div>
                  <div className="pl-10 flex pt-[15px]">
                    <a href="" className="rounded-md bg-[#003C21] text-[#fff] px-[45px] py-[5px] border-2 border-emerald-500"><button className="">0977595350</button></a>
                  </div>
                </div>

              </div>

            </div>

          </header>
        </div>


      </div>

    </>
  )
};

export default Headers;
