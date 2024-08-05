import { useState, useEffect } from 'react';
import { Typography, Accordion, AccordionHeader, AccordionBody, Button, Card, CardBody, CardFooter, CardHeader } from '@material-tailwind/react';
import { BsArrowUpRightSquare } from "react-icons/bs";
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdArrowDropdown } from "react-icons/io";

const MyProjects = () => {
  let viewImage = "https://drive.google.com/uc?export=view&id=";
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingCount, setLoadingCount] = useState(3); // default loading count

  let CustomCard = (props) => {
    const { _id, title, imgUrl, technologiesUsed, description, projectLink, sourceCode } = props.itemProps;
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);   

    return (
      <motion.div
      		initial={{ opacity: 0, y: 50 }}
      		animate={{ opacity: 1, y: 0 }}
      		exit={{ opacity: 0, y: 50 }}
      		transition={{ duration: 0.3 }}
      >
      	<Card
      	  className={`text-center w-full max-w-[25rem] flex flex-col gap-4 p-4 uppercase group ${open === 1 ? "transition-colors delay-75 bg-green-50" : "transition-colors delay-75"}`}
      	>
      	  <div>
      	    <Typography className={`capitalize tracking-wider ${open === 1 ? "transition-colors delay-75 text-green-500" : "transition-colors delay-75"}`} variant="h6"> {title} </Typography>
      	  </div>
      	  <div>
      	    <img src={imgUrl} />
      	  </div>
      	  <div className={`flex flex-row text-xs gap-2 justify-center flex-wrap font-ibm ${open === 1 ? "transition-colors delay-75 text-green-500" : "transition-colors delay-75"}`}>
      	    {technologiesUsed.map(item => (
      	      <div key={item._id} className="px-2 py-1 border-l-2 shadow-md border-gray-500 bg-[#2ec946]/4">{item.name}</div>
      	    ))}
      	  </div>
      	  <Accordion open={open === 1}>
      	    <AccordionHeader className={`text-sm flex items-center justify-center hover:scale-105 hover:text-green-700 border-none ${open === 1 ? 'text-green-500 transition-colors delay-75' : 'transition-colors delay-75'}`} onClick={() => handleOpen(1)}><IoMdArrowDropdown className={`${open ? 'rotate-180' : ''} transition-transform delay-75 w-5 h-5`} /> Description</AccordionHeader>
      	    <AccordionBody>
      	      <Typography className="text-sm text-start lowercase first-letter:uppercase first-letter:text-xl">{description}</Typography>
      	      <div className="flex flex-col mt-8">
      	        <span className="text-xs text-start">Project Link: </span>
      	        <a target="_blank" href={projectLink} className="text-xs hover:text-blue-400 italic lowercase flex items-center flex-row gap-1">{projectLink} <BsArrowUpRightSquare className="h-4 w-4" /></a>
      	      </div>
      	      <div className="flex flex-col mt-8">
      	        <span className="text-xs text-start">Source Code: </span>
      	        <a target="_blank" href={sourceCode} className="text-xs hover:text-blue-400 italic lowercase flex items-center flex-row gap-1">{sourceCode} <BsArrowUpRightSquare className="h-4 w-4" /></a>
      	      </div>
      	    </AccordionBody>
      	  </Accordion>
      	</Card>
      </motion.div>
    );
  }

  const fetchProjects = () => {
    fetch(`${import.meta.env.VITE_API_URL}/projects/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        data.sort((a, b) => b.createdOn.localeCompare(a.createdOn));
        if (data.length > 0) {
          setLoadingCount(data.length);
          setProjects(data.map(item => (
            <CustomCard key={item._id} itemProps={item} />
          )));
          setIsLoading(false);
        } else {
          setLoadingCount(0);
          setProjects(<div>No data!</div>);
          setIsLoading(false);
        }
      })
      .catch(error => console.error(error));
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const loading = Array.from({ length: loadingCount }).map((_, index) => (
    <Card key={index} className="w-96 animate-pulse">
      <Typography
        as="div"
        variant="h1"
        className="m-4 h-5 w-56 self-center rounded-md bg-gray-300"
      >
        &nbsp;
      </Typography>
      <CardHeader
        shadow={false}
        floated={false}
        className="relative grid h-56 place-items-center bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-12 w-12 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </CardHeader>
      <CardBody className="flex flex-row flex-wrap justify-center gap-2">
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-4 w-[70px] rounded-sm bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-4 w-[70px] rounded-sm bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-4 w-[70px] rounded-sm bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-4 w-[70px] rounded-sm bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-4 w-[70px] rounded-sm bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-4 w-[70px] rounded-sm bg-gray-300"
        >
          &nbsp;
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 self-center">
        <Button
          disabled
          tabIndex={-1}
          className="h-5 w-24 bg-gray-300 shadow-none hover:shadow-none"
        >
          &nbsp;
        </Button>
      </CardFooter>
    </Card>
  ));

  return (
    <div className="flex flex-row flex-wrap justify-center px-4 lg:px-10 mx-auto gap-4">
      <AnimatePresence>
        {isLoading ? loading : projects}
      </AnimatePresence>
    </div>
  );
}

export default MyProjects;
