import React, { useState } from 'react';

function SingleInitialization() {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <div>
        <p>First Name: {values.firstName}</p>
        <p>Last Name: {values.lastName}</p>
        <p>Email: {values.email}</p>
      </div>
    </div>
  );
}

export default SingleInitialization;