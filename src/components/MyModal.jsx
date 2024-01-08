import { useState } from "react";
import { Modal } from "antd";
import MyButton from "./MyButton";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
const MyModal = ({ items, handleEditItem, id }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [NewName, SetNewName] = useState("");
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = (e) => {
    e.preventDefault();
    setConfirmLoading(true);
    const updateTask = () =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, name: NewName, dueDate: item.dueDate, id: item.id };
        }
        return item;
      });
    handleEditItem(updateTask);
    setTimeout(() => {
      setOpen(!open);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <MyButton type="primary" handleOnClick={showModal} logo={<FontAwesomeIcon icon={faPenToSquare} />} />
      <Modal title="Title" open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
        <form onSubmit={handleOk}>
          <input type="text" value={NewName} onChange={(e) => SetNewName(e.target.value)} />
        </form>
      </Modal>
    </>
  );
};
export default MyModal;
