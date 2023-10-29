import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = () => {
    // Prepare the data to be sent to the API
    const data = {
      name: name,
      email: email,
    };

    // Make a POST request to your API
    const apiURL = 'https://archive-image.onrender.com';
    fetch(apiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server here
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <div className="form">
        <div className="login_box">
          <h1>Welcome!</h1>
          <p>Hey there! Enter your Name and Email address to get into the image Drive.</p>
          <input
            type="text"
            className="name"
            placeholder="Name"
            id="name"
            onChange={handleNameChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="email"
            onChange={handleEmailChange}
          />
          <button className="sign_in" onClick={handleSubmit}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

