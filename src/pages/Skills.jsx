import { Helmet } from 'react-helmet';
import { Transition, AppNavbar, AnimatedText, Layout, MySkills } from '../components'

const Skills = () => {
		return (
				<div>
					<Helmet>
							<title>Skills Page</title>
					</Helmet>
					<AppNavbar />
					<AnimatedText text="skills" className="mt-4 mb-10 capitalize" />
					<Layout className="">
						<MySkills />
					</Layout>
				</div>
		)
}

export default Transition(Skills)