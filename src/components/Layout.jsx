import {
	Typography
} from '@material-tailwind/react'

const Layout = ({ children }) => {
	return (
		<div
			className="w-full h-full bg-defaultColor p-10"
		>
			{children}
		</div>
	)
}

export default Layout