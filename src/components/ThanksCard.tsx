import type { JSX } from "react/jsx-runtime";

import thanksIcon from "../assets/illustration-thank-you.svg";

export default function ThanksCard({ count }: { count: number }): JSX.Element {
  return (
    <article className="text-center">
      <img src={thanksIcon} alt="Thank You Illustration" className="mx-auto" />
      <p className="w-fit mx-auto mt-6 sm:mt-8 mb-7 sm:mb-10 px-3 sm:px-5 pt-2 pb-0.5 rounded-4xl text-[0.9375rem] bg-gray-900 text-primary/80">{`You selected ${count} out of 5`}</p>
      <h1 className="card-title">Thank You!</h1>
      <p className="card-body leading-normal">
        {
          "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
        }
      </p>
    </article>
  );
}
