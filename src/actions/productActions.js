import { FETCH_PRODUCTS } from "../types";
import { FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types";


const data = {
  "products": [
    {
      "_id": "dress1",
      "image": "/images/dress1.jpg",
      "title": "Midi sundress with shirring detail",
      "description": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      "availableSizes": ["X", "L", "XL", "XXL"],
      "price": 29.9
    },
    {
      "_id": "dress2",
      "image": "/images/dress2.jpg",
      "title": "Midi sundress with ruched front",
      "description": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      "availableSizes": ["X", "M", "L"],
      "price": 18.9
    },
    {
      "_id": "dress3",
      "image": "/images/dress3.jpg",
      "title": "Midi dress in pink ditsy floral",
      "description": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      "availableSizes": ["X", "M", "L"],
      "price": 14.9
    },
    {
      "_id": "dress4",
      "image": "/images/dress4.jpg",
      "title": "cami maxi dress in polka dot",
      "description": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      "availableSizes": ["XL"],
      "price": 25.9
    },
    {
      "_id": "dress5",
      "image": "/images/dress5.jpg",
      "title": "Frill mini dress in yellow polka dot",
      "description": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      "availableSizes": ["X", "L", "XL"],
      "price": 10.9
    },
    {
      "_id": "dress6",
      "image": "/images/dress6.jpg",
      "title": "Midi tea dress in blue and red spot",
      "description": "This is for all the latest trends, no matter who you are, where you’re from and what you’re up to. Exclusive to ASOS, our universal brand is here for you, and comes in all our fit ranges: ASOS Curve, Tall, Petite and Maternity. Created by us, styled by you.",
      "availableSizes": ["XL", "XXL"],
      "price": 49.9
    }
  ]
}

export const fetchProducts = () => async (dispatch) => {
  // const res = await fetch("/api/products");
  // const data = await res.json();
  const dataItems = data.products
  dispatch({
    type: FETCH_PRODUCTS,
    payload: dataItems,
  });
};

export const filterProducts = (products, size) => (dispatch) => {
  dispatch({
    type: FILTER_PRODUCTS_BY_SIZE,
    payload: {
      size: size,
      items:
        size === ""
          ? products
          : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
    },
  });
};
export const sortProducts = (filteredProducts, sort) => (dispatch) => {
  const sortedProducts = filteredProducts.slice();
  if (sort === "latest") {
    sortedProducts.sort((a, b) => (a._id > b._id ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) =>
      sort === "lowest"
        ? a.price > b.price
          ? 1
          : -1
        : a.price > b.price
        ? -1
        : 1
    );
  }
  console.log(sortedProducts);
  dispatch({
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts,
    },
  });
};
