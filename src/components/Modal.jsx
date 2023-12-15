import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormStep } from "../redux/action";

const Modal = ({ isOpen, setIsOpen, step, register, handleSubmit, errors }) => {
  const dispatch = useDispatch();
  if (!isOpen) return null;
  const handleClose = () => {
    setIsOpen(false);
    dispatch(getFormStep(1));
  };

  const registerSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="fixed inset-0 bg-dark bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button
          className="text-dark text-xl place-self-end border-solid border-2 border-dark rounded-full px-2 my-1"
          onClick={handleClose}
        >
          X
        </button>
        <div className="bg-card border-card-border p-2 rounded-lg">
          <div className="flex flex-row justify-between px-4 py-2">
            <h2 className="text-dark font-medium text-xl  py-1">
              Create a job
            </h2>
            <h2 className="text-dark font-medium text-xl  py-1">Step {step}</h2>
          </div>
          <form className="p-4 md:p-4" onSubmit={handleSubmit(registerSubmit)}>
            {step === 1 && <From1 register={register} errors={errors} />}
            {step === 2 && <From2 register={register} errors={errors} />}
            <div className="flex flex-row justify-end pt-20 m-2">
              {step === 1 ? (
                <button
                  className="text-white bg-primary flex flex-row justify-end rounded-md font-medium px-5 py-2.5"
                  type="submit"
                >
                  Next
                </button>
              ) : (
                <button className="text-white bg-primary flex flex-row justify-end rounded-md font-medium px-5 py-2.5">
                  Save
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;

const From1 = ({ register, errors }) => {
  return (
    <div className="grid gap-4 mb-4 grid-cols-2">
      <div className="col-span-2">
        <label htmlFor="title" className="block mb-2 text-sm font-medium ">
          Job title<span className="text-error">&nbsp;*</span>
        </label>
        <input
          type="text"
          id="title"
          className="border border-placeholder text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="ex. UX UI Designer"
          {...register("title", {
            required: "Enter title",
          })}
          aria-invalid={errors.title ? "true" : "false"}
        />
        {errors.title?.type === "required" && (
          <p role="alert" className="text-error">
            Job title is required
          </p>
        )}
      </div>

      <div className="col-span-2">
        <label htmlFor="company" className="block mb-2 text-sm font-medium">
          Company name<span className="text-error">&nbsp;*</span>
        </label>
        <input
          type="text"
          name="company"
          id="company"
          className="border border-placeholder text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="ex. Google"
          {...register("company", {
            required: "Enter company",
          })}
          aria-invalid={errors.company ? "true" : "false"}
        />
        {errors.company?.type === "required" && (
          <p role="alert" className="text-error">
            Company name is required
          </p>
        )}
      </div>

      <div className="col-span-2">
        <label
          htmlFor="industry"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Industry<span className="text-error">&nbsp;*</span>
        </label>
        <input
          type="text"
          name="industry"
          id="industry"
          className="border border-placeholder text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="ex. Information Technology"
          {...register("industry", {
            required: "Enter industry",
          })}
          aria-invalid={errors.industry ? "true" : "false"}
        />
        {errors.industry?.type === "required" && (
          <p role="alert" className="text-error">
            Industry is required
          </p>
        )}
      </div>

      <div className="col-span-2 sm:col-span-1">
        <label
          htmlFor="location"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Location
        </label>
        <input
          type="text"
          name="location"
          id="location"
          className="bg-gray-50 border border-placeholder text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="ex. Chennai"
          {...register("location")}
        />
      </div>

      <div className="col-span-2 sm:col-span-1">
        <label
          htmlFor="remoteType"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Remote type
        </label>
        <input
          type="text"
          name="remoteType"
          id="remoteType"
          className="bg-gray-50 border border-placeholder text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="ex. In-office"
          {...register("remoteType")}
        />
      </div>
    </div>
  );
};
const From2 = ({ register, errors }) => {
  return (
    <div className="grid gap-4 grid-cols-2">
      <div className="col-span-2">
        <label htmlFor="experience" className="block text-sm font-medium">
          Experience
        </label>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <input
          type="text"
          name="expMinimum"
          id="expMinimum"
          className="bg-gray-50 border border-placeholder text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Minimum"
          {...register("expMinimum", {
            required: "Enter expMinimum",
          })}
          aria-invalid={errors.expMinimum ? "true" : "false"}
        />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <input
          type="text"
          name="expMaximum"
          id="expMaximum"
          className="bg-gray-50 border border-placeholder text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Maximum"
          {...register("expMaximum", {
            required: "Enter expMaximum",
          })}
          aria-invalid={errors.expMaximum ? "true" : "false"}
        />
      </div>

      <div className="col-span-2">
        <label
          htmlFor="salary"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          Salary
        </label>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <input
          type="text"
          name="salaryMinimum"
          id="salaryMinimum"
          className="bg-gray-50 border border-placeholder text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Minimum"
          {...register("salaryMinimum", {
            required: "Enter salaryMinimum",
          })}
          aria-invalid={errors.salaryMinimum ? "true" : "false"}
        />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <input
          type="text"
          name="salaryMaximum"
          id="salaryMaximum"
          className="bg-gray-50 border border-placeholder text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Maximum"
          {...register("salaryMaximum", {
            required: "Enter salaryMaximum",
          })}
          aria-invalid={errors.salaryMaximum ? "true" : "false"}
        />
      </div>

      <div className="col-span-2">
        <label
          htmlFor="totalEmployee"
          className="block text-sm mb-2 font-medium text-gray-900 dark:text-white"
        >
          Total employee
        </label>
        <input
          type="text"
          name="totalEmployee"
          id="totalEmployee"
          className="bg-gray-50 border border-placeholder text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="ex. 100"
          {...register("totalEmployee", {
            required: "Enter totalEmployee",
          })}
          aria-invalid={errors.totalEmployee ? "true" : "false"}
        />
      </div>

      <div className="col-span-2">
        <div className="mb-4">
          <label className="block text-sm mb-2 font-medium text-gray-900">
            Apply type
          </label>
          <div className="flex flex-wrap">
            <div className="w-1/3">
              <label
                htmlFor="quick-apply"
                className="block text-sm mb-2 font-normal text-placeholder "
              >
                <input
                  type="radio"
                  id="quick-apply"
                  name="quickApply"
                  value="quickApply"
                  className="mr-2"
                  {...register("quickApply", {
                    required: "Choose Apply Type",
                  })}
                  aria-invalid={errors.quickApply ? "true" : "false"}
                />
                Quick Apply
              </label>
            </div>
            <div className="w-1/3">
              <label
                htmlFor="external-apply"
                className="block text-sm mb-2 font-normal text-placeholder "
              >
                <input
                  type="radio"
                  id="external-apply"
                  name="externalApply"
                  value="externalApply"
                  className="mr-2"
                  {...register("externalApply", {
                    required: "Choose Apply Type",
                  })}
                  aria-invalid={errors.externalApply ? "true" : "false"}
                />
                External Apply
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
