import Hero from "./Hero";
import LeaderBord from "./LeaderBord";
import Populer from "./Populer";
import Trending from "./Trending";
import Video from "./Video";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Trending></Trending>
            <Video></Video>
            <Populer></Populer>
            <LeaderBord></LeaderBord>
        </div>
    );
};

export default Home;