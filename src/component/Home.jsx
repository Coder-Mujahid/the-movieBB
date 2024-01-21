import Hero from "./Hero";
import LeaderBord from "./LeaderBord";
import Populer from "./Populer";
import Trending from "./Trending";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Trending></Trending>
            <Populer></Populer>
            <LeaderBord></LeaderBord>
        </div>
    );
};

export default Home;