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
        const response = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=275f2a44ae93a00a9760f0433a487f58"
        );
        const data = await response.json();
        setToday(data.results || []);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchWeekData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/tv/airing_today?api_key=275f2a44ae93a00a9760f0433a487f58"
        );
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

  console.log(today);

  return (
    <div
      className="w-full bg-white h-full "
      style={{
        backgroundImage: 'url("https://i.ibb.co/VqtPR0F/trending-bg.jpg")',
        backgroundPosition: "center",
      }}
    >
      <div className="w-11/12 mx-auto capitalize py-5">
        <div className="flex items-center gap-5 mb-6">
          <h2 className="text-2xl font-bold">trending</h2>
          <div className=" flex flex-wrap items-center justify-center text-md font-semibold  border-[2px] border-black px-[2px] py-[2px] sm:rounded-full">
            <button
              className={`px-4 w-full sm:w-auto py-2 sm:rounded-full ${
                activeLink === 0
                  ? "bg-[#032541] text-white text-md transition duration-300 ease-in-out"
                  : ""
              }`}
              onClick={todayData}
            >
              Today
            </button>

            <button
              className={`px-4 w-full sm:w-auto py-2 sm:rounded-full ${
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
        <div className="h-auto w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
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
            className="mySwiper -mb-10 p-0"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className="h-auto relative">
                <div className="h-full flex flex-col justify-between gap-8">
                  <img
                    className="min-h-48 rounded-lg object-cover"
                    src={
                      item.backdrop_path
                        ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                        : "placeholder-image-url"
                    }
                    alt="img"
                  />

                  <div
                    className="w-10 h-10 radial-progress absolute bg-[#081C22] text-primary-content text-xs border-[3px] border-[#081C22]"
                    style={{
                      "--value": 70,
                      top: "70%",
                      left: "20%",
                      transform: "translate(-50%, -50%)",
                    }}
                    role="progressbar"
                  >
                    70%
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-black">
                      {item.name || item.title}
                    </h2>
                    <h2 className="text-sm text-black">
                      {item.first_air_date || item.release_date}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Trending;
