import React from "react";
import { connect } from "react-redux";

class Dropdowns extends React.Component {
  render() {
    return (
      <div className="container d-flex justify-content-between mt-5">
        <div className="input-group-prepend mb-2 mr-sm-2">
          <label className="input-group-text">City Filter Dropdown</label>
          <select
            className="btn btn-dark"
            onChange={e => {
              this.props.dispatch({
                type: "CITY_FILTER_CHANGE",
                payload: e.target.value
              });
            }}
          >
            <option>All</option>
            {this.props.cityList.map(val => {
              return <option>{val}</option>;
            })}
          </select>
        </div>

        <div className="input-group-prepend mb-2 mr-sm-2">
          <label className="input-group-text">Category Filter Dropdown</label>
          <select
            className="btn btn-dark"
            onChange={e => {
              this.props.dispatch({
                type: "CATEGORY_FILTER_CHANGE",
                payload: e.target.value
              });
            }}
          >
            <option>All</option>
            {this.props.categoryList.map(val => {
              return <option>{val}</option>;
            })}
          </select>
        </div>
      </div>
    );
  }
}

const stateMapper = state => {
  return {
    categoryList: state.app.categoryList,
    conditionList: state.app.conditionList,
    cityList: state.app.cityList
  };
};
export default connect(stateMapper)(Dropdowns);
