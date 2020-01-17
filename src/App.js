import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { productRequest } from "./app/redux/actions/products";
import ProductList from "./app/components/ProductList";

function App(props) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPages] = useState(1);
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(productRequest(search, currentPage - 1));
  }, [currentPage, dispatch, search]);

  const handleChange = event => setSearch(event.target.value);
  const paginate = pageNumber => setCurrentPages(pageNumber);
  const previousPage = pageNumber => setCurrentPages(pageNumber - 1);
  const nextPage = pageNumber => setCurrentPages(pageNumber + 1);

  return (
    <div className="contianer">
      <ProductList
        {...props}
        search={search}
        handleChange={handleChange}
        currentPage={currentPage}
        nextPage={nextPage}
        previousPage={previousPage}
        paginate={paginate}
        products={products}
      />
    </div>
  );
}

export default App;
