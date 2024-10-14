// src/BookingPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const { id } = useParams(); // Get the car ID from the URL
  const navigate = useNavigate();

  const [deliveryTime, setDeliveryTime] = useState('');
  const [rentTenure, setRentTenure] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to payment page with the booking details
    navigate(`/payment/${id}`, { state: { deliveryTime, rentTenure } });
  };

  return (
    <div className="booking-page">
      <h1>Book Your Car</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Delivery Time:
          <input 
            type="datetime-local" 
            value={deliveryTime} 
            onChange={(e) => setDeliveryTime(e.target.value)} 
            required 
          />
        </label>
        <label>
          Rent Tenure (days):
          <input 
            type="number" 
            value={rentTenure} 
            onChange={(e) => setRentTenure(e.target.value)} 
            min="1" 
            required 
          />
        </label>
        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default BookingPage;
