import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../actions/orderActions";
import formatCurrency from "../util";

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

class Orders extends Component {
  /*componentDidMount() {
    this.props.fetchOrders();
  }*/
  render() {
    const { orders } = this.props;
    console.log(orders,"set of Orders")
    return !orders ? (
      <div>Orders</div>
    ) : (
      <div className="orders">
        <h2>Orders</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TOTAL</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADDRESS</th>
              <th>ITEMS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <td>{index + 1}</td>
                <td> {order.total}</td>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>
                  {order.cartItems.map((item) => (
                    <div>
                      {item.count} {" x "} {item.title}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default connect(
  (state) => ({
    orders: state.order.orders,
    cartItems: state.cart.cartItems,
  }),
  {
    fetchOrders,
  }
)(Orders);
