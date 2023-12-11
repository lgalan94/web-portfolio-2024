import {
  Dialog,
  DialogHeader, 
  DialogBody
} from "@material-tailwind/react";

const CustomDialogBox = ({ children, title, open, handleOpen }) => {
	 return (
	 			<Dialog 
	 			  size="xs" 
	 			  open={open} 
	 			  handler={handleOpen}
	 			  animate={{
	 			    mount: { scale: 1, y: 0 },
	 			    unmount: { scale: 0.9, y: -100 },
	 			  }}
	 			>
	 			  <DialogHeader className="border border-b-gray-900/20 rounded-t-lg shadow justify-center"> {title} </DialogHeader>
	 			  <DialogBody className="text-center font-leading">
	 			    
	 			    {children}
	 			  		
	 			  </DialogBody>
	 			</Dialog>
	 )
}

export default CustomDialogBox