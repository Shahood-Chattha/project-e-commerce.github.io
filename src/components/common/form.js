import * as React from 'react';
import Button from './button';
import { Link,useLocation } from 'react-router-dom';

export default function Form({ title, setPassword, setEmail, handleAction }) {
  const location = useLocation();
  const isLogoutPath = location.pathname === '/authentication/logout';

  return (
    <div className='card shadow-md shadow-black rounded p-5 bg-dark m-5'>
      <div className="heading-container text-center text-white p-3">
        <h3>{title} Form</h3>
      </div>

      <div className="">
        {!isLogoutPath && (
          <>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">Email</label>
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-white">Password</label>
              <input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>
          </>
        )}

        <div className="d-grid gap-2">
          <Button title={title} handleAction={handleAction} className="btn btn-primary mt-4" />
        </div>

        {location.pathname !== '/authentication/register' && (
          <div className="text-center mt-4">
            <Link to="/authentication/register">or Register?</Link>
          </div>
        )}
        {!isLogoutPath && (
          <div className="text-center mt-4">
            <Link to="/authentication/forgot-password">Forgot Password?</Link>
          </div>
        )}
      </div>
    </div>
  );
}
