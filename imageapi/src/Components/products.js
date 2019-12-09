import React from "react";

const Product = props => {
  if (props.productProp.length <= 0) {
    return null;
  }
  return (
    <div className="container">
      <div className="row">
        {props.productProp.hits.map(data =>
          <div className="col-md-4 pro">
            <img
              className="card-img-top img-responsive image"
              src={data.largeImageURL}
              alt={data.tag}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
