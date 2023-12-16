import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFormStep } from "../redux/action";
import { Controller, FormProvider } from "react-hook-form";

const Modal = ({
  isOpen,
  setIsOpen,
  step,
  getValues,
  register,
  handleSubmit,
  errors,
  trigger,
  onSubmitButton,
  control,
  watch,
  job,
}) => {
  const dispatch = useDispatch();
  if (!isOpen) return null;
  const handleClose = () => {
    setIsOpen(false);
    dispatch(getFormStep(1));
  };
  return (
    <div className="fixed inset-0 bg-dark bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50 ">
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
          {step === 1 && (
            <From1
              register={register}
              control={control}
              watch={watch}
              errors={errors}
              getValues={getValues}
              step={step}
              trigger={trigger}
              job={job}
            />
          )}
          {step === 2 && (
            <From2
              register={register}
              errors={errors}
              watch={watch}
              control={control}
              handleSubmit={handleSubmit}
              onSubmitButton={onSubmitButton}
              getValues={getValues}
              step={step}
              job={job}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

const From1 = ({
  register,
  errors,
  handleSubmit,
  getValues,
  step,
  trigger,
  job,
}) => {
  const dispatch = useDispatch();

  const registerSubmit = () => {
    const { company, industry, title } = getValues();
    if (company && industry && title && step === 1) {
      dispatch(getFormStep(2));
    } else {
      trigger();
    }
  };

  return (
    <>
      <form className="p-4 md:p-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="col-span-2">
            <label htmlFor="title" className="block mb-2 text-sm font-medium ">
              Job title<span className="text-error">&nbsp;*</span>
            </label>

            <input
              type="text"
              id="title"
              name="title"
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
      </form>
      <div className="flex flex-row justify-end pt-20 m-2">
        <button
          className="text-white bg-primary flex flex-row justify-end rounded-md font-medium px-5 py-2.5"
          onClick={registerSubmit}
        >
          Next
        </button>
      </div>
    </>
  );
};
const From2 = ({ register, handleSubmit, onSubmitButton, watch }) => {
  return (
    <form className="p-4 md:p-4" onSubmit={handleSubmit(onSubmitButton)}>
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
            {...register("expMinimum")}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <input
            type="text"
            name="expMaximum"
            id="expMaximum"
            className="bg-gray-50 border border-placeholder text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Maximum"
            {...register("expMaximum")}
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
            {...register("salaryMinimum")}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <input
            type="text"
            name="salaryMaximum"
            id="salaryMaximum"
            className="bg-gray-50 border border-placeholder text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Maximum"
            {...register("salaryMaximum")}
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
            {...register("totalEmployee")}
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
                    value="quickApply"
                    className="mr-2"
                    {...register("applyType")}
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
                    value="externalApply"
                    className="mr-2"
                    {...register("applyType")}
                  />
                  External Apply
                </label>
              </div>

              {!watch("applyType") ? (
                <p role="alert" className="text-error">
                  Choose Apply type is required
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end pt-20 m-2">
        <button
          className="text-white bg-primary flex flex-row justify-end rounded-md font-medium px-5 py-2.5"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
};
