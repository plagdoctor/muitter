import { cls } from "@libs/client/utils";
import Link from "next/link";

interface TweetProps {
  id: number;
  name: string;
  message: string;
  isDetail: boolean;
}

export default function Tweet({
  id,
  name,
  message,
  isDetail
}: TweetProps) {
  return (
    // className={cls(
    //   "w-full bg-gray-400 hover:bg-gray-500 text-white  px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:outline-none",
    //   large ? "py-3 text-base" : "py-2 text-sm "
    // )}

    <Link href={`/tweet/${id}`}>
      <a className="flex px-4 cursor-pointer py-2 items-center space-x-3 ">
          <div className={ cls("rounded-lg bg-cyan-300", isDetail ? "w-20 h-20 " : "w-14 h-14 " )} />
          <div>
            <p className={cls("text-gray-700", isDetail ? " text-xl" : " text-lg")}>{name}</p>
            <p className={cls("text-gray-700", isDetail ? " text-lg" : " text-sm")}>
              {message}
            </p>
          </div>
        </a>               
    </Link>
  );
}
