import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrop, setisDrop] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggDropDown = () => {
    setisDrop(!isDrop);
  };

  return (
    <nav className="bg-[#032541] lg:px-8 px-6 py-4  flex items-center">
      <div className="container mx-auto flex flex-row-reverse lg:flex-row lg:gap-10 gap-5 md:gap-4 items-center justify-end lg:justify-start">
        <img className=' max-w-36 hidden md:block' src="https://i.ibb.co/sKGczFV/logo.png" alt="logo" />
        <img className=' max-w-8 block md:hidden' src="https://i.ibb.co/6vY9szx/favIcon.png" alt="logo" />
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none focus:text-white text-3xl flex items-center justify-center"
          >
            {isOpen ? <i className='bx bx-x'></i> : <i className='bx bx-menu'></i>}
          </button>
        </div>
        <div className={`lg:flex items-center capitalize space-x-4 ${isOpen ? 'fixed top-[70px] left-0 h-screen w-64 bg-[#072B48] transition-transform transform translate-x-0' : 'hidden'}`}>
          <ul className="flex gap-4 lg:gap-0 flex-col lg:flex-row list-none text-sm font-semibold">

          {/* multi device nav item movies */}
            <li className="dropdown dropdown-hover hidden lg:block">
              <div tabIndex={0} role="button" className=" text-white px-4">movies</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52">
                <li><a className="text-black pb-2 px-4 lg:hover:bg-slate-100 text-xs font-semibold">populer</a></li>
                <li><a className="text-black pb-2 px-4 lg:hover:bg-slate-100 text-xs font-semibold">now playing</a></li>
                <li><a className="text-black pb-2 px-4 lg:hover:bg-slate-100 text-xs font-semibold">upcoming</a></li>
                <li><a className="text-black pb-2 px-4 lg:hover:bg-slate-100 text-xs font-semibold">top rated </a></li>
              </ul>
            </li>
          {/* small device */}
            <li className="nav-item block lg:hidden ">
              <a onClick={toggDropDown} href="#" className="text-white py-2 px-4">movies</a>
            </li>
            <li className={`nav-item text-white flex flex-col ${isDrop ? ' block' : ' hidden'} `}>
                  <a className="text-white pb-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">populer</a>
                  <a className="text-white py-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">now playing </a>
                  <a className="text-white py-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">upcoming </a>
                  <a className="text-white pt-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">top rated </a>
            </li>



          {/* multi device nav item TV shows */}
            <li className="dropdown dropdown-hover hidden lg:block">
              <div tabIndex={0} role="button" className=" text-white px-4">TV shows</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52">
                <li><a className="text-black pb-2 px-4 lg:hover:bg-slate-100 text-xs font-semibold">populer</a></li>
                <li><a className="text-black pb-2 px-4 lg:hover:bg-slate-100 text-xs font-semibold">airing today</a></li>
                <li><a className="text-black pb-2 px-4 lg:hover:bg-slate-100 text-xs font-semibold">on TV</a></li>
                <li><a className="text-black pb-2 px-4 lg:hover:bg-slate-100 text-xs font-semibold">top rated </a></li>
              </ul>
            </li>
          {/* small device */}
            <li className="nav-item block lg:hidden ">
              <a onClick={toggDropDown} href="#" className="text-white py-2 px-4">TV shows</a>
            </li>
            <li className={`nav-item text-white flex flex-col ${isDrop ? ' block' : ' hidden'} `}>
                  <a className="text-white pb-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">populer</a>
                  <a className="text-white py-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">airing today </a>
                  <a className="text-white py-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">on TV </a>
                  <a className="text-white pt-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">top rated </a>
            </li>

          {/* multi device nav item people */}
            
          <li className="dropdown dropdown-hover hidden lg:block">
              <div tabIndex={0} role="button" className=" text-white px-4">people</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52">
                <li><a className="text-black pb-2 px-4 lg:hover:bg-slate-100 text-xs font-semibold">populer people</a></li>
              </ul>
            </li>
          
            <li className="nav-item block lg:hidden ">
              <a onClick={toggDropDown} href="#" className="text-white py-2 px-4">people</a>
            </li>
            <li className={`nav-item text-white flex flex-col ${isDrop ? ' block' : ' hidden'} `}>
                  <a className="text-white pb-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">populer people</a>
            </li>

            <li className="nav-item hidden lg:block">
              <a href="#" className="text-white py-2 px-4">More</a>
            </li>

            <li className={`nav-item text-white flex flex-col block lg:hidden`}>
                  <a className="text-white pb-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">populer</a>
                  <a className="text-white py-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">airing today </a>
                  <a className="text-white py-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">on TV </a>
                  <a className="text-white pt-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">top rated </a>
            </li>


          </ul>
        </div>
      </div>


      {/* nav bar right part */}

      <ul className='flex gap-5 items-center capitalize'>
        <li className='text-white  hidden md:block'><i className='bx bx-plus-medical'></i></li>
        <li className='text-white font-medium border-[1px] text-[12px] border-white p-[1px] rounded-sm'>EN</li>
        <div className="indicator">
          <span className="indicator-item badge badge-error px-[6px] py-0 m-0 text-[10px] rounded-full text-white font-bold">5</span> 
          <i className='bx bxs-bell text-white text-2xl' ></i>
        </div>
        <li className=' px-3 py-2 bg-red-600 rounded-full'>M</li>
        <li className='flex items-center justify-center'><i className='bx bx-search-alt-2 text-3xl text-[#01B4E4]' ></i></li>
      </ul>
    </nav>
  );
};

export default Navbar;
