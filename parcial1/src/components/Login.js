import React, { useState } from 'react';


const Login = ({ user }) => {

  const [editableUser, setEditableUser] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableUser({ ...editableUser, [name]: value });
  };

  return (
    <div className="profile">
      <h2>Login</h2>
      <div className="profile-details">
        <label>Email:</label>
          <input
            type="text"
            name="email"
            //value={editableUser.nombre}
            onChange={handleChange}
          />
        <label>Password</label>
          <input
            type="text"
            name="password"
            minLength={8}
            //value={editableUser.nombre_completo}
            onChange={handleChange}
          />
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Login;
