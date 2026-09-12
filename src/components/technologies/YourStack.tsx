import { FaTimes } from "react-icons/fa";
import type { ITechnology } from "../../type/technologyType";

interface YourStackProps {
  selectedTechnologies: ITechnology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <div className="h-fit rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-5">
      
      {/* Heading */}
      <h2 className="text-lg font-bold text-slate-900">
        Your Stack
      </h2>

      {/* Selected Count */}
      <p className="mt-1 text-sm text-slate-400">
        {selectedTechnologies.length === 0
          ? "No technology selected yet."
          : `${selectedTechnologies.length} ${
              selectedTechnologies.length === 1
                ? "Technology"
                : "Technologies"
            } Selected`}
      </p>

      {/* Empty State */}
      {selectedTechnologies.length === 0 ? (
        <div className="mt-5 flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-200 text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="mt-5 space-y-2">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2"
              >
                {/* Technology Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-8 w-8 object-contain"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      {technology.name}
                    </h3>

                    <p className="text-[10px] text-slate-400">
                      {technology.category}
                    </p>
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-slate-400 transition hover:text-red-500"
                >
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="mt-6 w-full rounded-lg border border-red-300 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;