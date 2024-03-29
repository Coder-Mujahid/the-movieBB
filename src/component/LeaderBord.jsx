import '../App.css';

const LeaderBoard = () => {
  const users = [
    { user: 'm', name: 'mujahid', color: 'bg-slate-600' },
    { user: 'j', name: 'jahid', color: 'bg-red-600' },
    { user: 's', name: 'shakib', color: 'bg-blue-600' },
    { user: 'j', name: 'jony', color: 'bg-lime-600' },
    { user: 'n', name: 'nirob', color: 'bg-sky-600' },
    { user: 'h', name: 'hasan', color: 'bg-green-600' },
    { user: 's', name: 'shadik', color: 'bg-yellow-600' },
    { user: 'u', name: 'uttom', color: 'bg-cyan-600' },
    { user: 'r', name: 'rakib', color: 'bg-violet-600' },
    { user: 'h', name: 'habib', color: 'bg-pink-600' },
  ];

  return (
    <div className="w-11/12 mx-auto bg-white capitalize py-8">
      <div className="w-full md:gap-5 gap-2 flex flex-wrap items-center justify-center md:justify-start">
        <h2 className="text-2xl font-bold">Leaderboard</h2>
        <div className="flex flex-col">
          <h3 className="flex flex-row gap-1 items-center"><span className="w-[8px] rounded-full h-[8px] bg-[#00B5FF]"></span>All Time Edits</h3>
          <h3 className="flex flex-row gap-1 items-center"><span className="w-[8px] rounded-full h-[8px] bg-[#FF5861]"></span>Edits This Week</h3>
        </div>
      </div>

      <div className='grid-cols-1 grid md:grid-cols-2 gap-5 my-8'>
        {users.map((userData, index) => (
          <Data key={index} {...userData} />
        ))}
      </div>
    </div>
  );
};

const Data = ({ user, name, color }) => {
  return (
    <div className="flex gap-3 items-center w-full">
      <h2 className={`w-16 h-[50px] lg:h-14 flex items-center justify-center ${color} rounded-full font-semibold text-white`}>{user}</h2>
      <div className="flex flex-col gap-1 w-full">
        <h2 className="font-semibold text-sm">{name}</h2>
        <span className="text-xs font-semibold w-full flex gap-2"><progress className={`progress progress-info w-10/12 ${color}`} value="100" max="100"></progress>3,169,601</span>
        <span className="text-xs font-semibold w-full flex gap-2"><progress className={`progress progress-error w-11/12 ${color}`} value="100" max="100"></progress>11,079</span>
      </div>
    </div>
  );
};

export default LeaderBoard;
