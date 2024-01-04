import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header() {
  return (
    <div className="w-full flex flex-col justify-center items-center text-white px-6  ">
      <div className="flex justify-center items-center">
        <div className="w-[50px] h-[0px] border-2 border-white"></div>
        <div className=" font-racingSansOne text-[64px] font-normal">TO-DO LIST</div>
        <div className="w-[50px] h-[0px] border-2 border-white"></div>
      </div>
      <div className="w-full h-[23.72px] justify-center items-center gap-8 inline-flex">
        <div className="w-60 h-[0px] border-2 border-white"></div>
        <FontAwesomeIcon icon={faPenToSquare} className="text-xl" />
        <div className="w-60 h-[0px] border-2 border-white"></div>
      </div>
    </div>
  );
}
