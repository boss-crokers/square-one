import { Home } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="content text-center">
                <h1 className="text-primary">404</h1>
                <h2 className="text-primary mb-md">Page Not Found</h2>
                <p className="text-light mb-md">
                    Oops! The page you're looking for doesn't exist. You might have typed the URL incorrectly.
                </p>
                <a href="/" className="btn btn-primary" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/';
                }}>
                    <Home size={20} style={{ marginRight: '8px' }} />
                    Back to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
