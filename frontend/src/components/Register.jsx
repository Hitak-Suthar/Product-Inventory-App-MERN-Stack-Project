import React, { useState } from "react";

function Register({ setPage, API_URL }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const errorText = await res.text(); // Get raw response
        console.error("Registration failed - Status:", res.status, "Response:", errorText);
        throw new Error(`Registration failed: ${res.status} - ${errorText}`);
      }

      const data = await res.json();
      console.log("Registration success:", data);
      // Handle success (e.g., store token if auto-login, redirect)
      alert("Registration successful!");
    } catch (error) {
      console.error("Error registering:", error);
      alert(`Something went wrong: ${error.message}`); // Update your alert to show details
    }

    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Register</h2>

      <form className="d-flex flex-column gap-2" onSubmit={submitHandler}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          className="form-control"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn btn-primary" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default Register;
