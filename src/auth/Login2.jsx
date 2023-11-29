import { useState, useEffect, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import UserContext from '../UserContext.js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const retrieveUserDetails = (token) => {
    fetch(`http://localhost:4001/user/user-details`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(result => result.json())
      .then(data => {
        setUser({
          id: data._id,
          isAdmin: data.isAdmin
        });

        if (data.isAdmin) {
          setTimeout(() => navigate('/admin-home'), 900);
          
        } else {
          setTimeout(() => navigate('/admin-home'), 900);
        }
      });
  }; 

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4001/user/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(result => result.json())
      .then(data => {
        console.log(data)
        if (data === false) {
          toast.error("Invalid email or password!");
        } else {
          toast.success("Login Successful!");
          localStorage.setItem('token', data.auth);
          retrieveUserDetails(data.auth);
        }
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 bg-indigo-100 shadow-md shadow-slate-400 rounded-md min-w-[400px]">
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">Email:</label>
            <input
              type="text"
              id="email"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-10">
            <label htmlFor="password" className="block mb-2 font-medium">Password:</label>
            <input
              type="password"
              id="password"
              className="focus:outline-none focus:ring-2 focus:ring-blue-500 w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
          <button
            type="submit"
            className="w-48 px-4 py-2 font-medium rounded outline outline-slate-300 text-xs hover:bg-gray-500 hover:text-white"
          > 
            Login
          </button>
          </div>
        </form>
      </div>

      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      <ToastContainer />

    </div>
  );
};

export default Login;