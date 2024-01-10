import { useState } from "react";
import { Modal } from "antd";
import MyButton from "./MyButton";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyInput from "./MyInput";
import MyDueDate from "./MyDueDate";

// eslint-disable-next-line react/prop-types
const MyModal = ({ items, handleEditItem, id }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDueDate, setNewDueDate] = useState(null);

  const handleGetNewName = (newName) => {
    setNewName(newName);
  };

  const handleGetDueDate=(newDueDate)=>{
      setNewDueDate(newDueDate)
  }

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (e) => {
    e.preventDefault();
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(!open);
      setConfirmLoading(false);
    }, 1500);
    if (!newName) return;
    const updateTask = () =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, name: newName, dueDate: newDueDate, id: item.id };
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
      <MyButton handleOnClick={showModal} label={<FontAwesomeIcon icon={faPenToSquare} />} styleType="bg-neutral-400 text-xl" />
      <Modal title="Edit List" open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel} className="custom-modal">
        <MyDueDate handleOnChange={handleGetDueDate} />
        <MyInput name={newName} handleOnSubmit={handleOk} handleOnChange={handleGetNewName} />
      </Modal>
    </>
  );
};
export default MyModal;
