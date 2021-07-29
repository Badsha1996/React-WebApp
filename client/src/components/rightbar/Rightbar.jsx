import './rightbar.css'
import {  Users} from "../../Dummydata";
import Online from "../online/Online";

export default function Rightbar({profile}) {
    
    const HomeRightbar = () =>{
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;
        return(
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src={`${PF}/gift.png`} alt="" />
                    <span className="birthdayText">
                        <b>Asif Laskar</b> and <b>3 other buddies</b> have their Birthday Today.
                    </span>
                </div>
                <img className="rightbarAd" src={`${PF}/ad.png`} alt="" />
                <h4 className="rightbarTitle">Online Buddies</h4>
                <ul className="rightbarBuddyList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        )
    }
    const ProfileRightbar = () =>{
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;

        return(
            <>
                <img className="rightbarAd" src={`${PF}/map.jpg`} alt="" />
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City: </span>
                        <span className="rightbarInfoValue">Kolkata</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From: </span>
                        <span className="rightbarInfoValue">Kolkata</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship status: </span>
                        <span className="rightbarInfoValue">N/a</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Buddy</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/crazy2.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Pratyush Kesarwani</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/crazy3.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sayantani Roy</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/crazy4.png`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Fake</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/crazy5.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sudip Maity</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/>:<HomeRightbar/>}
            </div>
        </div>
    )
}
