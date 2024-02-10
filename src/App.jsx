import Header from "./components/Header";
import InputList from "./components/InputList";
import ContainerList from "./components/ContainerList";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleRemoveItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  const handleEditItem = (newTask) => {
    setItems(newTask);
  };

  return (
    <div className="w-full h-screen bg-zinc-800 flex flex-col items-center pt-[45px] font-poppins">
      <Header />
      <InputList handleAddItem={handleAddItem} />
      <ContainerList items={items} handleRemoveItem={handleRemoveItem} handleEditItem={handleEditItem} />
    </div>
  );
}

export default App;
