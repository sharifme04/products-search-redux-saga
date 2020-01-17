import React from "react";
import PropTypes from "prop-types";
import Pagination from "./Pagination";

const ProductList = props => {
  const { search, handleChange, products } = props;

  return (
    <div className="container-fluid mt-1">
      <h2>Product search app</h2>
      <hr />
      <div className="row">
        <div className="col-4">
          {products.products && products.products.nbPages > 1 && (
            <Pagination {...props} />
          )}
        </div>
        <div className="col-4">
          <div className="form-group">
            <input
              type="text"
              value={search}
              onChange={handleChange}
              className="form-control"
              id="searchId"
              placeholder="Please enter a product name"
              name="search"
            />
          </div>
        </div>
        <div className="col-4"></div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 d-flex justify-content-center"></div>
        {products.isLoading ? (
          <div className="text-center">
            <div
              className="spinner-border custom-spin text-secondary"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row justify-content-center text-center">
            {products &&
            products.products &&
            products.products.hits &&
            products.products.hits.length ? (
              products.products.hits.map(e => (
                <div key={e.objectID} className="col-auto mb-3">
                  <div className="card">
                    {e.image ? (
                      <img src={e.image} className="image" alt={e.name} />
                    ) : (
                      <p>Image is not available</p>
                    )}
                    <div className="card-body">
                      <h5 className="card-title">{e.name}</h5>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h5>Products are not available</h5>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  search: PropTypes.any,
  handleChange: PropTypes.func,
  products: PropTypes.object,
};

export default ProductList;
