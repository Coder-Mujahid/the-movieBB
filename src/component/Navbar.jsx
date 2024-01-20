import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-row-reverse lg:flex-row gap-10 md:gap-4 items-center justify-end lg:justify-start">
        <a href="#" className="text-white text-lg font-bold">Your Brand</a>
        
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none focus:text-white text-3xl flex items-center justify-center"
          >
            {isOpen ? <i className='bx bx-x'></i> : <i className='bx bx-menu'></i>}
          </button>
        </div>
        <div className={`lg:flex items-center space-x-4 ${isOpen ? 'fixed top-[60px] left-0 h-screen w-64 bg-blue-800 transition-transform transform translate-x-0' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row list-none text-sm font-semibold">
            <li className="nav-item">
              <a href="#" className="text-white py-2 px-4 hover:bg-gray-600">Home</a>
            </li>
            <li className="nav-item">
              <a href="#" className="text-white py-2 px-4 hover:bg-gray-600">About</a>
            </li>
            <li className="nav-item">
              <a href="#" className="text-white py-2 px-4 hover:bg-gray-600">Services</a>
            </li>
            <li className="nav-item">
              <a href="#" className="text-white py-2 px-4 hover:bg-gray-600">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
