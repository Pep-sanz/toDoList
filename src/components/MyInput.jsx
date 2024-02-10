import { Flex, Input, Form } from "antd";
import MyButton from "./MyButton";

export default function MyInput({ styleType, handleGetList }) {
  const handleOnChange = (e) => {
    handleGetList(e.target.value);
  };
  return (
    <>
      <Form.Item className={`${styleType}`} name="list" rules={[{ required: true, message: "please enter your list name" }]}>
        <Input type="text" onChange={handleOnChange} />
      </Form.Item>
    </>
  );
}
