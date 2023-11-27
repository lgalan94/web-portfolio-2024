import { Helmet } from 'react-helmet';
import { Transition, AppNavbar } from '../components'

const Skills = () => {
		return (
				<div>
					<Helmet>
							<title>Skills Page</title>
					</Helmet>
					<AppNavbar />
					<div className="h-screen bg-green-200">
							Skills Page
					</div>
				</div>
		)
}

export default Transition(Skills)