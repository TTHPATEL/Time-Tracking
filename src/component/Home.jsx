import { Link } from "react-router-dom";
import style from "./home.module.css";
import useFetchUserData from "../hooks/useFetchUserData";
function Home() {
  useFetchUserData();
  return (
    <>
      <div className={style.body_tag}>
        <h1>TIME TRACKER</h1>
        <Link to="/dashboard" className="links">
          Let's Start
        </Link>
      </div>
    </>
  );
}

export default Home;
