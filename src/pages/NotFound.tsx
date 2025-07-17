import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-maria">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-ester">404</h1>
        <p className="text-xl text-ester/70 mb-4">Oops! Página não encontrada</p>
        <Link to="/" className="text-rute hover:text-ester underline">
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
