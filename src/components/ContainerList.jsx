import MyButton from "./MyButton";
import MyModal from "./MyModal";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";

// eslint-disable-next-line react/prop-types
export default function ContainerList({ items, handleRemoveItem, handleEditItem }) {
  return (
    <>
      <ul className="container flex flex-col items-center gap-6 pt-10 overflow-y-auto">
        {items.map((res) => (
          <li key={res.id} className="w-[822px] bg-cyan-700 text-white flex justify-between items-center rounded text-[19px] font-normal px-3 py-2">
            <div>
              <span className="text-xl font-bold">{res.list}</span>
              <p>
                target selesai : {dayjs(res.date).format("DD MMMM YYYY")} , {dayjs(res.time, "HH:mm:ss").format("HH:mm:ss")}
              </p>
            </div>
            <div className="flex gap-2">
              <MyModal items={items} id={res.id} handleEditItem={handleEditItem} list={res.list} date={res.date} time={res.time} />
              <MyButton handleOnClick={() => handleRemoveItem(res?.id)} label={<FontAwesomeIcon icon={faTrashAlt} />} styleType="bg-neutral-400 text-xl" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
