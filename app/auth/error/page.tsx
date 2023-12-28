import ErrorView from "./error-view";

export default async function Error({ searchParams }: { searchParams: any }) {
  const { error } = searchParams;

  return (
    <div className="absolute inset-0">
      <ErrorView error={error} />
    </div>
  );
}
