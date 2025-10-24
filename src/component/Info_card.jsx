import React, { use, useEffect } from "react";
import dotImg from "../images/icon-ellipsis.svg";
function Info_card({ style, bgdata, matchInfo, timeframe }) {
  const current = matchInfo.timeframes[timeframe].current;
  const previous = matchInfo.timeframes[timeframe].previous;
  const period = timeframe.charAt(0).toUpperCase() + timeframe.slice(1);
  return (
    <div
      className={style.info_card}
      style={{ backgroundColor: bgdata.bgcolor }}
    >
      <div
        className={style.t_info_card}
        style={{
          backgroundColor: bgdata.bgcolor,
          backgroundImage: `url("${bgdata.bgimage}")`,
        }}
      ></div>
      <div className={style.b_info_card}>
        <div className={style.title_div}>
          <h4>{bgdata.title}</h4>
          <img src={dotImg} alt="" />
        </div>
        <div className={style.hour_div}>
          <h2 id={style.hour}>{`${current}hrs`}</h2>
          <p id={style.lastweek}>
            {` Last ${period} -`} <span>{`${previous} hrs`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info_card;
