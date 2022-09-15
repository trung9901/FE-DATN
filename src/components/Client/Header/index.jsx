import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Link from 'next/link'
const Headers = () => {
  return (
    <>
      <div className="">
        <div className="  bg-[#005E2E] ">
          <header className=" h-[84px] w-[1920px]  m-auto   ">
            <div>
              <div className="menu m-auto ">
                <div>
                  <figure className="">
                    <Link href={'/'}>
                      <p><img src="https://beautyspa4.shostweb.com/wp-content/uploads/2021/12/logo-spa-4.svg" width="200px" className="ml-[450px]" /></p>
                    </Link>
                  </figure>
                </div>
                <div>
                  <ul className=" pl-10 pt-[25px]">
                    <Link href={"/"} ><button className="px-[23px] text-[#fff]" >Trang chủ</button></Link>
                    <Link href={`/products`}><button className="px-[23px] text-[#fff] ">Sản phẩm</button></Link>
                    <Link href={"/"}><button className="px-[23px] text-[#fff]">Hỗ trợ</button></Link>
                    <Link href={"/"}><button className="px-[23px] text-[#fff]">Hỗ trợ</button></Link>
                    <Link href={"/"}><button className="px-[23px] text-[#fff]">Hỗ trợ</button></Link>
                    <Link href={"/"}><button className="px-[23px] text-[#fff]">Hỗ trợ</button></Link>
                  </ul>
                </div>
                <div>
                  <div className="">
                    <Link href={"/"} ><button className="rounded-md bg-[#003C21] text-[#fff] border-2 border-emerald-500">Đặt Lịch</button></Link>
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
