import type { JSX } from "react/jsx-runtime";

import starIcon from "../assets/icon-star.svg";

const stars: number[] = [1, 2, 3, 4, 5];

type RatingCardProps = {
  count: number;
  handleSelectStar: (num: number) => void;
  handleRating: () => void;
};
export default function RatingCard({
  count,
  handleSelectStar,
  handleRating,
}: RatingCardProps): JSX.Element {
  return (
    <article className="w-full">
      <div className="size-10 sm:size-12 rounded-full flex-center bg-gray-900">
        <img src={starIcon} alt="Star Icon" />
      </div>
      <h1 className="card-title mt-6 sm:mt-10">How did we do?</h1>
      <p className="card-body leading-[1.65]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between gap-2 mt-5 sm:mt-6 mb-6 sm:mb-8">
        {stars.map(
          (star: number): JSX.Element => (
            <button
              key={star}
              className={`btn size-10 sm:size-12 flex-center rounded-full ${count === star ? "bg-light text-gray-900" : "bg-gray-900 text-gray-500"} hover:bg-primary hover:text-gray-900 focus-visible:bg-light focus-visible:text-gray-900 focus-visible:outline-0 focus-visible:hover:bg-primary focus-visible:hover:text-gray-900 transition duration-300`}
              onClick={() => handleSelectStar(star)}
            >
              {star}
            </button>
          ),
        )}
      </div>
      <button
        className="btn h-11 uppercase tracking-widest w-full flex-center rounded-4xl bg-primary text-gray-900 hover:bg-light hover:text-gray-900 focus-visible:bg-light focus-visible:text-gray-900 focus-visible:outline-0 focus-visible:hover:bg-light focus-visible:hover:text-gray-900 disabled:cursor-no-drop transition duration-300"
        disabled={count === 0}
        onClick={handleRating}
      >
        Submit
      </button>
    </article>
  );
}
