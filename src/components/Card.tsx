type CardProps = {
  title: string;
  thumb: string;
  description: string;
};
export function Card({ thumb, title, description }: CardProps) {
  return (
    <div className="flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow-md p-5">
      <a href="#">
        <img className="rounded-t-lg h-36 mx-auto" src={thumb} alt="" />
      </a>
      <div className="py-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 truncate">{description}</p>
      </div>
      <div className="w-full flex justify-end">
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Ver mais
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
