import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to="/">Home</Link>
    </>
  );
}
