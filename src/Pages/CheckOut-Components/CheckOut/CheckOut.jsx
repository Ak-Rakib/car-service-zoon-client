import React, { useContext } from "react";
import checkOut from "../../../assets/images/checkout/checkout.png";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const { _id, price, title, img } = useLoaderData();
  console.log(img)

  const checkOutHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email || "unregister";
    const userOrder = {
      name,
      date,
      email,
      img,
      service: title,
      service_id: _id,
      price: price,
    };
    console.log(userOrder);

    fetch('http://localhost:5000/order', {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(userOrder)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    });
  };

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
      <form onSubmit={checkOutHandler}>
        <div className="grid grid-cols-1 lg:grid-cols-2 m-12 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="name"
              defaultValue={user?.displayName}
              className="input input-bordered  w-full mb-10 "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered  w-full mb-10 "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
              defaultValue={user?.email}
              className="input input-bordered  w-full mb-4 "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={"$" + price}
              readOnly
              className="input input-bordered  w-full  "
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              type="text"
              name="message"
              className="textarea textarea-bordered w-full"
              placeholder="message"
            ></textarea>
          </div>
          <input className="btn btn-block" type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
