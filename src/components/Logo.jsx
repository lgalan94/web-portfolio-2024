import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = ({ className }) => {

		return (
					<motion.div
							className={`${className} border rounded-md p-1 bg-black text-white text-md font-semibold `}
							whileHover = {{ 
												backgroundColor:["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
												transition:{ duration:1, repeat: Infinity }
							 }}
					>
					<Link 
							as={Link} to="/"
							className="flex"
							>
							<div className="bg-white rounded-sm text-black">LM</div>
							<div className="">GJ</div>
					</Link>
					</motion.div>
		)
}

export default Logo