import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function InputList({ handleAddItem }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = { name, id: Date.now() };
    handleAddItem(newItem)
    // console.log(newItem);

    setName(""); 
  }

  return (
    <div className="container h-[80px] flex justify-center items-center mt-[80px] border-b-2">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-[55vw] h-[35px] px-2 rounded" placeholder="Masukan List" />
        <button className="bg-cyan-700 text-md font-racingSansOne text-white text-center font-normal px-3 h-[35px] rounded">Add Task</button>
      </form>
    </div>
  );
}
