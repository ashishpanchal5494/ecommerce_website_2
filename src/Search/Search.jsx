import { useState } from 'react';
import SHOP_DATA from '../Homepage/Shop/ShopPageData'; // Import the SHOP_DATA array

function Search() {
  const [search, setSearch] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const inputChanged = (event) => {
    const searchTerm = event.target.value;
    setSearch(searchTerm);

    // Filter the SHOP_DATA based on the search term
    const filteredItems = SHOP_DATA.reduce((acc, category) => {
      const filteredCategoryItems = category.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredCategoryItems.length > 0) {
        acc.push({
          ...category,
          items: filteredCategoryItems,
        });
      }else{
        
      }
      return acc;

    }, []);

    setFilteredItems(filteredItems);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Search..'
        value={search}
        onChange={inputChanged}
      />

      {/* Display the filtered items */}
      <div>
        {filteredItems.map((category) => (
          <div key={category.id}>
            <h2>{category.title}</h2>
            <div>
              {category.items.map((item) => (
                <div key={item.id}>
                  <img src={item.imageUrl} alt={item.name} />
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;


