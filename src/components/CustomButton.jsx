import { Button } from '@material-tailwind/react';
import { ImSpinner2 } from "react-icons/im";

const CustomButton = ({ label, color, isDisabled, spinner, handleClick }) => {
		return (
						<Button onClick={handleClick} className="py-2 flex flex-row justify-center items-center gap-1 capitalize" disabled={isDisabled} size="sm" variant="gradient" color={color} fullWidth>
					  <ImSpinner2 className={`${spinner} animate-spin w-4 h-4`} /> <span className="text-xs"> {label} </span>
					</Button>
		)
}

export default CustomButton
