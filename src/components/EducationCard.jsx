import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSpinner2 } from "react-icons/im";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Alert
} from "@material-tailwind/react"; 


const EducationCard = (props) => {

	const { title, school, schoolLink, timeRange, address, learnings } = props.educationProps;

		return (
					<>
						<Card floated={true} shadow={true} className="min-w-[20vw]">
						  <CardBody>
						    <Typography className="text-sm font-bold tracking-wider bg-defaultColor rounded-full text-center mb-4">
						      {title.toUpperCase()}
						    </Typography>
						    <Typography className="text-center text-[12px] justify-center flex flex-wrap">
						      {school}
						    </Typography>
						    <Typography className="text-center text-[12px] justify-center flex flex-wrap">
						      {schoolLink}
						    </Typography>
						    <Typography className="text-center text-[12px] justify-center flex flex-wrap">
						      {timeRange}
						    </Typography>
						    <Typography className="text-center text-[12px] justify-center flex flex-wrap">
						      {address}
						    </Typography>
						    <Typography className="text-center text-[12px] justify-center flex flex-wrap">
						      {learnings}
						    </Typography>
						  </CardBody>
						</Card>
					</>
		)
}

export default EducationCard