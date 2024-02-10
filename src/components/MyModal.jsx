import { useState } from "react";
import { Form, Modal } from "antd";
import MyButton from "./MyButton";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyInput from "./MyInput";
import MyDueDate from "./MyDueDate";

// eslint-disable-next-line react/prop-types
const MyModal = ({ items, handleEditItem, id, time, date, list }) => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [newList, setNewList] = useState("");
  const [newDate, setNewDate] = useState(null);
  const [newTime, setNewTime] = useState(null);

  const handleOk = (e) => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(!open);
      setConfirmLoading(false);
    }, 1500);
    const updateTask = () =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, list: newList, date: newDate, time: newTime, id: item.id };
        }
        return item;
      });
    handleEditItem(updateTask);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <MyButton handleOnClick={() => setOpen(true)} label={<FontAwesomeIcon icon={faPenToSquare} />} styleType=" bg-neutral-400 text-xl" />
      <Modal
        title="Edit List"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer={
          <div className="flex justify-end items-center gap-3">
            <MyButton key="cancel" label="batal" styleType="bg-neutral-400" handleOnClick={handleCancel} />
            <MyButton key="ok" label="selesai" styleType="bg-neutral-400" handleOnClick={handleOk} />
          </div>
        }
        className="custom-modal"
      >
        <Form onFinish={handleOk} autoComplete="off" form={form}>
          <MyDueDate handleGetDate={setNewDate} handleGetTime={setNewTime} styleType={"ps-0"} date={date} time={time} />
          <MyInput handleGetList={setNewList} list={list} />
        </Form>
      </Modal>
    </>
  );
};

export default MyModal;
