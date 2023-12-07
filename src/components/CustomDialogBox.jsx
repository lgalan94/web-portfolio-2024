import {
  Dialog,
  DialogHeader, 
  DialogBody,
  DialogFooter,
  Button
} from "@material-tailwind/react";

const CustomDialogBox = ({ children, title, open, handleOpen, buttonCancel, buttonCancelLabel, handleButtonSubmit, buttonSubmitLabel }) => {
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
	 			  <DialogFooter className="flex flex-row justify-center gap-1 mt-8">
	 			  			<Button
	 			  			  size="sm"
	 			  			  variant="text"
	 			  			  color="red"
	 			  			  onClick={buttonCancel}
	 			  			  className="mr-1"
	 			  			>
	 			  			  <span>{buttonCancelLabel}</span>
	 			  			</Button>
			  			  <Button onClick={handleButtonSubmit} size="sm" variant="gradient" color="green">
			  			    <span>{buttonSubmitLabel}</span>
			  			  </Button>
	 			  			
	 			  </DialogFooter>
	 			</Dialog>
	 )
}

export default CustomDialogBox