import { useNavigate } from 'react-router-dom';

const Blank = () => {

	const navigate = useNavigate();

	return (
		setTimeout(navigate('/admin'), 4000)
	)
}

export default Blank