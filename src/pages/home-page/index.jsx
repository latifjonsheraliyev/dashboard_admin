import React from "react";
import { useGetUsersQuery } from "../../redux/api/authorization-login";

const Home = () => {
  const { data,isLoading } = useGetUsersQuery();
  console.log(data);

  return (
    <div className="h-[100vh] bg-gray-400 flex items-center justify-center">
      { isLoading? "Loading" :
        <div key={data.id} className="user_profile w-[240px] flex flex-col justify-between bg-gray-700  h-[330px]">
          <div className="user_img w-full h-[100px] p-[20px]">
            <img src={data.avatar} alt="" className="" />
          </div>
          <div className="h-100px text-start p-[20px]"> 

          <h3 className="text-black">  <span className=" text-red-500 ">NAME: </span>{data.name}</h3>
          <h4 className="text-black">  <span className="text-red-500">JOB: </span> {data.role}</h4>
          <a href={`mailto:${data.email}`} className="text-black">
            <span className="text-red-500">EMAIL: </span>  {data.email}
          </a>
          </div>
        </div>
      }
    </div>
  );
};

export default Home;
