import { Link } from "react-router-dom";
import style from "./home.module.css";
import useFetchUserData from "../hooks/useFetchUserData";
function Home() {
  let loading = useFetchUserData();
  return (
    <>
      <div className={style.body_tag}>
        {loading ? (
          <span class={style.loader}></span>
        ) : (
          <div className={style.body_tag}>
            <h1>TIME TRACKER</h1>
            <Link to="/dashboard" className="links">
              Let's Start
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
