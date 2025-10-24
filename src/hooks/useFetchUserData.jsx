import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../utils";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/UserDataSlice";

const useFetchUserData = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let res = await axios.get(url);
        // console.log(res.data);
        dispatch(setUser(res.data));
      } catch (err) {
        // console.log("Error fetching user data :", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [dispatch]);
  return loading;
};

export default useFetchUserData;
