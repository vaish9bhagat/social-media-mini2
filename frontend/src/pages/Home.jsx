import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState([
    {
      image:
        "http://googleusercontent.com/image_collection/image_retrieval/9058259699686716816_0",
      username: "hiking_adventurer",
      caption:
        "Reached the summit and the view was absolutely breathtaking! #hikinglife #mountainviews",
    },
    {
      image:
        "http://googleusercontent.com/image_collection/image_retrieval/13552451079938433439_0",
      username: "chef_in_training",
      caption:
        "First time trying this new recipe. So proud of how it turned out! 👩‍🍳 #homecooking",
    },
    {
      image:
        "http://googleusercontent.com/image_collection/image_retrieval/438737498556814308_0",
      username: "bookworm_ben",
      caption:
        "Lost in a good book on a rainy afternoon. Nothing better. 📚 #readingtime",
    },
    {
      image:
        "http://googleusercontent.com/image_collection/image_retrieval/9482399786868779151_0",
      username: "artistic_soul",
      caption:
        "Getting back to my roots and finding joy in painting again. ✨ #artistsoninstagram",
    },
    {
      image:
        "http://googleusercontent.com/image_collection/image_retrieval/12330387212623111949_0",
      username: "acoustic_dave",
      caption:
        "Just me and my guitar, making some music after a long day. 🎸 #guitarist",
    },
  ]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/post/allposts`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        setPost(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
        toast.error("you are not logged in login first");
        navigate("/login");
      });
  }, []);

  const allposts = post?.map((post, index) => {
    return (
      <div
        key={index}
        className=" w-1/3 p-2 rounded bg-white/50 backdrop-blur-sm  flex flex-col gap-2"
      >
        <div>
          <img src="" alt="" />
          <p>{post.username}</p>
        </div>
        <img className="h-42 w-full object-cover " src={post.image} alt="" />
        <p>{post.caption}</p>
      </div>
    );
  });

  return (
    <div className="w-[94%] h-[94%] rounded overflow-auto hide-scrollbar p-4  flex flex-col items-center justify-start gap-2 ">
      {allposts}
    </div>
  );
};

export default Home;
