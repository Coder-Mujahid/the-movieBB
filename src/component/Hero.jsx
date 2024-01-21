const Hero = () => {
  return (
    <section className="w-full h-screen flex flex-col z-0 ">
      <div
        className="relative h-full flex flex-col items-start justify-center capitalize bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(91, 147, 166, 47), rgba(0, 0, 255, 0.5)), url("https://i.ibb.co/m0nW6yT/banner01.jpg")',
          backgroundPosition: "top",
        }}
      >
        <div className="w-11/12 mx-auto">
          <h2 className="lg:text-5xl md:text-2xl text-xl font-bold text-white">
            Welcome .
          </h2>
          <h3 className="text-wrap lg:text-3xl md:text-xl text-base font-bold mb-10 text-white">
            Millions of movies, TV shows, and people to discover. Explore now.
          </h3>
        </div>
        <div className="flex justify-between items-center px-[1px] py-[1px] mb-6 rounded-full bg-white overflow-hidden shadow-2xl w-11/12 mx-auto">
          <input
            type="text"
            placeholder="Search for a movie, TV show, person......."
            className="border-none outline-none w-3/5 h-full px-6 py-2"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#1BD1AF] to-[#04B8DE] border-none cursor-pointer flex items-center justify-center text-white hover:text-black md:px-8 px-2 py-1 md:py-2 rounded-full transition duration-300 ease-in-out"
          >
            <i className="bx bx-search-alt-2 text-2xl"></i>
            <span className="ml-2 hidden md:block uppercase font-semibold">
              search
            </span>
          </button>
        </div>
      </div>

      <div
        className="relative h-full flex flex-col pb-5 items-start justify-center capitalize bg-cover bg-center"
        style={{
          backgroundImage:
            'radial-gradient(rgba(0,188,254,47), rgba(0, 0, 255, 0.5)), url("https://i.ibb.co/8cm1mym/banner-02.jpg")',
          backgroundPosition: "top",
        }}
      >
        <div className="w-11/12 mx-auto">
          <h2 className="lg:text-5xl md:text-2xl text-xl font-bold text-white">
            That's a <br /> Wrap 2023
          </h2>
          <h3 className="text-wrap lg:text-xl md:text-base text-sm font-medium mb-5 text-white">
            Millions of movies, TV shows, br and people to discover. Explore
            now.
          </h3>
          <button
          type="submit"
          className="bg-transparent border-[2px] border-white cursor-pointer flex items-center justify-center text-white px-4 py-2 rounded-full font-bold transition duration-300 ease-in-out"
        >
          Check it out →
        </button>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
