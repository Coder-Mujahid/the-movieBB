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
        <div className=" w-11/12 mx-auto grid grid-cols-1 p-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className=" mx-auto w-full h-full capitalize">
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title || item.name}
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="col-span-2 flex flex-col justify-center text-white">
            <h1 className="text-4xl font-bold mb-4">
              {item.title || item.name}
            </h1>
            <p className="text-xl font-medium">
              release_date : {item.release_date || item.first_air_date}
            </p>
            <div>
              <div
                className="radial-progress bg-gray-900 my-2"
                style={{ "--value": 80, "--color": "blue" }}
                role="progressbar"
              >
                80%
              </div>
              <h2>user score</h2>
              
            </div>
            <p className="mt-4">
              overview : {item.overview} {item.overview}
            </p>
            <p className="mt-4">popularity : {item.popularity}</p>
            <div className="mt-4">
              <p className="">Rating : {item.vote_average}</p>
              <p className="">Total votes : ({item.vote_count} )</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
