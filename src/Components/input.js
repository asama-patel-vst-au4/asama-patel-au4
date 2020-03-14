import React from "react";
import { connect } from "react-redux";

class Input extends React.Component {
  state = {
    productName: "",
    category: "Mobiles",
    condition: "Mint",
    city: "Bengluru",
    sellingPrice: "",
    canBargain: ""
  };

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!this.state.productName) {
            alert("Please enter product name");
          } else {
            this.props.dispatch({
              type: "SUBMIT",
              payload: this.state
            });
          }
        }}
      >
        <div className="form-inline d-flex justify-content-center mt-5">
          <input
            className="form-control mb-2 mr-sm-2"
            placeholder="Product Name"
            onChange={e => {
              this.setState({ productName: e.target.value });
            }}
          />
          <div className="input-group-prepend mb-2 mr-sm-2">
            <label className="input-group-text">Category</label>
            <select
              className="custom-select"
              onChange={e => {
                this.setState({ category: e.target.value });
              }}
            >
              {this.props.categoryList.map(val => {
                return <option>{val}</option>;
              })}
            </select>
          </div>

          <div className="input-group-prepend mb-2 mr-sm-2">
            <label className="input-group-text">Condition</label>
            <select
              className="form-control"
              onChange={e => {
                this.setState({ condition: e.target.value });
              }}
            >
              {this.props.conditionList.map(val => {
                return <option>{val}</option>;
              })}
            </select>
          </div>

          <div className="input-group-prepend mb-2 mr-sm-2">
            <label className="input-group-text">City</label>
            <select
              className="form-control"
              onChange={e => {
                this.setState({ city: e.target.value });
              }}
            >
              {this.props.cityList.map(val => {
                return <option>{val}</option>;
              })}
            </select>
          </div>

          <div className="form-inline d-flex justify-content-center mt-5">
            <input
              className="form-control mb-2 mr-sm-2"
              placeholder="Selling Price"
              onChange={e => {
                this.setState({ sellingPrice: e.target.value });
              }}
            />

            <div className="input-group-prepend mb-2 mr-sm-2">
              <label className="input-group-text">Can Bargain</label>
              <select
                className="form-control"
                onChange={e => {
                  this.setState({ bargain: e.target.value });
                }}
              >
                {this.props.bargainList.map(val => {
                  return <option>{val}</option>;
                })}
              </select>
            </div>

            <button className="btn btn-dark pr-5 pl-5 " type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const stateMapper = state => {
  return {
    categoryList: state.app.categoryList,
    conditionList: state.app.conditionList,
    cityList: state.app.cityList,
    bargainList: state.app.bargainList
  };
};
export default connect(stateMapper)(Input);
