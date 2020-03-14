import React from "react";
import { connect } from "react-redux";

class List extends React.Component {
  render() {
    return (
      <div className="d-flex  justify-content-center mt-3" style={{}}>
        <ul className="list-group d-flex ">
          {this.props.productList &&
            this.props.productList.map(val => {
              return (
                <li className="list-group-item m-1 shadow p-2 mb-2">
                  <span className="font-weight-light mr-1">Product :</span>
                  <span className="font-weight-bolder mr-2">
                    {val.productName}
                  </span>
                  <span className="font-weight-light mr-1">Category :</span>
                  <span className="font-weight-bold mr-2">{val.category}</span>
                  <span className="font-weight-light mr-1">Condition :</span>
                  <span className="font-weight-bold mr-2">{val.condition}</span>
                  <span className="font-weight-light mr-1">City :</span>
                  <span className="font-weight-bold mr-2">{val.city}</span>
                  <span className="font-weight-light mr-1">
                    Selling Price :
                  </span>
                  <span className="font-weight-bold mr-2">
                    {val.sellingPrice}
                  </span>
                  <span className="font-weight-light mr-1">Can Bargain :</span>
                  <span className="font-weight-bold mr-2">{val.bargain}</span>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

const stateMapper = state => {
  return {
    productList: state.app.productListCopy
  };
};

export default connect(stateMapper)(List);
