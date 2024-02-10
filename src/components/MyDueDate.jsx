import { DatePicker, TimePicker, Form, Flex, Space } from "antd";

export default function MyDueDate({ handleGetDate, handleGetTime, styleType, date, time }) {
  const handleOnChangeDate = (vlaues, valuesString) => {
    handleGetDate(valuesString);
  };

  const handleOnChangeTime = (vlaues, valuesString) => {
    handleGetTime(valuesString);
  };
  return (
    <div className={`ps-[180px] w-full ${styleType}`}>
      <Flex gap={8}>
        <p className="text-white">Target Selesai : </p>
        <Space>
          <Form.Item name="date" rules={[{ required: true, message: "please enter your date" }]}>
            <DatePicker placeholder="pilih tanggal" onChange={handleOnChangeDate} />
          </Form.Item>
          <Form.Item name="time" rules={[{ required: true, message: "please enter your time" }]}>
            <TimePicker placeholder="pilih jam" onChange={handleOnChangeTime} />
          </Form.Item>
        </Space>
      </Flex>
    </div>
  );
}
