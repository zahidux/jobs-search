import React, { useState } from "react";
import { toast } from "react-toastify";

const ApplyNow = () => {
  const jobSubmit = (event) => {
    const [accepted, setAccepted] = useState(false);
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const address = from.address.value;
    const phone = from.phone.value;
    const Url = from.Url.value;
    from.reset();
    alert("Applied Successfully");
    console.log(name, email, address, phone, Url);

    console.log(from);

    //when filled all filled then show submit button

    const handelAccepted = (event) => {
      setAccepted(event.target.from);
    };
  };
  return (
    <section className="container bg-slate-300 p-16 shadow-lg rounded-xl">
      <div>
        <form onSubmit={jobSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 font-semibold text-slate-700 text-2xl  ">
            <div>
              <p>Name</p>
              <input
                className="text-lg pl-3 py-2 mt-4 rounded-lg w-full mb-5"
                type="text"
                name="name"
                id=""
                placeholder=" Enter your name"
              />
            </div>
            <div>
              <p>Email</p>
              <input
                className="text-lg pl-3 py-2 mt-4 rounded-lg w-full mb-5"
                type="text"
                name="email"
                id=""
                placeholder="Email Address"
              />
            </div>
            <div>
              <p>Address</p>
              <input
                className="text-lg pl-3 py-2 mt-4 rounded-lg w-full mb-5"
                type="text"
                name="address"
                id=""
                placeholder="Current Address"
              />
            </div>
            <div>
              <p>Phone</p>
              <input
                className="text-lg pl-3 py-2 mt-4 rounded-lg w-full"
                type="text"
                name="phone"
                id=""
                placeholder="Phone number"
              />
            </div>
            <div>
              <p>Phone</p>
              <input
                onClick={handelAccepted}
                className="text-lg pl-3 py-2 mt-4 rounded-lg w-full"
                type="checkbox"
                name="accept"
                id=""
                placeholder="Phone number"
              />
            </div>
            <div className="item-center">
              <p className="text-slate-700 text-2xl font-medium">Photo Url</p>
              <input
                className="text-lg pl-3 py-2 mt-4 rounded-lg w-full"
                type="text"
                name="Url"
                id=""
                placeholder="Your image url"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              disabled={!accepted}
              className="shadow hover:shadow-lg mt-16 hover:bg-teal-400 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-5 px-16 text-xl font-extrabold text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ApplyNow;
