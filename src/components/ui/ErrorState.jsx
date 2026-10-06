import { AlertCircle } from "lucide-react";

const ErrorState = ({
  title = "Kuch ghalat ho gaya",
  description = "Please dobara try karein.",
  onRetry,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-4">
        <AlertCircle className="w-10 h-10 text-red-500" />
      </div>
      <h3 className="text-xl font-serif text-secondary-900 mb-2">{title}</h3>
      <p className="text-secondary-600 max-w-md mb-6">{description}</p>
      {onRetry && (
        <button onClick={onRetry} className="btn-primary">
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorState;