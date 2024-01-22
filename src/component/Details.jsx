import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const { item } = location.state || {};

  console.log(item);

  if (!item) {
    // Handle the case when item data is not available
    return <div>No data available</div>;
  }

  return (
    <div className=" mx-auto ">
      <div
        className=" w-full mx-auto py-8"
        style={{
          backgroundImage: `radial-gradient(rgba(129,138,140,47), rgba(0, 0, 255, 0.5)),url(https://image.tmdb.org/t/p/w500/${item.poster_path})`,
          backgroundPosition: "top 100 ",
          backgroundSize: "cover", // Optionally adjust the background size
        }}
      >
        <div className=" w-11/12 mx-auto grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="w-full h-full capitalize">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title || item.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-2 flex flex-col justify-center text-white ">
            <h1 className="text-4xl font-bold mb-4">
              {item.title || item.name}
            </h1>
            <p className="text-xl font-medium">
              release_date : {item.release_date || item.first_air_date}
            </p>
            <div className=" md:flex items-center gap-5 w-full">
              <div
                className="radial-progress bg-gray-900 my-2"
                style={{ "--value": 80, "--color": "blue" }}
                role="progressbar"
              >
                80%
              </div>
              <h2 className=" font-bold text-white">
                user <br /> score
              </h2>
              <i className="hidden lg:block bx bx-list-ul text-white text-3xl px-3 py-2 bg-[#032541] rounded-full"></i>
              <p className="hidden lg:block  text-white text-5xl px-[14px] py-[4px] bg-[#032541] rounded-full">
                ♥
              </p>
              <i className="hidden lg:block bx bxs-bookmark  text-white text-3xl px-3 py-2 bg-[#032541] rounded-full"></i>
              <i className="hidden lg:block bx bxs-star  text-white text-3xl px-3 py-2 bg-[#032541] rounded-full"></i>
              <p className=" text-white text-3xl flex items-center gap-2 hover:text-slate-400">
                <i className="bx bxs-right-arrow"></i>Play Trailer
              </p>
            </div>
            <p className="mt-4">
              overview : {item.overview} {item.overview}
            </p>
            <p className="mt-4 font-medium text-lg ">
              popularity : {item.popularity}
            </p>
            <div className="mt-2  font-medium text-lg">
              <p className="">Rating : {item.vote_average}</p>
              <p className="mt-2">Total votes : ({item.vote_count} )</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
