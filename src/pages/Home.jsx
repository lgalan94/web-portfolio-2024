import { AppNavbar, Footer } from '../components'

const Home = () => {
	return (
		<>
			<AppNavbar />
			<h1 className="text-5xl font-semibold h-screen flex justify-center items-center bg-defaultColor">Home Page</h1>
			<Footer />
		</>
	)
}

export default Home