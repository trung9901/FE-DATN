import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Link from 'next/link'
const Headers = () => {
  return (
    <>
        <div className="bg-[#005E2E] ">
          <header className="h-[84px] max-w-full m-auto py-[29px]  pl-[200px] ">
              <div className="header-menu">
                  <nav>
                  <div className="mb-[0px] flex">
                    <Link href={"/"}><img className="flex mr-[100px]" src="https://beautyspa4.shostweb.com/wp-content/uploads/2021/12/logo-spa-4.svg" width="100px"/></Link>
                    <div className="flex-auto w-84">
                    <Link href={"/"} ><button className="px-[23px] text-[#fff]" >Trang chủ</button></Link>
                    <Link href={`/products`}><button className="px-[23px] text-[#fff] ">Sản phẩm</button></Link>
                    <Link href={"/"}><button className="px-[23px] text-[#fff]">Hỗ trợ</button></Link>
                    <Link href={"/"}><button className="px-[23px] text-[#fff]">Hỗ trợ</button></Link>
                    <Link href={"/"}><button className="px-[23px] text-[#fff]">Hỗ trợ</button></Link>
                    <Link href={"/"}><button className="px-[23px] text-[#fff]">Hỗ trợ</button></Link>
                    </div>
                    <div className="flex-auto">
                    <Link href={"/"} ><button className=" mx-3 rounded-md bg-[#003C21] text-[#fff] border-2 border-emerald-500 px-3">0384765490</button></Link>
                    <Link href={"/"} ><button className=" mx-3 rounded-md bg-[#003C21] text-[#fff] border-2 border-emerald-500 px-3">Đăng nhập</button></Link>
                    <Link href={"/"} ><button className=" mx-3 rounded-md bg-[#003C21] text-[#fff] border-2 border-emerald-500 px-3">Đăng ký</button></Link>
                  </div>
                    </div>
                  </nav>
              </div>
            {/* <div>
              <div className="menu">
                <div>
                <figure className="">
                    <Link href={'/'}>
                      <img src="https://beautyspa4.shostweb.com/wp-content/uploads/2021/12/logo-spa-4.svg" width="20px" className="ml-[450px]" />
                    </Link>
                  </figure>
                  <nav>
                  <ul className=" pl-10 pt-[25px]">
                    <Link href={"/"} ><button className="px-[23px] text-[#fff]" >Trang chủ</button></Link>
                    <Link href={`/products`}><button className="px-[23px] text-[#fff] ">Sản phẩm</button></Link>
                    <Link href={"/"}><button className="px-[23px] text-[#fff]">Hỗ trợ</button></Link>
                    <Link href={"/"}><button className="px-[23px] text-[#fff]">Hỗ trợ</button></Link>
                    <Link href={"/"}><button className="px-[23px] text-[#fff]">Hỗ trợ</button></Link>
                    <Link href={"/"}><button className="px-[23px] text-[#fff]">Hỗ trợ</button></Link>
                  </ul>
                  </nav>
                </div>
                <div>
                  <div className="">
                  
                  </div>
                </div>

              </div>
            </div> */}
          </header>
        </div>
    </>
  )
};

export default Headers;
