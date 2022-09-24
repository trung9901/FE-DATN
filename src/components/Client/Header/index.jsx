import React, { useState } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Link from 'next/link'
import { Modal } from "antd";
import SignIn from "../../../pages/signin";
const Headers = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const [ismolDal, setIsModal] = useState();
  const showModal = async (e) => {
    await setOpen(true);
    const footerModal = document.querySelector(".ant-modal-footer");
    footerModal.style.display = "none"
    setIsModal(e.target.getAttribute("data"))

  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  // Kiểm tra nhấn signin/signup
  const checkInUp = () => {
    console.log(ismolDal)
    if (ismolDal === "signin") {
      return <SignIn />
    } else {
      // return <SignUp />
    }
  }

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

//   const headerCss = {
//     position:"fixed",
//     width:"100%",
//     zIndex: "1000",
// }

  return (
    <>
        <div  className="bg-[#005E2E] ">
          <header className="h-[80px] w-[1920px] max-w-full m-auto py-[29px]  pl-[200px] ">
              <div className="header-menu">
                  <nav>
                  <div className=" flex">
                    <Link href={"/"}><img className="flex mr-[100px]" src="https://beautyspa4.shostweb.com/wp-content/uploads/2021/12/logo-spa-4.svg" width="100px"/></Link>
                    <div style={{justifyContent:"center"}} className="flex-auto w-84">
                    <Link href={"/"} ><button className="px-[23px] text-[#fff]" >Trang chủ</button></Link>
                    <Link href={`/products`}><button className="px-[23px] text-[#fff] ">Sản phẩm</button></Link>
                    <Link href={"/"}><button className="px-[23px] text-[#fff]">Hỗ trợ</button></Link>
                    <Link href={"/"}><button className="px-[23px] text-[#fff]">Hỗ trợ</button></Link>
                    <Link href={"/"}><button className="px-[23px] text-[#fff]">Hỗ trợ</button></Link>
                    <Link href={"/"}><button className="px-[23px] text-[#fff]">Hỗ trợ</button></Link>
                    </div>
                    <div className="flex-auto">
                    <Link href={"/"} ><button className=" mx-3 rounded-md bg-[#003C21] text-[#fff] border-2 border-emerald-500 px-3">0384765490</button></Link>
                    <button data="signin" onClick={showModal} className=" mx-3 rounded-md bg-[#003C21] text-[#fff] border-2 border-emerald-500 px-3">Đăng nhập</button>
                  <button data="signup" onClick={showModal} className=" mx-3 rounded-md bg-[#003C21] text-[#fff] border-2 border-emerald-500 px-3" >Đăng ký</button>
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
            <Modal
            open={open}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            width={1000}
          >
            <p>
              {checkInUp()}
            </p>
          </Modal>
          </header>
        </div>
    </>
  )
};

export default Headers;
