import { Form, Flex } from "antd";
import MyDueDate from "./MyDueDate";
import MyInput from "./MyInput";
import MyButton from "./MyButton";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function InputList({ handleAddItem }) {
  const [form] = Form.useForm();
  const [list, setList] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const onFinish = () => {
    const newItems = { list, date, time, id: Date.now() };
    handleAddItem(newItems);
    form.resetFields();
  };

  return (
    <div className="container mt-10 border-b-2 pb-6">
      <Form className="form-input-list" onFinish={onFinish} autoComplete="off" form={form}>
        <MyDueDate handleGetDate={setDate} handleGetTime={setTime} />
        <Flex justify="center" gap={16}>
          <MyInput styleType="w-[800px]" handleGetList={setList} />
          <MyButton label="Tambah" styleType="bg-cyan-700 text-xl font-racingSansOne text-white" />
        </Flex>
      </Form>
    </div>
  );
}
