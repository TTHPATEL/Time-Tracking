import { useDispatch, useSelector } from "react-redux";
import style from "./createuser.module.css";
import { createUser, setUser } from "../redux/UserDataSlice";
import { useEffect, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { url } from "../../utils";
import useFetchUserData from "../hooks/useFetchUserData";

function CreateUser() {
  useFetchUserData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let initialState = {
    name: "Ram",
    info: [
      {
        title: "Work",
        timeframes: {
          daily: {
            current: 5,
            previous: 7,
          },
          weekly: {
            current: 32,
            previous: 36,
          },
          monthly: {
            current: 103,
            previous: 128,
          },
        },
      },
      {
        title: "Play",
        timeframes: {
          daily: {
            current: 1,
            previous: 2,
          },
          weekly: {
            current: 10,
            previous: 8,
          },
          monthly: {
            current: 23,
            previous: 29,
          },
        },
      },
      {
        title: "Study",
        timeframes: {
          daily: {
            current: 0,
            previous: 1,
          },
          weekly: {
            current: 4,
            previous: 7,
          },
          monthly: {
            current: 13,
            previous: 19,
          },
        },
      },
      {
        title: "Exercise",
        timeframes: {
          daily: {
            current: 1,
            previous: 1,
          },
          weekly: {
            current: 4,
            previous: 5,
          },
          monthly: {
            current: 11,
            previous: 18,
          },
        },
      },
      {
        title: "Social",
        timeframes: {
          daily: {
            current: 1,
            previous: 3,
          },
          weekly: {
            current: 5,
            previous: 10,
          },
          monthly: {
            current: 21,
            previous: 23,
          },
        },
      },
      {
        title: "Selfcare",
        timeframes: {
          daily: {
            current: 0,
            previous: 1,
          },
          weekly: {
            current: 2,
            previous: 2,
          },
          monthly: {
            current: 7,
            previous: 11,
          },
        },
      },
    ],
  };

  const nameRef = useRef();
  const workRef = useRef();
  const playRef = useRef();
  const studyRef = useRef();
  const exerciseRef = useRef();
  const socialRef = useRef();
  const selfCareRef = useRef();

  const userData = useSelector((store) => store.UserData);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  async function handleOnCreateUser(formData) {
    let res = await axios.post(url, formData);
    console.log(res.data);
    dispatch(createUser(res.data));
    toast.success("User created");
    navigate("/dashboard");
  }

  function handleOnSubmit(e) {
    e.preventDefault();

    const name = nameRef.current.value;
    const work = workRef.current.value;
    const play = playRef.current.value;
    const study = studyRef.current.value;
    const exercise = exerciseRef.current.value;
    const social = socialRef.current.value;
    const selfCare = selfCareRef.current.value;
    const data = {
      name,
      info: [
        {
          title: "Work",
          timeframes: {
            daily: {
              current: Number(work),
              previous: Number(work) + 2,
            },
            weekly: {
              current: Number(work) * 7,
              previous: Number(work) * 8,
            },
            monthly: {
              current: Number(work) * 56,
              previous: Number(work) * 57,
            },
          },
        },
        {
          title: "Play",
          timeframes: {
            daily: {
              current: Number(play),
              previous: Number(play) + 2,
            },
            weekly: {
              current: Number(play) * 7,
              previous: Number(play) * 8,
            },
            monthly: {
              current: Number(play) * 56,
              previous: Number(play) * 57,
            },
          },
        },
        {
          title: "Study",
          timeframes: {
            daily: {
              current: Number(study),
              previous: Number(study) + 2,
            },
            weekly: {
              current: Number(study) * 7,
              previous: Number(study) * 8,
            },
            monthly: {
              current: Number(study) * 56,
              previous: Number(study) * 57,
            },
          },
        },
        {
          title: "Exercise",
          timeframes: {
            daily: {
              current: Number(exercise),
              previous: Number(exercise) + 2,
            },
            weekly: {
              current: Number(exercise) * 7,
              previous: Number(exercise) * 8,
            },
            monthly: {
              current: Number(exercise) * 56,
              previous: Number(exercise) * 57,
            },
          },
        },
        {
          title: "Social",
          timeframes: {
            daily: {
              current: Number(social),
              previous: Number(social) + 2,
            },
            weekly: {
              current: Number(social) * 7,
              previous: Number(social) * 8,
            },
            monthly: {
              current: Number(social) * 56,
              previous: Number(social) * 57,
            },
          },
        },
        {
          title: "Selfcare",
          timeframes: {
            daily: {
              current: Number(selfCare),
              previous: Number(selfCare) + 2,
            },
            weekly: {
              current: Number(selfCare) * 7,
              previous: Number(selfCare) * 8,
            },
            monthly: {
              current: Number(selfCare) * 56,
              previous: Number(selfCare) * 57,
            },
          },
        },
      ],
    };

    handleOnCreateUser(data);
    console.log("Submited", nameRef.current.value);
  }
  return (
    <>
      <div className={style.body_tag}>
        <form onSubmit={handleOnSubmit}>
          <div className={style.form_columns}>
            <div className={style.leftColumn}>
              <div className={style.inputfield_div}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  required
                  id="name"
                  ref={nameRef}
                  className={style.inputField}
                />
              </div>
              <div className={style.inputfield_div}>
                <label htmlFor="work">Work</label>
                <input
                  type="number"
                  placeholder="Enter per day work hour"
                  required
                  id="work"
                  min="0"
                  max="24"
                  ref={workRef}
                  className={style.inputField}
                />
              </div>
              <div className={style.inputfield_div}>
                <label htmlFor="play">Play</label>
                <input
                  type="number"
                  placeholder="Enter per day play hour"
                  required
                  id="play"
                  min="0"
                  max="24"
                  ref={playRef}
                  className={style.inputField}
                />
              </div>
              <div className={style.inputfield_div}>
                <label htmlFor="study">Study</label>
                <input
                  type="number"
                  placeholder="Enter per day study hour"
                  required
                  id="study"
                  min="0"
                  max="24"
                  ref={studyRef}
                  className={style.inputField}
                />
              </div>
            </div>
            <div className={style.rightColumn}>
              <div className={style.inputfield_div}>
                <label htmlFor="exercise">Exercise</label>
                <input
                  type="number"
                  placeholder="Enter  per day exercise hour"
                  required
                  id="exercise"
                  min="0"
                  max="24"
                  ref={exerciseRef}
                  className={style.inputField}
                />
              </div>
              <div className={style.inputfield_div}>
                <label htmlFor="social">Social</label>
                <input
                  type="number"
                  placeholder="Enter  per day social hour"
                  required
                  id="social"
                  min="0"
                  max="24"
                  ref={socialRef}
                  className={style.inputField}
                />
              </div>
              <div className={style.inputfield_div}>
                <label htmlFor="Selfcare">Self Care</label>
                <input
                  type="number"
                  placeholder="Enter  per day self care hour"
                  required
                  id="Selfcare"
                  min="0"
                  max="24"
                  ref={selfCareRef}
                  className={style.inputField}
                />
              </div>
            </div>
          </div>
          <div className={style.button_container}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateUser;
