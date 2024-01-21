import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Trending = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [today, settoday] = useState([]);
  const [week, setweek] = useState([]);
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
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzVmMmE0NGFlOTNhMDBhOTc2MGYwNDMzYTQ4N2Y1OCIsInN1YiI6IjY1YWJmZGYyYmQ1ODhiMDBjYTYxYTdjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.90310K5TloZPBE4igS_8O8cxiqQzQNMecaUDE0TbrsU'
      }
    };

    fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => {
        setweek(response.results);
      })
      .catch(err => console.error(err));
  }, []); 

  console.log(today)


  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzVmMmE0NGFlOTNhMDBhOTc2MGYwNDMzYTQ4N2Y1OCIsInN1YiI6IjY1YWJmZGYyYmQ1ODhiMDBjYTYxYTdjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.90310K5TloZPBE4igS_8O8cxiqQzQNMecaUDE0TbrsU'
        }
      };
      
      fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(response => settoday(response.results))
        .catch(err => console.error(err));
  }, []); 

  





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
            pagination={{
              clickable: true,
            }}
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
