import React from 'react';

const Testimonials = () => {
  return (
    <div className=" bg-black w-full">
      <h2 className="text-center pt-3 text-white">What Our Customers Say</h2>
        <div className="row px-3 gy-4 py-3">
        <div className="col-md-4">
          <div className="card bg-dark text-white shadow">
            <div className="card-body">
            <p className="text-lg mb-4 text-white">"I was amazed by the quality of the service provided by this company. The staff was friendly and professional, and the results exceeded my expectations."</p>
            <h2 className="text-gray-500 ">John Doe</h2>
            <p className="text-sm text-gray-200">CEO, ABC Inc.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-white shadow">
            <div className="card-body">
            <p className="text-lg mb-4 text-white">"I've been using this product for a few months now, and it has completely transformed my daily routine. I can't imagine going back to life without it!"</p>
            <h2 className="text-gray-500 ">Jane Smith</h2>
            <p className="text-sm text-gray-400">Marketing Manager, XYZ Corp.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-dark text-white shadow">
            <div className="card-body">
            <p className="text-lg mb-4 text-white">"The support team at this company is top-notch. They were able to resolve my issue in a matter of minutes, and I couldn't be happier with the service."</p>
            <h2 className="text-gray-500 ">Mike Johnson</h2>
            <p className="text-sm text-gray-400">IT Manager, DEF Co.</p>
            </div>
          </div>
        </div>
      </div>  
    </div>
    )
}

export default Testimonials ;
