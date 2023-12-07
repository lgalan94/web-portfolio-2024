import { ImSpinner2 } from "react-icons/im";
import { Button } from '@material-tailwind/react'

const ButtonLoading = ({ label, color }) => {
	return (
		<Button size="sm" color={color} className="flex flex-row items-center capitalize justify-center" disabled>
		  <ImSpinner2 className="animate-spin mr-1 w-4 h-4" /> <span className="text-xs"> {label} </span>
		</Button>
	)
}

export default ButtonLoading