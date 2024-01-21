import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#031F37]  ">
      <footer className="footer py-10 text-white mx-auto w-10/12">
        <aside className=" flex flex-col md:items-center">
        <img className=' max-w-56 ' src="https://i.ibb.co/sKGczFV/logo.png" alt="logo" />
         <button className="px-6 py-2 text-xl font-semibold bg-white text-[#01B4E4] rounded-md">
            mujahid11 !
         </button>
        </aside>
        <nav>
          <header className="text-xl font-bold text-white">THE BASICS</header>
          <a className="link link-hover">About TMBB</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Support Forums</a>
          <a className="link link-hover">API</a>
          <a className="link link-hover">System Status</a>
        </nav>
        <nav>
          <header className="text-xl font-bold text-white">GET INVOLVED</header>
          <a className="link link-hover">Contribution Bible</a>
          <a className="link link-hover">Add New Movie</a>
          <a className="link link-hover">Add New TV Show</a>
        </nav>
        <nav>
          <header className="text-xl font-bold text-white">COMMUNITY</header>
          <a className="link link-hover">Guidelines</a>
          <a className="link link-hover">Discussions</a>
          <a className="link link-hover">Leaderboard</a>
        </nav>
        <nav>
          <header className="text-xl font-bold text-white">LEGAL</header>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">API Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">DMCA Policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
