import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import axios from 'axios';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const MyOrders = () => {
  const { url, token, currency } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [review, setReview] = useState(''); // New state for review input

  const fetchAllOrders = async () => {
    const response = await axios.get(url + '/api/order/list');
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      alert('Error');
    }
  };

  const fetchOrders = async () => {
    const response = await axios.post(url + '/api/order/userorders', {}, { headers: { token } });
    setData(response.data.data);
  };

  const reviewHandler = async (orderId) => {
    console.log("Review handler called with:", review, orderId); // Log values
    try {
        const response = await axios.post(
            url + "/api/order/review",
            {
                orderId,
                review: review // Use the review state here
            },
            {
                headers: {
                    token: token // Add token to the headers
                }
            }
        );

        if (response.data.success) {
            await fetchOrders();
            setReview(''); // Clear the review input
        } else {
            console.error("Failed to update review:", response.data.message);
        }
    } catch (error) {
        console.error("Error in reviewHandler:", error); // Log error
    }
};


  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className='my-orders'>
      <h2>My Orders</h2>
      <div className='container'>
        {data.map((order, index) => {
          return (
            <div key={index} className='my-orders-order'>
              <img src={assets.parcel_icon} alt='' />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + ' x ' + item.quantity;
                  } else {
                    return item.name + ' x ' + item.quantity + ', ';
                  }
                })}
              </p>
              <p>
                {currency}
                {order.amount}.00
              </p>
              <p>Items: {order.items.length}</p>
              <p>
                <span>&#x25cf;</span> <b>{order.payment ? order.status : 'Payment Failed'}</b>
              </p>
              {order.payment && <button onClick={fetchOrders}>Track Order</button>}
              <input
                type='text'
                name='review'
                placeholder='Review'
                id='review'
                className='reviewInput'
                value={review} // Bind input to review state
                onChange={(e) => setReview(e.target.value)} // Update review state
              />
              <button className='review' onClick={() => reviewHandler(order._id) } >Submit</button> {/* Submit button */}
            </div>
          );
        }) }
      </div>
    </div>
  );
};

export default MyOrders;
