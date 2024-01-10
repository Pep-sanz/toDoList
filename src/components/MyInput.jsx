export default function MyInput({ handleOnChange, handleOnSubmit, name, styleType }) {
  return (
    <form onSubmit={(e) => handleOnSubmit(e)} className="flex flex-col">
      <input type="text" value={name} onChange={(e) => handleOnChange(e.target.value)} className={`h-[35px] px-2 rounded ${styleType}`} placeholder="Masukan List" />
    </form>
  );
}
