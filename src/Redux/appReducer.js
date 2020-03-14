const initialState = {
  categoryList: [
    "Mobiles",
    "Laptops",
    "Desktops",
    "Furniture",
    "Cutlery",
    "Automobiles",
    "Books",
    "Clothes"
  ],
  conditionList: ["Mint", "Very Good", "Good", "Decent", "Poor", "Very Poor"],
  cityList: [
    "Bengluru",
    "Mumbai",
    "Chennai",
    "Kolkata",
    "Vadodara",
    "Agra",
    "Delhi",
    "Patna"
  ],
  bargainList: ["Yes", "No"],
  productList: [
    {
      productName: "Dell Laptop",
      productCategory: "Mobiles",
      sellingPrice: "35000",
      condition: "Good",
      city: "Chennai",
      canBargain: "No"
    },
    {
      productName: "Ford",
      productCategory: "Automobiles",
      sellingPrice: "350000",
      condition: "Mint",
      city: "Kolkata",
      bargain: "Yes"
    }
  ],
  productListCopy: [
    {
      productName: "Dell Laptop",
      productCategory: "Mobiles",
      sellingPrice: "35000",
      condition: "Good",
      city: "Chennai",
      canBargain: "No"
    },
    {
      productName: "Ford",
      productCategory: "Automobiles",
      sellingPrice: "350000",
      condition: "Mint",
      city: "Kolkata",
      canBargain: "Yes"
    }
  ],
  categoryFilter: "All",
  conditionFilter: "All",
  cityFilter: "All"
};

function appReducerFunction(state = initialState, action) {
  let stateCopy = { ...state };
  switch (action.type) {
    case "SUBMIT":
      console.log("REDUCER->", action.payload);
      stateCopy.productList.push(action.payload);

      console.log("whole array:", stateCopy.productList);
      stateCopy.productListCopy = stateCopy.productList.slice();
      if (stateCopy.categoryFilter !== "All") {
        stateCopy.productListCopy = stateCopy.productListCopy.filter(
          product => product.category === stateCopy.categoryFilter
        );
      }

      if (stateCopy.conditionFilter !== "All") {
        stateCopy.productListCopy = stateCopy.productListCopy.filter(
          product => product.condition === stateCopy.conditionFilter
        );
      }

      console.log("Final array:", stateCopy.productListCopy);
      return stateCopy;

    case "CITY_FILTER_CHANGE":
      console.log(action.payload);
      stateCopy.productListCopy = stateCopy.productList.slice();
      stateCopy.categoryFilter = action.payload;
      if (stateCopy.categoryFilter !== "All") {
        stateCopy.productListCopy = stateCopy.productListCopy.filter(
          product => product.category === stateCopy.categoryFilter
        );
      }

      if (stateCopy.conditionFilter !== "All") {
        stateCopy.productListCopy = stateCopy.productListCopy.filter(
          product => product.condition === stateCopy.conditionFilter
        );
      }

      console.log(stateCopy.productListCopy);
      return stateCopy;

    case "CONDITION_FILTER_CHANGE":
      console.log(action.payload);
      stateCopy.productListCopy = stateCopy.productList.slice();
      stateCopy.conditionFilter = action.payload;

      if (stateCopy.areaFilter !== "All") {
        stateCopy.productListCopy = stateCopy.productListCopy.filter(
          product => product.area === stateCopy.categoryFilter
        );
      }

      if (stateCopy.conditionFilter !== "All") {
        stateCopy.productListCopy = stateCopy.productListCopy.filter(
          product => product.condition === stateCopy.conditionFilter
        );
      }

      console.log(stateCopy.productListCopy);
      return stateCopy;
    default:
      return state;
  }
}

export default appReducerFunction;
