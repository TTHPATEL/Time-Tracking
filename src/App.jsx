import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { createUser } from "./redux/UserDataSlice";

function App() {
  const UserData = useSelector((store) => store.UserData);
  const dispatch = useDispatch();
  function handleonCreateUser() {
    dispatch(createUser());
    // console.log(UserData);
  }
  return (
    <>
      <h1>Hello</h1>
      <button onClick={handleonCreateUser}>Add user</button>
    </>
  );
}

export default App;
