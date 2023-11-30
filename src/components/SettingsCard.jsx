import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

const SettingsCard = (props) => {

  const { _id, key, value } = props.settingsProp;

  return (
    
      <Card className="mt-6">
        <CardBody>
          <Typography color="light" className="text-sm font-bold tracking-wider bg-defaultColor rounded-full text-center mb-4">
            {key.toUpperCase()}
          </Typography>
          <Typography className="text-center text-[12px]">
            {value}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 mx-auto">
          <Link to={`/update/${_id}`}>
            <Button className="rounded mr-1" variant="gradient" size="sm">
              <FaRegEdit className="h-3 w-3 hover:text-cyan-500 font-bold" />
            </Button>
          </Link>
          <Link>
            <Button className="rounded" variant="gradient" size="sm" color="red">
              <AiFillDelete className="h-3 w-3 hover:text-cyan-500 font-bold" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
  );
};

export default SettingsCard;