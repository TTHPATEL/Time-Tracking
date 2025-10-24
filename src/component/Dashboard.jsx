import React, { useState } from "react";
import style from "./dashboard.module.css";
import userProfile from "../images/image-user.png";
import Info_card from "./Info_card";
import workIcon from "../images/icon-work.svg";
import playIcon from "../images/icon-play.svg";
import studyIcon from "../images/icon-study.svg";
import exerciseIcon from "../images/icon-exercise.svg";
import socialIcon from "../images/icon-social.svg";
import selfCareIcon from "../images/icon-self-care.svg";
import { useSelector } from "react-redux";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Dashboard() {
  const userData = useSelector((store) => store.UserData);
  const [selectedUserId, setSelectedUserId] = useState(
    userData[userData.length - 1]?.id || null
  );
  const [timeframe, setTimeframe] = useState("daily");
  console.log(userData);
  console.log(selectedUserId);
  const currentUser = userData?.find((user) => user.id === selectedUserId);
  console.log(currentUser);
  let themeMap = [
    {
      title: "Work",
      bgcolor: "hsl(15, 100%, 70%)",
      bgimage: workIcon,
    },
    {
      title: "Play",
      bgcolor: " hsl(195, 74%, 62%)",
      bgimage: playIcon,
    },
    {
      title: "Study",
      bgcolor: " hsl(348, 100%, 68%)",
      bgimage: studyIcon,
    },
    {
      title: "Exercise",
      bgcolor: " hsl(145, 58%, 55%)",
      bgimage: exerciseIcon,
    },
    {
      title: "Social",
      bgcolor: "hsl(264, 64%, 52%)",
      bgimage: socialIcon,
    },
    {
      title: "Selfcare",
      bgcolor: " hsl(43, 84%, 65%)",
      bgimage: selfCareIcon,
    },
  ];

  function wanttoseeuser(e) {
    setSelectedUserId(e.target.value);
  }

  return (
    <div className={style.body_tag}>
      <div className={style.card}>
        <div className={style.cardUpper}>
          <label htmlFor="">Select User</label>
          <select
            name=""
            id="userSelect"
            value={selectedUserId || ""}
            onChange={wanttoseeuser}
          >
            {/* <option value="" disabled>
              Select User
            </option> */}
            {userData.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <div className={style.cardLower}>
          <div className={style.left_container}>
            <div className={style.l_top_container}>
              <div className={style.profile_div}>
                <img src={userProfile} alt="profile" />
              </div>
              <div className={style.username}>
                <p>Report for</p>
                <h1>{currentUser.name || "Jeremy Robson"}</h1>
              </div>
              <div className={style.icon_div}>
                <FaUserEdit id={style.editIcon} />
                <MdDelete id={style.deleteIcon} />
              </div>
            </div>
            <div className={style.l_bottom_container}>
              <button
                onClick={() => setTimeframe("daily")}
                className={timeframe === "daily" ? style.active : ""}
              >
                Daily
              </button>
              <button
                onClick={() => setTimeframe("weekly")}
                className={timeframe === "weekly" ? style.active : ""}
              >
                Weekly
              </button>
              <button
                onClick={() => setTimeframe("monthly")}
                className={timeframe === "monthly" ? style.active : ""}
              >
                Monthly
              </button>
            </div>
          </div>
          <div className={style.right_container}>
            {themeMap.map((i, index) => {
              const matchInfo = currentUser?.info?.find(
                (infos) => infos.title === i.title
              );

              // if (!matchInfo) return null;

              return (
                <Info_card
                  key={index}
                  style={style}
                  bgdata={i}
                  matchInfo={matchInfo}
                  timeframe={timeframe}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
