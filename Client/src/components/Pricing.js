import Button from "./Button";

function Pricing(props) {
  return (
    <div className="mx-auto max-w-3xl  sm:px-6 sm:py-12 ">
      <div className="">
        <div
          className="rounded-2xl border border-red-600 p-6 shadow-sm ring-1 ring-red-600 sm:order-last sm:px-8 lg:p-12"
        >
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">
              Pro
              <span className="sr-only">Plan</span>
            </h2>

            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> $30 </strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>

          <ul className="mt-6 space-y-2">
            {[
              "20 users included",
              "5GB of storage",
              "Email support",
              "Help center access",
              "Phone support",
              "Community access",
            ].map((text, index) => (
              <li key={index} className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 text-red-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-700"> {text} </span>
              </li>
            ))}
          </ul>

          <Button button="Get Started" /> {/* Updated prop name to 'label' for better clarity */}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
