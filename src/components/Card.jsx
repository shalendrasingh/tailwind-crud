import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { deleteJob, editFormData, getAllJob } from "../redux/action";
import { useDispatch } from "react-redux";
const Card = ({ item, setIsOpen }) => {
  const dispatch = useDispatch();
  const {
    company,
    expMaximum,
    expMinimum,
    externalApply,
    industry,
    location,
    quickApply,
    remoteType,
    salaryMaximum,
    salaryMinimum,
    title,
    totalEmployee,
    applyType,
    _id,
  } = item;

  const handleEdit = async () => {
    await dispatch(editFormData(item));
    await setIsOpen(true);
  };
  const handleDelete = async () => {
    await dispatch(deleteJob(_id));
    await dispatch(getAllJob());
  };
  return (
    <div className="h-96 p-2 relative xl:w-5/12 lg:w-5/12 md:w-2/3 sm:w-full bg-card border-card-border rounded-xl  shadow-md">
      <div className="absolute right-0 top-0  text-xl place-self-end px-2 my-1">
        <button className="px-1" onClick={handleEdit}>
          <AiFillEdit />
        </button>
        <button className="px-1" onClick={handleDelete}>
          <AiFillDelete />
        </button>
      </div>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            className="w-16 h-16 object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        </div>
        <div className="flex-1 min-w-0 ms-4 xl:mt-4 lg:mt-4 md:mt-3 sm:mt-5">
          <p className="font-bold xl:text-2xl lg:text-xl md:text-lg sm:text-xl truncate text-gray-900 dark:text-white">
            {title}
          </p>
          <p className="xl:text-2xl lg:text-lg md:text-lg sm:text-sm xl:font-medium lg:font-semibold md:font-semibold sm:font-semibold">
            {company} - {industry}
          </p>
          <p className="text-lg font-light">
            {location} ({remoteType})
          </p>
        </div>
      </div>
      <div className="ml-16 flex items-center xl:my-4 sm:my-4">
        <div className="flex-1 min-w-0 ms-4">
          <p className="text-sm font-medium xl:my-3 lg:my-3 md:my-2 sm:my-3">
            Part-Time (9.00 am - 5.00 pm IST)
          </p>
          <p className="text-sm font-medium xl:my-3 lg:my-3 md:my-2 sm:my-3">
            Experience ({expMinimum}-{expMaximum} years)
          </p>
          <p className="text-sm font-medium xl:my-3 lg:my-3 md:my-2 sm:my-3">
            INR ($) {salaryMinimum} - {salaryMaximum} / Month
          </p>
          <p className="text-sm font-medium xl:my-3 lg:my-3 md:my-2 sm:my-3">
            {totalEmployee} employees
          </p>
          <p className="text-sm font-medium xl:my-3 lg:my-3 md:my-2 sm:my-3">
            Part-Time (9.00 am - 5.00 pm IST)
          </p>
        </div>
      </div>
      <div className="ml-16 xl:mt-6 lg:mt-4 md:mt-3 sm:mt-4">
        {applyType === "quickApply" ? (
          <a
            role="button"
            className="text-white bg-primary p-2 px-3 mx-4 text-center rounded-md hover:bg-purple-700"
          >
            Apply Now
          </a>
        ) : (
          <a
            role="button"
            className="text-primary p-2 px-3 mx-4 text-center rounded-md border-2 border-primary"
          >
            External Apply
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
