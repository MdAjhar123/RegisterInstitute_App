import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Registration = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://backend-production-d4dd.up.railway.app/institute/register",
        data
      );
      alert("Institute registered successfully!");
      reset();
    } catch (e) {
      console.error(e);
      alert("Error registering institute. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Register Institute</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="form-group">
          <label>Name:</label>
          <input {...register("name", { required: true })} className="form-control mb-2" placeholder="Institute Name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input {...register("email", { required: true })} type="email" className="form-control mb-2" placeholder="Institute Email" />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input {...register("contact_number", { required: true })} type="text" className="form-control mb-2" placeholder="Contact Number" />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <textarea {...register("address", { required: true })} className="form-control mb-2" placeholder="Address" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input {...register("password", { required: true })} type="password" className="form-control mb-2" placeholder="Password" />
        </div>
        <div className="form-group">
          <label>University Email:</label>
          <input {...register("university_email", { required: true })} type="email" className="form-control mb-2" placeholder="University Email" />
        </div>
        <div className="form-group">
          <label>University Name:</label>
          <input {...register("university_name", { required: true })} className="form-control mb-2" placeholder="University Name" />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Register</button>
      </form>
    </div>
  );
};

export default Registration;
