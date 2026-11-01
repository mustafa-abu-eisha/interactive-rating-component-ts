import "./App.css";
import { useState } from "react";
import type { JSX } from "react/jsx-runtime";
import RatingCard from "./components/RatingCard";
import ThanksCard from "./components/ThanksCard";

function App(): JSX.Element {
  const [starCount, setStarCount] = useState<number>(0);
  const [isRated, setIsRated] = useState<boolean>(false);

  const handleSelectStar = (count: number): void => {
    setStarCount(count);
  };

  const handleRating = (): void => {
    setIsRated((prev: boolean): boolean => !prev);
  };
  return (
    <main className="min-h-screen p-6 bg-gray-950 flex-center font-overpass">
      <section className="w-101 max-w-full h-90 sm:h-104 px-6 pt-6 pb-8 sm:p-8 flex items-center bg-linear-to-bl from-gray-900 to-gray-900/30 rounded-2xl sm:rounded-3xl shadow-md">
        {!isRated && (
          <RatingCard
            count={starCount}
            handleSelectStar={handleSelectStar}
            handleRating={handleRating}
          />
        )}
        {isRated && <ThanksCard count={starCount} />}
      </section>
    </main>
  );
}

export default App;
