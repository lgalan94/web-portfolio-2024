import { AppNavbar, Footer, Layout, Logo, AnimatedText, Transition, PageTitle, MyProjects } from '../components'
import React, {useState} from 'react';
import { ImSpinner2 } from "react-icons/im";
import {
  Typography,
  Input,
  Checkbox,
  Button,
  Alert,
  Textarea
} from "@material-tailwind/react";
import { FaUndo } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { MdError } from "react-icons/md";

const Projects = () => {

	

	return (
		<>
				<PageTitle title="Web Portfolio | Projects" />
				<AppNavbar />

				<AnimatedText text="Projects" className="mt-4 mb-8 capitalize" />
				<Layout className="mb-20">
					<MyProjects />
				</Layout>

				<ToastContainer size="sm" position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
				<Footer />
		</>
	)
}

export default Transition(Projects)

