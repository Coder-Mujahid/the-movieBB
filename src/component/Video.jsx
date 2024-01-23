import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import '../App.css'


const slidesData = [
    {
      title: 'The Marvels',
      videoSrc: 'https://www.youtube.com/embed/wS_qbDztgVY?si=zQMFV9HyR9_0EPxf',
    },
    {
      title: 'WONKA ',
      videoSrc: 'https://www.youtube.com/embed/otNh9bTjXWg?si=a8H4dtTkZ0JJuRVA',
    },
    {
      title: 'Lift ',
      videoSrc: 'https://www.youtube.com/embed/m2L-Sa_6MU0?si=Ze9wuP6ZEsfPS0hl',
    },
    {
      title: ' Napoleon ',
      videoSrc: 'https://www.youtube.com/embed/OAZWXUkrjPc?si=iuyKrD50tkBbH_2G ',
    },
    {
      title: ' Aquaman and the Lost Kingdom ',
      videoSrc: ' https://www.youtube.com/embed/UGc5Tzz19UY?si=dT0Uwg59PpwBNRbn',
    },
    {
      title: ' Granit',
      videoSrc: ' https://www.youtube.com/embed/6MNfBHFhnNs?si=XaXXh9bfNerpUSuP ',
    },
    {
      title: ' One More Shot',
      videoSrc: ' https://www.youtube.com/embed/W1kCbtjPJ2U?si=33tsh4gMzXs1whrQ ',
    },
    {
      title: ' The Beekeeper',
      videoSrc: ' https://www.youtube.com/embed/SzINZZ6iqxY?si=ropMr48S1K5xY1og',
    },
    
  ];

const Video = () => {
  return (
    <div className=" mx-auto py-10 mt-8 bg-white " style={{
        backgroundImage:
          'radial-gradient(rgba(0,188,254,47), rgba(0, 0, 255, 0.5)), url("https://i.ibb.co/8cm1mym/banner-02.jpg")',
        backgroundPosition: "top",
      }}>
      <div className=" w-11/12 mx-auto flex flex-wrap font-bold items-center gap-5 my-5" >
        <h2 className="text-2xl text-white font-bold">Latest Trailers</h2>
        <button className="px-4 w-full sm:w-auto py-1 rounded-full bg-[#032541] text-white">
          populer
        </button>
      </div>

      <div className="h-full w-full mx-auto text-white">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3 ,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 4 ,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
           {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex w-full flex-col items-center">
            <iframe
              className="video"
              src={slide.videoSrc}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h2 className="text-xl font-semibold text-center text-wrap mt-4 hover:text-[#032541]">{slide.title}</h2>
          </div>
        </SwiperSlide>
      ))}
         
        </Swiper>
      </div>
    </div>
  );
};

export default Video;
