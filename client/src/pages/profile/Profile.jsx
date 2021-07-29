import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar"
import './profile.css'

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        
        <>
        <Topbar/>
        <div className="profile">
            <Sidebar/>
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                         <img src={`${PF}post/post3.jpeg`} alt="" className="profileCoverImg" />
                        <img src={`${PF}person/crazy1.jpg`} alt="" className="profileUserImg" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Badsha Laskar</h4>
                        <span className="profileInfoDesc">I am the creator of MonaSociety</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>
                </div>
            </div>
        </div>
    </>
    )
}
