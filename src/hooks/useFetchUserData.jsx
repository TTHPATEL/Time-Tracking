import axios from "axios";
import { useEffect } from "react";
import { url } from "../../utils";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/UserDataSlice";

const useFetchUserData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchUserData() {
      let res = await axios.get(url);
      console.log(res.data);
      dispatch(setUser(res.data));
    }
    fetchUserData();
  }, []);
};

export default useFetchUserData;
