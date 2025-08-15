import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState(null);

  const fetchdata = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/user/profile`, {
        withCredentials: true,
      });
      setuser(res.data.user.username);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const logouthandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:3000/auth/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[94%] h-[94%] flex items-center justify-center ">
      <div className="w-1/3  p-4 bg-white/50 backdrop-blur-sm flex flex-row  items-center  justify-center gap-12 rounded">
        <div className="flex gap-2 flex-col items-center justify-center">
          <h3 className="text-2xl">{user}</h3>
          <button
            onClick={logouthandler}
            className="bg-green-950 text-white px-2 py-1 rounded"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
