import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Populer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTodayData = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=275f2a44ae93a00a9760f0433a487f58"
        );
        const data = await response.json();
        setData(data.results || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodayData();
  }, []);

  return (
    <div className=" w-11/12 mx-auto py-6 bg-white">
        <div className="w-full flex flex-wrap font-bold items-center gap-5 my-5">
        <h2 className="text-2xl font-bold">What's Popular</h2>
        <button className="px-4 w-full sm:w-auto py-1 rounded-full bg-[#032541] text-white">In Theaters</button>
        </div>

      <div className="h-full w-full">
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
          className="mySwiper"
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
  );
};

export default Populer;
