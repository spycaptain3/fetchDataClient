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
    const apiURL = 'http://localhost:4015';
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







// import React from 'react'
// import { useState } from 'react';
// import './Home.css';

// function Home() {

//     const [email, setEmail] = useState('');
//     const [name, setName] = useState('');
    

//     const handleNameChange = (event)=>{

//         setName(event.target.value);
//         console.log('Name: ',name);
//     };
//     const handleEmailChange = (event)=>{
//       setEmail(event.target.value);
//       console.log('Email: ',email);    
//   };



//   return (
//     <div>
//       <div class="form">
//   <div class="login_box">
//     <h1>Welcome!</h1>
//     <p>Hey there! Enter your Name and Email address to get into the image Drive.</p>
//     <input type="name" class="name" placeholder="Name" id="name" onChange={handleNameChange}/>
//     <input type="email" placeholder="Email" class="email" onChange={handleEmailChange}/>
//     {/* <input type="password" class="password" placeholder="Password" id="password"/> */}
//     <p>Having trouble in access? <span href="#">Click here.</span></p>
//     <button class="sign_in">Continue</button>
//     {/* <p>Or Sign In with</p>
//     <button><i class="fa-brands fa-google"></i> Google</button>
//     <button><i class="fa-brands fa-facebook"></i> Facebook</button>
//     <p>Don't have an account? <span href="#">Request here.</span></p> */}
//   </div>
// </div>
//     </div>
//   )
// }

// export default Home

