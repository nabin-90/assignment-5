import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import type { ITechnology } from "../../type/technologyType";

interface TechnologyCardProps {
  technology: ITechnology;
  onAdd: (technology: ITechnology) => void;
  selectedTechnologies: ITechnology[];
}

const TechnologyCard = ({
  technology,
  onAdd,
  selectedTechnologies,
}: TechnologyCardProps) => {
  // Check if technology is already added
  const isAdded = selectedTechnologies.some(
    (item) => item.id === technology.id,
  );

  const handleAdd = () => {
    if (isAdded) {
      toast.error(`${technology.name} is already in your stack!`);
      return;
    }

    onAdd(technology);
    toast.success(`${technology.name} added to your stack!`);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Top */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-9 w-9 object-contain"
        />

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-lg font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-[60px] text-sm leading-5 text-slate-500">
        {technology.description}
      </p>

      {/* Details */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="rounded bg-slate-50 px-2 py-1 text-xs text-slate-600">
          {technology.category}
        </span>

        <span className="text-xs text-slate-500">{technology.difficulty}</span>

        <span className="flex items-center gap-1 text-xs font-medium text-slate-600">
          <FaStar className="text-yellow-400" />
          {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={handleAdd}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg py-2.5 text-sm font-medium transition ${
          isAdded
            ? "cursor-default bg-white text-pink-700"
            : "bg-slate-950 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
