import React, { useState } from 'react';

const UserRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerHandler = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('User registered successfully:', data);
    } else {
      console.error('Error registering user:', data);
    }
  };

  return (
    <div className="user-register">
      <h2>Register</h2>
      <form onSubmit={registerHandler}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegister;
