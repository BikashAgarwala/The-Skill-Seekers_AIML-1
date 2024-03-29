import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo1.png";
import trvl from '../../assets/TRVL.png'
import { FaBars, FaTimes } from "react-icons/fa";
import MobileSize from "./MobileSize";


const Navbar = () => {

  const navigate = useNavigate()
  // const {isLoggedIn,setIsLoggedIn,checkAuth} = useAuth()
  const [navActive,SetNavActive] = useState(false)
  // useEffect(()=>{
  //   checkAuth();
  // },[isLoggedIn])
  // const logOutHandler = () =>{
  //   localStorage.removeItem("token")
  //   localStorage.removeItem("userName")
  //   localStorage.removeItem("userId")
  //   setIsLoggedIn(false)
  //   navigate('/login')
  // }

  return (
    <div className="z-40 fixed top-0 left-0 h-[10vh] w-[100vw] bg-white flex justify-between shadow-md items-center px-[7vw] overflow-hidden mb-[10vh] md:mb-[10vh] lg:mb-[10vh] xl:mb-0">
      <div className="flex justify-center items-center gap-[12px]">
       
        <img src={logo} alt="logo" className="h-[70px] w-auto " />
        {/* <img src={trvl} alt="" className="h-[20px]" /> */}
      </div>
      <div className="w-auto hidden md:hidden lg:block xl:block">
        <ul className="flex justify-center items-center gap-[47.95px]">
          <NavLink to={"/"}>
            <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500] hover:text-black">
              Home
            </li>
          </NavLink>
        
          <NavLink to={"/about"}>
            <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500] hover:text-black">
              About Us
            </li>
          </NavLink>
          <NavLink to={"/chatbot"}>
            <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500] hover:text-black">
              Chatbot
            </li>
          </NavLink>
         
          </ul>
          </div>


          {/* {!isLoggedIn && <NavLink to={"/login"}>
             <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]">
              <button
                className="px-4 py-1 text-center text-white rounded-xl text-xl"
                style={{
                  background:
                    "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)",
                }}
              >
                Log In
              </button>
            </li>
          </NavLink>}
          {isLoggedIn && <li className="text-[#404040] cursor-pointer text-[17.38px] leading-[34.27px] font-[500]">
              <button 
                onClick={logOutHandler}
                className="px-4 py-1 text-center text-white rounded-xl text-xl"
                style={{
                  background:
                    "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%, #6F3AFA 196.74%)",
                }}
              >
                Log Out
              </button>
            </li>}
        </ul>
      </div> */}
      {
        navActive ? <FaTimes onClick={()=>SetNavActive(false)} className="block md:block lg:hidden xl:hidden text-lg"/>:<FaBars onClick={()=>SetNavActive(true)} className="block md:block lg:hidden xl:hidden text-lg"/>
      }
      <MobileSize navActive={ navActive}/>
    </div>
  );
};

export default Navbar;
