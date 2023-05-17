import React from "react";
import checkOut from "../../../assets/images/checkout/checkout.png";
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const checkOutHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.contactNumber.value;
    const email = user?.email || "unregister";
    const message = form.message.value;
    console.log(name, phone, email, message);
  };

  const {_id, price, title} = useLoaderData();

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${checkOut})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Check Out</h1>
            <h3 className="font-bold text-xl">{title}</h3>
            <p className="font-bold">${price}</p>
          </div>
        </div>
      </div>
      <form className="mb-20 mt-10" onSubmit={checkOutHandler}>
        <div className="grid grid-cols-1 lg:grid-cols-2 m-12 gap-5">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered  w-full mb-10 "
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered  w-full mb-10 "
          />
          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            className="input input-bordered  w-full mb-4 "
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            readOnly
            className="input input-bordered  w-full  "
          />
          <textarea
            name="message"
            className="textarea textarea-bordered w-full"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="text-center">
          <input
            type="submit"
            className="btn btn-outline mr-3"
            value="Submit"
          />
          <Link to="/order">
            <input
              type="submit"
              className="btn btn-outline"
              value="Place Order"
            />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
