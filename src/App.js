import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const { step } = useSelector((state) => state.appReducer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
      />
      <Home />
    </div>
  );
}

export default App;
