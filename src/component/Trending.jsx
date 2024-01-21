import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Trending = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [today, setToday] = useState([]);
  const [week, setWeek] = useState([]);
  const [data, setData] = useState([]);

  const todayData = () => {
    setData(today);
    setActiveLink(0);
  };

  const weekData = () => {
    setData(week);
    setActiveLink(1);
  };

  useEffect(() => {
    const fetchTodayData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=275f2a44ae93a00a9760f0433a487f58');
        const data = await response.json();
        setToday(data.results || []);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchWeekData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=275f2a44ae93a00a9760f0433a487f58');
        const data = await response.json();
        setWeek(data.results || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodayData();
    fetchWeekData();
  }, []); 
  
  useEffect(() => {
    todayData();
  }, [today]); 

  return (
    <div
      className="w-full bg-white max-h-full h-auto"
      style={{
        backgroundImage: 'url("https://i.ibb.co/VqtPR0F/trending-bg.jpg")',
        backgroundPosition: "center",
      }}
    >
      <div className="w-11/12 mx-auto capitalize py-5">
        <div className="flex items-center gap-5 mb-6">
          <h2 className="text-2xl font-bold">trending</h2>
          <div className="flex flex-wrap items-center justify-center text-md font-semibold  border-[2px] border-black px-[2px] py-[2px] rounded-full">
            <button
              className={`px-4 py-2 rounded-full ${
                activeLink === 0
                  ? "bg-[#032541] text-white text-md transition duration-300 ease-in-out"
                  : ""
              }`}
              onClick={todayData}
            >
              Today
            </button>

            <button
              className={`px-4 py-2 rounded-full ${
                activeLink === 1
                  ? "bg-[#032541] text-white text-md transition duration-300 ease-in-out"
                  : ""
              }`}
              onClick={weekData}
            >
              The Week
            </button>
          </div>
        </div>

        {/* slider section */}
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="mySwiper  h-52"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className="">
                <img className="h-36" src={item.backdrop_path ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` : 'placeholder-image-url'} alt="img" />
                <h2 className="text-sm font-bold text-black">{item.name || item.title}</h2>
                <h2 className="text-sm text-black">{item.first_air_date || item.release_date}</h2> 
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Trending;
