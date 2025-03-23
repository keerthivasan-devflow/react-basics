import React, { useEffect, useState } from "react";

const FetchFakeProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");

  const [productId, setProductId] = useState(1);
  const [product, setProduct] = useState({});
  const [buttonId, setButtonId] = useState();

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const CategoriesList = data.map((product) => product.category);
    const UniqueCategoriesList = new Set(CategoriesList);
    setCategories(Array.from(UniqueCategoriesList));
    setProducts(data);
  };

  const fetchProductById = async () => {
    if (buttonId) {
      const response = await fetch(
        `https://fakestoreapi.com/products/${buttonId}`
      );
      const data = await response.json();
      setProduct(data);
    }
  };

  const filteredProducts = selectCategory
    ? products.filter((product) => product.category === selectCategory)
    : products;

  const updateFilteredProducts = (text) => {
    const newProducts = products.filter((product) =>
      product.title.toLowerCase().includes(text.toLowerCase())
    );
    setProducts(newProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchProductById();
  }, [buttonId]);
  // }, [productId]);

  return (
    <div>
      <section className="flex flex-wrap justify-center items-center gap-4">
        <article className="flex justify-center items-center">
          <label htmlFor="searchInputId" className="mr-2 font-bold">
            Enter the product ID
          </label>
          <input
            type="search"
            id="searchInputId"
            placeholder="Enter your favorites"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="my-3 border p-2 w-64"
          />
          <button
            type="button"
            className="border border-l-0 py-2 px-4"
            onClick={() => setButtonId(productId)}
          >
            Click
          </button>
          <p>{product.title}</p>
        </article>
        <article className="flex justify-center items-center">
          <label htmlFor="searchInputText" className="mr-2 font-bold">
            Enter the product name
          </label>
          <input
            type="search"
            placeholder="Enter your favorites"
            id="searchInputText"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="my-3 border p-2 w-64"
          />
          <button
            type="button"
            className="border border-l-0 p-2"
            onClick={() => updateFilteredProducts(searchText)}
          >
            Search
          </button>
        </article>
        <article>
          <select
            className="border p-2"
            onChange={(e) => {
              setSelectCategory(e.target.value);
            }}
          >
            {categories.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
        </article>
      </section>

      <section className="flex flex-wrap justify-center">
        {filteredProducts.map((product) => (
          <div className="border m-4 w-1/4 p-4" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain"
            />
            <h3 className="font-semibold m-2">
              {product.title} - Rs. {product.price}
            </h3>
            <p className="flex justify-between m-2">
              <span>Ratings: {product.rating.rate}</span>
              <span>Count: {product.rating.count}</span>
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FetchFakeProducts;
