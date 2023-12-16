import { useEffect, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { addJob, getAllJob, updateJob } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { step, job } = useSelector((state) => state.appReducer);
  const methods = useForm({
    defaultValues: {
      title: "",
      company: "",
      industry: "",
      location: "",
      remoteType: "",
      expMinimum: "",
      expMaximum: "",
      salaryMinimum: "",
      salaryMaximum: "",
      totalEmployee: "",
      quickApply: "",
      externalApply: "",
      applyType: "",
    },
    mode: "onChange",
  });

  const {
    register,
    formState: { errors },
    trigger,
    getValues,
    watch,
    control,
    setValue,
    handleSubmit,
  } = methods;
  useEffect(() => {
    if (Object.keys(job)?.length) {
      setValue("_id", job?._id);
      setValue("title", job?.title);
      setValue("company", job?.company);
      setValue("industry", job?.industry);
      setValue("location", job?.location);
      setValue("remoteType", job?.remoteType);
      setValue("expMinimum", job?.expMinimum);
      setValue("expMaximum", job?.expMaximum);
      setValue("salaryMinimum", job?.salaryMinimum);
      setValue("salaryMaximum", job?.salaryMaximum);
      setValue("totalEmployee", job?.totalEmployee);
      setValue("quickApply", job?.quickApply);
      setValue("externalApply", job?.externalApply);
      setValue("applyType", job?.applyType);
    }
  }, [job]);
  const onSubmitButton = async (data) => {
    if (watch("applyType")) {
      if (!data?._id) {
        // add
        await dispatch(addJob(getValues()));
        await dispatch(getAllJob());
        setIsOpen(false);
      } else {
        // update
        await dispatch(updateJob(data?._id, getValues()));
        await dispatch(getAllJob());
        setIsOpen(false);
      }
    }
  };
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <button
            className="text-center border border-dark rounded py-2 px-4 text-dark"
            onClick={() => setIsOpen(true)}
          >
            Create Job
          </button>
        </div>
      </nav>
      <Modal
        isOpen={isOpen}
        step={step}
        setIsOpen={setIsOpen}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        getValues={getValues}
        trigger={trigger}
        control={control}
        watch={watch}
        onSubmitButton={onSubmitButton}
        methods={methods}
        job={job}
      />
      <Home setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
