import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="mb-4 text-6xl font-display font-bold text-foreground">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Страницата не е пронајдена</p>
        <Link to="/" className="inline-block bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-full text-base hover:scale-105 active:scale-100 transition-transform duration-200">
          Врати се на почетна
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
