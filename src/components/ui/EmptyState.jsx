import { PackageOpen } from "lucide-react";

const EmptyState = ({
  icon: Icon = PackageOpen,
  title = "Kuch nahi mila",
  description = "Yahan abhi kuch nahi hai.",
  actionLabel,
  onAction,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-20 h-20 rounded-full bg-primary-50 flex items-center justify-center mb-4">
        <Icon className="w-10 h-10 text-primary-500" />
      </div>
      <h3 className="text-xl font-serif text-secondary-900 mb-2">{title}</h3>
      <p className="text-secondary-600 max-w-md mb-6">{description}</p>
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="btn-primary"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

export default EmptyState;