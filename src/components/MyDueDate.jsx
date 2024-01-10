import { DatePicker, Select, TimePicker } from "antd";
import { useState } from "react";
const { Option } = Select;
// eslint-disable-next-line react/prop-types
const PickerWithType = ({ type, onChange }) => {
  if (type === "time") return <TimePicker onChange={onChange} />;
  if (type === "date") return <DatePicker onChange={onChange} />;
  return <DatePicker picker={type} onChange={onChange} />;
};

export default function MyDueDate({ handleOnChange }) {
  const [type, setType] = useState("Jam");
  return (
    <div className="flex flex-col gap-3">
      <p className="text-white">Target Selesai : </p>
      <div className="flex gap-2">
        <Select value={type} onChange={setType}>
          <Option value="time">Jam</Option>
          <Option value="date">Tanggal</Option>
          <Option value="week">Minggu</Option>
          <Option value="month">Bulan</Option>
        </Select>
        <PickerWithType type={type} onChange={(dates, dateString) => handleOnChange(dateString)} />
      </div>
    </div>
  );
}
