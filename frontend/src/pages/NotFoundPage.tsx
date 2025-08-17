import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md mx-auto">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Go Home button */}
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-x-2  px-4 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition"
          >
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Link>

          {/* Go Back button */}
          <button
            onClick={() => window.history.back()}
            className="cursor-pointer inline-flex items-center justify-center hover-light gap-x-2  px-4 py-2 rounded-lg border border-input bg-background text-foreground font-medium  hover:text-accent-foreground transition"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
