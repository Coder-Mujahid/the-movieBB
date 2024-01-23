import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ismovies, setismovies] = useState(false);
  const [isTV, setisTV] = useState(false);
  const [ispeople, setispeople] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const togglDropDown = () => {
    setisDrop(!isDrop);
  };
  const movies = () => {
    setismovies(!ismovies);
  };
  const TV = () => {
    setisTV(!isTV);
  };
  const people = () => {
    setispeople(!ispeople);
  };

  return (
    <nav className="bg-[#032541] lg:px-8 px-6 py-4  flex items-center ">
      <div className="container mx-auto flex flex-row-reverse lg:flex-row lg:gap-10 gap-5 md:gap-4 items-center justify-end lg:justify-start">
        <Link to={"/"}><img className=' max-w-36 hidden md:block' src="https://i.ibb.co/sKGczFV/logo.png" alt="logo" /></Link>
        <Link to={"/"}><img className=' max-w-8 block md:hidden' src="https://i.ibb.co/6vY9szx/favIcon.png" alt="logo" /></Link>
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none focus:text-white text-3xl flex items-center justify-center"
          >
            {isOpen ? <i className='bx bx-x'></i> : <i className='bx bx-menu'></i>}
          </button>
        </div>
        <div className={`lg:flex z-10 items-center capitalize space-x-4 ${isOpen ? 'fixed top-[70px] left-0 h-screen w-64 bg-[#072B48] transition-transform transform translate-x-0' : 'hidden'}`}>
          <ul className="flex gap-4 lg:gap-0 flex-col lg:flex-row list-none text-sm font-semibold">

          {/* multi device nav item movies */}
            <li className="dropdown dropdown-hover hidden lg:block">
              <div tabIndex={0} role="button" className=" text-white px-4">movies</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52">
                <li><Link className='text-black pb-2 px-4 lg:hover:bg-slate-100 text-xs font-semibold' to={"/PopulerMovie"}>populer</Link></li>
                <li><a className="text-black pb-2 px-4 lg:hover:bg-slate-100 text-xs font-semibold">now playing</a></li>
                <li><a className="text-black pb-2 px-4 lg:hover:bg-slate-100 text-xs font-semibold">upcoming</a></li>
                <li><a className="text-black pb-2 px-4 lg:hover:bg-slate-100 text-xs font-semibold">top rated </a></li>
              </ul>
            </li>
          {/* small device */}
            <li className="nav-item block lg:hidden ">
              <a onClick={movies} href="#" className="text-white py-2 text-lg px-4">movies</a>
            </li>
            <li className={`nav-item text-white flex flex-col ${ismovies ? ' block' : ' hidden'} `}>
                  <Link onClick={toggleNavbar} className="text-white pb-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium" to={"/PopulerMovie"}>populer</Link>
                  <a onClick={toggleNavbar}  className="text-white py-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">now playing </a>
                  <a onClick={toggleNavbar}  className="text-white py-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">upcoming </a>
                  <a onClick={toggleNavbar}  className="text-white pt-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">top rated </a>
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
              <a onClick={TV} href="#" className="text-white py-2 text-lg px-4">TV shows</a>
            </li>
            <li className={`nav-item text-white flex flex-col ${isTV ? ' block' : ' hidden'} `}>
                  <a onClick={toggleNavbar}  className="text-white pb-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">populer</a>
                  <a onClick={toggleNavbar}  className="text-white py-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">airing today </a>
                  <a onClick={toggleNavbar}  className="text-white py-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">on TV </a>
                  <a onClick={toggleNavbar}  className="text-white pt-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">top rated </a>
            </li>

          {/* multi device nav item people */}
            
          <li className="dropdown dropdown-hover hidden lg:block">
              <div tabIndex={0} role="button" className=" text-white px-4">people</div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 rounded-box w-52">
                <li><a className="text-black pb-2 px-4 lg:hover:bg-slate-100 text-xs font-semibold">populer people</a></li>
              </ul>
            </li>
          {/* small device */}
            <li className="nav-item block lg:hidden ">
              <a onClick={people} href="#" className="text-white text-lg py-2 px-4">people</a>
            </li>
            <li className={`nav-item text-white flex flex-col ${ispeople ? ' block' : ' hidden'} `}>
                  <a onClick={toggleNavbar} className="text-white pb-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">populer people</a>
            </li>

            <li className="nav-item hidden lg:block">
              <a href="#" className="text-white py-2 px-4">More</a>
            </li>

            <li className={`nav-item text-white flex flex-col block lg:hidden`}>
                  <a onClick={toggleNavbar} className="text-white pb-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">contribution bible</a>
                  <a onClick={toggleNavbar} className="text-white py-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">discussions </a>
                  <a onClick={toggleNavbar} className="text-white py-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">leaderbord</a>
                  <a onClick={toggleNavbar} className="text-white pt-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">API</a>
                  <a onClick={toggleNavbar} className="text-white pt-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">support</a>
                  <a onClick={toggleNavbar} className="text-white pt-2 px-4 cursor-pointer lg:hover:bg-slate-100 text-xs font-medium">about</a>
                  <a onClick={toggleNavbar} className="text-white pt-2 px-4 cursor-pointer my-3 lg:hover:bg-slate-100 text-sm font-bold">log out</a>
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
        <li className=' px-3 py-2 bg-red-600 rounded-full font-semibold text-white'>M</li>
        <li className='flex items-center justify-center'><i className='bx bx-search-alt-2 text-3xl text-[#01B4E4]' ></i></li>
      </ul>
    </nav>
  );
};

export default Navbar;
