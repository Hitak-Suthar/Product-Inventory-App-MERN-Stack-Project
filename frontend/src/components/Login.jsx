import React, { useState } from 'react';

const Login = ({setPage}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}, Password: ${password}`);
    setPage("products")
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Login</h2>
      <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>
        <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <button className="btn btn-primary" type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;