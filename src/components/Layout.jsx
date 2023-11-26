import {
	Typography
} from '@material-tailwind/react'

const Layout = ({ children, className="" }) => {
	return (
		<div
			className={`${className} w-full h-full `}
		>
			{children}
		</div>
	)
}

export default Layout