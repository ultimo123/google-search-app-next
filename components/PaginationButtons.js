import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const PaginationButtons = () => {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex max-w-lg justify-between text-blue-700 mb-10">
      {/* Previous */}
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex items-center cursor-pointer hover:underline flex-grow flex-col">
            <ChevronLeftIcon className="h-5" />
            <p>Previous</p>
          </div>
        </Link>
      )}

      {/* Next */}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex items-center cursor-pointer hover:underline flex-grow flex-col">
          <ChevronRightIcon className="h-5" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
};

export default PaginationButtons;
