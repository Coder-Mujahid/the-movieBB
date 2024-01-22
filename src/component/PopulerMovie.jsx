import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PopulerMovie = () => {
  const [selectedType, setSelectedType] = useState("type1");
  const [isOpen, setIsOpen] = useState(false);
  const [isopen, setIsopen] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const toggleShort = () => {
    setIsOpen(!isOpen);
  };
  const toggle = () => {
    setIsopen(!isopen);
  };

  const handleTypeChange = (event) => {
    const newSelectedType = event.target.value;
    setSelectedType(newSelectedType);

    fetchData(newSelectedType);
  };

  const handleItemClick = (item) => {
    navigate("/details", { state: { item: item } });
  };

  const fetchData = async (selectedType) => {
    try {
      const response = await fetch(
        selectedType === "type1"
          ? "https://api.themoviedb.org/3/discover/movie?api_key=275f2a44ae93a00a9760f0433a487f58"
          : "https://api.themoviedb.org/3/tv/airing_today?api_key=275f2a44ae93a00a9760f0433a487f58"
      );

      const rawData = await response.json();
      setData(rawData.results || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(selectedType);
  }, [selectedType]);

  // console.log(data);

  return (
    <div className="w-11/12 mx-auto py-8 md:grid gap-5 grid-cols-4 capitalize">
      <div className="col-span-1 mb-5">
        <div>
          <h2 className=" text-3xl font-bold text-wrap text-center sm:text-start">
            Popular Movies
          </h2>
          {/* Short selection */}
          <div className="my-4 border-[1px] border-slate-200 shadow-md shadow-slate-200 rounded-md">
            <div
              className={`text-xl ${
                isOpen ? "border-b-[1px]" : "border-none"
              } border-slate-500 font-bold px-3 py-2`}
            >
              <h2 className=" flex items-center justify-between w-full">
                Short
                <button className=" text-2xl " onClick={toggleShort}>
                  {isOpen ? (
                    <i className="bx bx-chevron-up font-bold"></i>
                  ) : (
                    <i className="bx bx-chevron-down font-bold"></i>
                  )}
                </button>
              </h2>
            </div>

            <div className={isOpen ? "block" : "hidden"}>
              <div className="px-3 py-2">
                <label className=" px-1 font-medium text-base ">
                  Sort Results By
                </label>
                <select
                  value={selectedType}
                  onChange={handleTypeChange}
                  className="w-full px-2 py-2 rounded-md bg-[#E4E7EB] border-none outline-none font-medium text-sm"
                >
                  <option
                    className="px-2 py-2 h-4 w-5 rounded-md bg-[#E4E7EB] text-sm"
                    value="type1"
                  >
                    Rating Descending
                  </option>
                  <option
                    className="px-2 py-2 rounded-md bg-[#E4E7EB] text-sm"
                    value="type2"
                  >
                    Rating Ascending
                  </option>
                </select>
              </div>
            </div>
          </div>

          {/* filters selection */}
          <div className="my-4 border-[1px] border-slate-200 shadow-md shadow-slate-200 rounded-md">
            <div
              className={`text-xl ${
                isopen ? "border-b-[1px]" : "border-none"
              } border-slate-500 font-bold px-3 py-2`}
            >
              <h2 className=" flex items-center justify-between w-full">
                filters
                <button className=" text-2xl " onClick={toggle}>
                  {isopen ? (
                    <i className="bx bx-chevron-up font-bold"></i>
                  ) : (
                    <i className="bx bx-chevron-down font-bold"></i>
                  )}
                </button>
              </h2>
            </div>

            <div className={isopen ? "block" : "hidden"}>
              <div className="px-3 py-2 w-full">
                <h2 className=" px-1 font-medium mb-1 text-base w-full border-b-[1px]">
                  Genres
                </h2>
                <div className=" lg:grid gap-1 grid-cols-2 py-2 items-start justify-start border-b-[1px] border-slate-300">
                  <button className=" px-2 mb-1 mr-1 lg:mr-0 text-sm lg:textbase lg:mb-0 w-auto border-[1px] py-1 border-slate-400 hover:bg-[#01B4E4] hover:text-white rounded-full capitalize font-medium">
                    action
                  </button>
                  <button className=" px-2 mb-1 mr-1 lg:mr-0 text-sm lg:textbase lg:mb-0 w-auto border-[1px] py-1 border-slate-400 hover:bg-[#01B4E4] hover:text-white rounded-full capitalize font-medium">
                    Adventure
                  </button>
                  <button className=" px-2 mb-1 mr-1 lg:mr-0 text-sm lg:textbase lg:mb-0 w-auto border-[1px] py-1 border-slate-400 hover:bg-[#01B4E4] hover:text-white rounded-full capitalize font-medium">
                    Animation
                  </button>
                  <button className=" px-2 mb-1 mr-1 lg:mr-0 text-sm lg:textbase lg:mb-0 w-auto border-[1px] py-1 border-slate-400 hover:bg-[#01B4E4] hover:text-white rounded-full capitalize font-medium">
                    Comedy
                  </button>
                  <button className=" px-2 mb-1 mr-1 lg:mr-0 text-sm lg:textbase lg:mb-0 w-auto border-[1px] py-1 border-slate-400 hover:bg-[#01B4E4] hover:text-white rounded-full capitalize font-medium">
                    Crime
                  </button>
                  <button className=" px-2 mb-1 mr-1 lg:mr-0 text-sm lg:textbase lg:mb-0 w-auto border-[1px] py-1 border-slate-400 hover:bg-[#01B4E4] hover:text-white rounded-full capitalize font-medium">
                    Drama
                  </button>
                  <button className=" px-2 mb-1 mr-1 lg:mr-0 text-sm lg:textbase lg:mb-0 w-auto border-[1px] py-1 border-slate-400 hover:bg-[#01B4E4] hover:text-white rounded-full capitalize font-medium">
                    Romance
                  </button>
                </div>
                <div>
                  <h2 className=" px-1 font-medium mb-1 text-base w-full ">
                    Keywords
                  </h2>
                  <input
                    type="text"
                    placeholder="Filter by keywords..."
                    className="border-[1px] w-full border-slate-300 p-2 rounded-md outline-[#01B4E4] outline-[1px] placeholder:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className=" w-full transition duration-300 bg-[#01B4E4] hover:bg-[#032541] text-white tracking-[2px] px-4 capitalize py-3 rounded-full font-bold ">
            search
          </button>
        </div>
      </div>

      {selectedType === "type1" && (
        <div className=" col-span-3">
          <div className=" h-auto w-full md:grid gap-5 lg:grid-cols-5 md:grid-cols-3 items-center justify-between">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(item)}
                className=" mb-4 md:mb-0 flex-row h-full flex md:flex-col md:justify-between rounded-md bg-slate-100 border-[1px] border-slate-200"
              >
                <img
                  className="md:min-h-60 w-28 md:w-full h-36 rounded-lg object-cover"
                  src={
                    item.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                      : "placeholder-image-url"
                  }
                  alt="img"
                />
                <div className=" px-3 pb-3 flex flex-col gap-1 items-start justify-center md:justify-start w-full">
                  <h2 className="text-sm font-bold text-black">
                    {item.name || item.title}
                  </h2>
                  <h2 className="text-sm text-black">
                    {item.first_air_date || item.release_date}
                  </h2>
                  <h2 className="text-sm block lg:hidden text-black">
                    retting {item.vote_average} ★
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <button className=" mt-5 w-full transition duration-300 bg-[#01B4E4] hover:bg-[#032541] text-white tracking-[2px] px-4 capitalize py-3 rounded-full font-bold ">
            loead more
          </button>
        </div>
      )}

      {selectedType === "type2" && (
        <div className="col-span-3">
          <div className="h-auto w-full md:grid gap-5 lg:grid-cols-5 md:grid-cols-3 items-center justify-between">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(item)}
                className="relative mb-4 md:mb-0 flex-row gap-5 h-full flex md:flex-col md:justify-between rounded-md bg-slate-100 border-[1px] border-slate-200"
              >
                <img
                  className="md:min-h-60 w-28 md:w-full h-36 rounded-lg object-cover"
                  src={
                    item.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
                      : "placeholder-image-url"
                  }
                  alt="img"
                />
                {/* rating bar creating problem for image width */}
                {/* <div className="absolute bottom-14 -left-14 w-full text-center">
                  <div
                    className="w-8 h-8 radial-progress bg-[#081C22] text-xs text-white border-4 border-[#081C22]"
                    style={{
                      "--value": 70,
                      display: "inline-block",
                    }}
                    role="progressbar"
                  >
                    70%
                  </div>
                </div> */}

                <div className="px-3 pb-3 flex flex-col gap-1 items-start justify-center md:justify-start w-full">
                  <h2 className="text-sm font-bold text-black">
                    {item.name || item.title}
                  </h2>
                  <h2 className="text-sm text-black">
                    {item.first_air_date || item.release_date}
                  </h2>
                  <h2 className="text-sm block lg:hidden text-black">
                    retting {item.vote_average} ★
                  </h2>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-5 w-full transition duration-300 bg-[#01B4E4] hover:bg-[#032541] text-white tracking-[2px] px-4 capitalize py-3 rounded-full font-bold ">
            load more
          </button>
        </div>
      )}
    </div>
  );
};

export default PopulerMovie;
