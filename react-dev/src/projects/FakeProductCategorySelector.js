import { useEffect, useState } from "react";

const FakeProductCategorySelector = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [dropdown, setDropdown] = useState([]);

  const updateSearchInput = (e) => {
    let input = e.target.value;
    setSearchInput(input);
  };

  const finalProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "" ||
      product.category === selectedCategory.toLowerCase();
    const matchesSearch =
      searchInput === "" ||
      product.title.toLowerCase().includes(searchInput.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const fetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const listofproducts = await data.json();
    const listofdropdowns = [
      ...new Set(listofproducts.map((product) => product.category)),
    ];
    setProducts(listofproducts);
    setDropdown(listofdropdowns);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Create a dropdown using Fake API Data</h1>
      <div className="flex justify-center m-3">
        <input
          type="text"
          placeholder="Enter products name"
          className="w-[500px] border-2 px-3"
          onChange={updateSearchInput}
          value={searchInput}
        />
      </div>
      <div className="m-3">
        <select
          className="border-2 px-3"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>Favorite Category</option>
          {dropdown.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-center">
        {finalProducts.map((product) => (
          <section className="border p-3 w-[300px] m-3" key={product.id}>
            <h3 className="font-semibold">{product.title}</h3>
            <p>{product.description}</p>
            <h3 className="font-semibold text-red-600">{product.category}</h3>
          </section>
        ))}
      </div>
    </>
  );
};

export default FakeProductCategorySelector;
