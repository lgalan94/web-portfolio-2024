import { Outlet, Navigate } from 'react-router-dom';
import UserContext from '../UserContext';
import { useContext, useEffect, useState } from 'react';

export default function PrivateRoutes(){

const { user, setUser } = useContext(UserContext);

fetch(`${import.meta.env.VITE_API_URL}/user/user-details`, {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
})
.then(result => result.json())
.then(data => {
   	setUser({
   	          id: data._id,
   	          email: data.email,
   	          isAdmin: data.isAdmin
   	        });
})


	return (
		<>
		{
			user.id !== null ? (<Outlet />) : (<Navigate to = '/login' />)
		}
		</>
	)
}