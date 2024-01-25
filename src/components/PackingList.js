import Item from "./Item";
export default function PackingList({ items, onDeleteItem, onToggleItems }) {
    return (
      <div>
        <ul>
          {items.map((item) => (
            <Item item={item} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} key={item.id} />
          ))}
        </ul>
  
        <div>
          <select>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button>Clear List</button>
        </div>
      </div>
    );
  }