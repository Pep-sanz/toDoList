import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line react/prop-types
export default function ContainerList({ items, handleRemoveItem }) {
  return (
    <>
      <ul className="container h-1/2 flex flex-col items-center gap-6 pt-10">
        {items.map((res) => (
          <li key={res.id} className="w-[822px] h-[40px] bg-cyan-700 text-white flex justify-between items-center rounded text-[19px] font-normal px-3">
            <span>{res.name}</span>
            <div onClick={() => handleRemoveItem(res.id)} className="h-[35px] w-[80px] text-center rounded text-2xl bg-neutral-400 cursor-pointer">
              <FontAwesomeIcon icon={faTrashAlt} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
