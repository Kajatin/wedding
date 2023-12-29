import ErrorView from "./error-view";
import SvgWreath from "@/components/svg/wreath";

export default async function Error({ searchParams }: { searchParams: any }) {
  const { error } = searchParams;

  return (
    <div className="absolute inset-0 p-4">
      <div className="flex flex-row gap-14 w-full h-full justify-center">
        <div className="flex h-full justify-end items-center">
          <SvgWreath className="hidden sm:block transform scale-y-[1.45] text-sage-600/80" />
        </div>

        <ErrorView error={error} />

        <div className="flex h-full justify-start items-center">
          <SvgWreath className="hidden sm:block transform scale-y-[1.45] scale-x-[-1] text-sage-600/80" />
        </div>
      </div>
    </div>
  );
}
