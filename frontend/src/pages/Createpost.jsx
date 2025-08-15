import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Createpost = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:3000/post/createpost",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
      navigate("/home");
    } catch (error) {
      console.error(error);
      toast.error("you are not logged in login first");
      navigate("/login");
    }
  };
  return (
    <div className="h-[94%] w-[94%]  flex items-center justify-center ">
      <div className="h-1/2 w-1/3 bg-white/50 backdrop-blur-sm p-4 flex items-center justify-center flex-col rounded">
        {" "}
        <h1 className="text-xl">Create Post</h1>
        <form
          onSubmit={handleUpload}
          className="w-full h-full flex flex-col items-center  justify-center gap-2"
          action=""
        >
          <input
            className="ml-20"
            type="file"
            name=""
            id=""
            placeholder="submit image"
            onChange={handleFileChange}
          />

          <button
            type="submit"
            className="bg-green-950 rounded px-2 py-1 mt-3 text-white"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createpost;
