import { useState } from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Logo from "./components/Logo";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id))
  }
  function handleToggleItems(id) {
    setItems((items) => (
      items.map((item) => item.id === id ? {...item, packed: !item.packed}: item)
    ));
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItems} onToggleItems={handleToggleItems} />
    </div>
  );
}









export default App;

// const [color, setColor] = useState("red")
//   function handleColor() {
//     setColor("blue")
//   }
//   return (
//     <div className="App">
//      <h1>My Favourite color is {color}!</h1>
//      <button type="button" onClick={handleColor}>Click</button>
//     </div>
//   );
