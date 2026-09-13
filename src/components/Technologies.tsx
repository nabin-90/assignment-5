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
    setSelectedTechnologies((prev) =>
      prev.filter((tech) => tech.id !== id),
    );
  };

  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  return (
    <section className="container mx-auto max-w-7xl px-4 pb-15 sm:px-6 lg:px-4">

      {/* Section Heading */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Explore{" "}
          <span className="bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="mt-2 max-w-xl text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px] lg:gap-8">

        {/* Technology Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
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