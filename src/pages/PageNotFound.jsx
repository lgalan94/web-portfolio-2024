import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-5xl mb-4">Page Not Found</h1>
        <img
          className="mx-auto"
          style={{ width: '20%' }}
          src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=2000"
          alt="Page Not Found"
        />
        <p>
          Go back to the{' '}
          <Link to="/" className="text-blue-500">
            homepage
          </Link>
        </p>
      </div>
    </div>
  );
}