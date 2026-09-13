import { use, useState } from "react";
import type { ITechnology } from "../type/technologyType";
import TechnologyCard from "../components/technologies/TechnologyCard";
import YourStack from "../components/technologies/YourStack";

interface TechnologiesProps {
  technologyPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologyPromise }: TechnologiesProps) => {
  const technologies = use(technologyPromise);

  const [selectedTechnologies, setSelectedTechnologies] = useState<
    ITechnology[]
  >([]);

  const handleAddToStack = (technology: ITechnology) => {
    const alreadySelected = selectedTechnologies.some(
      (tech) => tech.id === technology.id,
    );

    if (alreadySelected) return;

    setSelectedTechnologies((prev) => [...prev, technology]);
  };

  const handleRemove = (id: string) => {
    setSelectedTechnologies((prev) => prev.filter((tech) => tech.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <section className="max-w-7xl container mx-auto px-4 lg:px-0">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Explore{" "}
          <span className="bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAdd={handleAddToStack}
              selectedTechnologies={selectedTechnologies}
            />
          ))}
        </div>

        {/* Your Stack */}
        <YourStack
          selectedTechnologies={selectedTechnologies}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  );
};

export default Technologies;
