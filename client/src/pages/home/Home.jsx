import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar"
import Animationbar from "../../components/animationbar/Animationbar"
import "./home.css"
export default function Home() {
    return (
        <>
            <Topbar/>
            <Animationbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    );
}
