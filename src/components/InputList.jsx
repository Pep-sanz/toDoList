import { useState } from "react";
import { DatePicker, Select, Space, TimePicker } from "antd";

const { Option } = Select;
// eslint-disable-next-line react/prop-types
const PickerWithType = ({ type, onChange }) => {
  if (type === "time") return <TimePicker onChange={onChange} />;
  if (type === "date") return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

// eslint-disable-next-line react/prop-types
export default function InputList({ handleAddItem }) {
  const [type, setType] = useState("Jam");
  const [name, setName] = useState("");
  const [dueDate, setDueDate] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = { name, dueDate, id: Date.now() };
    handleAddItem(newItem);

    setName("");
  }

  return (
    <div className="container h-[80px] flex justify-center items-center mt-[80px] pb-6 border-b-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-[55vw]">
        <Space>
          <p className="text-white">Target Selesai : </p>
          <Select value={type} onChange={setType}>
            <Option value="time">Jam</Option>
            <Option value="date">Tanggal</Option>
            <Option value="week">Minggu</Option>
            <Option value="month">Bulan</Option>
          </Select>
          <PickerWithType type={type} onChange={(dates, dateString) => setDueDate(dateString)} />
        </Space>
        <div className="">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-[80%] h-[35px] px-2 mr-3 rounded" placeholder="Masukan List" />
          <button className="bg-cyan-700 text-md font-racingSansOne text-white text-center font-normal px-3 h-[35px] rounded">Add Task</button>
        </div>
      </form>
    </div>
  );
}
