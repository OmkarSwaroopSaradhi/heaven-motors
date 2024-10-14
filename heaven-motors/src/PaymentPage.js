// src/PaymentPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = location.pathname.split('/')[2];
  const { deliveryTime, rentTenure } = location.state || {};

  const handlePayment = () => {
    // Simulate payment process
    // Here you would handle the actual payment logic

    // Show success alert
    Swal.fire({
      title: 'Booking Confirmed!',
      text: 'Thank you for booking with us. Have a great drive!',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      // Redirect to home page or another page
      navigate('/');
    });
  };

  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <p>Car ID: {id}</p>
      <p>Delivery Time: {deliveryTime}</p>
      <p>Rent Tenure: {rentTenure} days</p>
      <button onClick={handlePayment}>Complete Payment</button>
    </div>
  );
};

export default PaymentPage;
