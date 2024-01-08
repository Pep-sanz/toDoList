import { Button } from "antd";

// eslint-disable-next-line react/prop-types
export default function MyButton({ handleOnClick, logo}) {
  return (
    <>
      <Button type="primary" onClick={handleOnClick} className="h-[35px] w-[80px] flex justify-center items-center text-2xl bg-neutral-400">
        {logo}
      </Button>
      
    </>
  );
}
