import { Button } from "antd";

// eslint-disable-next-line react/prop-types
export default function MyButton({ styleType, handleOnClick, label,}) {
  return (
    <>
      <Button onClick={handleOnClick} className={`flex justify-center items-center border-0 ${styleType}`}>
        {label}
      </Button>
      
    </>
  );
}
