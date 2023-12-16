import React, { useEffect } from "react";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllJob } from "../redux/action";

const Home = ({ setIsOpen }) => {
  const dispatch = useDispatch();

  const { jobs } = useSelector((state) => state.appReducer);
  useEffect(() => {
    if (jobs.length === 0) {
      dispatch(getAllJob());
    }
  }, [jobs.length, dispatch]);
  return (
    <div className="flex flex-wrap bg-white border-card-border w-auto gap-20 p-14">
      {jobs?.map((item, index) => (
        <Card item={item} key={index} setIsOpen={setIsOpen} />
      ))}
    </div>
  );
};

export default Home;
