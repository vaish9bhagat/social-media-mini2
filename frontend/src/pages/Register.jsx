import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerhandler = async (user) => {
    axios
      .post(`http://localhost:3000/auth/register`, user, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });

    reset();
  };
  return (
    <div className="h-screen w-screen  flex justify-center items-center flex-row gap-2">
      <div className=" p-6 w-1/4 rounded-2xl bg-white/50 backdrop-blur-xs ">
        <form
          onSubmit={handleSubmit(registerhandler)}
          className=" h-full w-full flex flex-col justify-center items-center gap-4"
        >
          <h1 className="text-2xl font-semibold">Register</h1>
          <input
            {...register("username", { required: "username field is empty" })}
            className="border-b border-green-950 text-black outline-0"
            type="text"
            id=""
            placeholder="Enter Username"
          />
          {errors.username && (
            <small className="text-red-800">{errors.username.message}</small>
          )}
          <input
            {...register("password", { required: "password field is empty" })}
            className="border-b border-green-950 text-black outline-0"
            type="password"
            id="1"
            placeholder="Enter Password"
          />
          {errors.password && (
            <small className="text-red-800">{errors.password.message}</small>
          )}
          <button
            type="submit"
            className="bg-green-950 text-white px-2 py-1 rounded"
          >
            Register
          </button>
          <p className="text-center">If Already have An Account!</p>
          <NavLink className="border-b" to="/login">
            Log In <i className="ri-arrow-right-box-fill"></i>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Register;
