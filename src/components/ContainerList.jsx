import MyButton from "./MyButton";

import {  faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyModal from "./MyModal";

// eslint-disable-next-line react/prop-types
export default function ContainerList({ items, handleRemoveItem,handleEditItem}) {
 
  return (
    <>
      <ul className="container flex flex-col items-center gap-6 pt-10">
        {items.map((res) => (
          <li key={res.id} className="w-[822px] bg-cyan-700 text-white flex justify-between items-center rounded text-[19px] font-normal px-3 py-2">
            <div>
              <span className="text-xl font-bold">{res?.name}</span>
              <p>target selesai pada : {res?.dueDate ? res?.dueDate.toString() : "Belum dipilih"}</p>
            </div>
            <div className="flex gap-2">
            <MyModal items={items} id={res.id} handleEditItem={handleEditItem} />
              <MyButton handleOnClick={() => handleRemoveItem(res?.id)} logo={<FontAwesomeIcon icon={faTrashAlt} />} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
