import { useState } from "react";
import MyInput from "./MyInput";
import MyDueDate from "./MyDueDate";
import MyButton from "./MyButton";

// eslint-disable-next-line react/prop-types
export default function InputList({ handleAddItem }) {
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState(null);

  const handleGetName = (name) => {
    setName(name);
  };

  const handleGetDueDate = (dueDate) => {
    setDueDate(dueDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    const newItem = { name, dueDate, id: Date.now() };
    handleAddItem(newItem);

    setName("");
    setDueDate(null);
  };

  return (
    <div className="container flex flex-col gap-3 mt-[40px] pb-6 border-b-2">
      <div className="w-[58vw] flex m-auto">
        <MyDueDate handleOnChange={handleGetDueDate} />
      </div>
      <div className="container flex justify-center items-center gap-3">
        <MyInput handleOnChange={handleGetName} name={name} handleOnSubmit={handleSubmit} styleType="w-[50vw]" />
        <MyButton handleOnClick={handleSubmit} label="Add Task" styleType="bg-cyan-700 text-xl font-racingSansOne text-white" />
      </div>
    </div>
  );
}
