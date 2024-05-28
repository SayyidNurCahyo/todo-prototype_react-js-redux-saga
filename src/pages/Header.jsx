import { useEffect } from "react";
import { useState } from "react";
import Lottie from "lottie-react";
import animation from "../assets/Animation - load API.json";

const Header = () => {
  const [data, setData] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [isLoadAPI, setIsLoadAPI] = useState(false);
  useEffect(() => {
    const fetchData = () => {
      setIsLoadAPI(true);
      setTimeout(async () => {
        const response = await fetch(
          "https://worldtimeapi.org/api/timezone/Asia/Jakarta"
        );
        const data = await response.json();
        setData(data);
        setIsLoadAPI(false);
      }, 500);
    };
    fetchData();
    const intervalId = setInterval(fetchData, 10000);
    setIntervalId(intervalId);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="d-flex justify-content-between shadow-sm px-4 py-2 bg-primary text-white p-4 shadow">
      <div className="font-logo text-center">
        <h2 className="fs-2">
          <i>
            <b>Todo App</b>
          </i>
        </h2>
        <h2 className="fs-6 font-primary fw-bold">Prototype ver. 1.0</h2>
      </div>
      <div className="d-flex align-items-center">
        {isLoadAPI ? (
          <div className="d-flex justify-content-center">
            <span style={{width: 70}}>
              <Lottie animationData={animation} />
            </span>
          </div>
        ) : (
          data && (
            <div className="text-center">
              <h6>Waktu Saat Ini</h6>
              <h5>{data.datetime.substr(11, 5)}</h5>
            </div>
          )
        )}
      </div>
      <button
        data-bs-toggle="dropdown"
        aria-expanded="false"
        className="btn btn-link"
      >
        <img
          className="rounded-circle cursor-pointer"
          width={32}
          height={32}
          src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-372-456324.png"
          alt="avatar"
        />
      </button>
      <ul className="dropdown-menu">
        <li className="dropdown-item-text">
          <div className="flex-grow-1 ms-3">
            <h6 className="mb-1">Sayyid Nur Cahyo</h6>
            <span>sayyidnurc123@gmail.com</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
