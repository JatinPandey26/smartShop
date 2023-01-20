import { useState } from "react";

export const Contact = () => {
  const [formdata, setFormData] = useState({});

  function handleChange(e) {
    setFormData({ ...formdata, [e.target.id]: e.target.value });
    console.log(formdata);
  }

  return (
    <div className="contact">
      <form action="" className="form">
        <label htmlFor="name">Name </label>
        <input id="name" type="text" onChange={(e) => handleChange(e)} />

        <label htmlFor="email">Email </label>
        <input id="email" type="email" onChange={(e) => handleChange(e)} />

        <label htmlFor="phone">Phone no. </label>
        <input id="phone" type="text" onChange={(e) => handleChange(e)} />
        <label htmlFor="suggestion">Suggestion</label>
        <textarea id="suggestion" onChange={(e) => handleChange(e)} />
      
        <button>Submit</button>

      </form>
    </div>
  );
};
