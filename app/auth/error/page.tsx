import Link from "next/link";

export default async function Error({ searchParams }: { searchParams: any }) {
  const { error } = searchParams;
  return (
    <div className="fixed top-0 left-0 z-50 flex justify-center w-screen h-screen bg-white dark:bg-[#1f1f1f]">
      <ErrorView error={error} />
    </div>
  );
}

function ErrorView(props: { error: string }) {
  const { error } = props;

  return (
    <div className="flex flex-1 flex-col gap-6 items-center justify-center h-full">
      <div className="font-medium text-3xl mb-2">Wedding</div>
      <ErrorSwitch error={error} />
      <Link href="/">
        <button className="text-sm opacity-70 hover:underline">
          Try again
        </button>
      </Link>
    </div>
  );
}

function ErrorSwitch(props: { error: string }) {
  const { error } = props;

  switch (error) {
    case "AccessDenied":
      return <AccessDenied />;
    case "Configuration":
      return <ConfigurationError />;
    default:
      return <Default />;
  }
}

function ConfigurationError() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <div className="text-lg bg-neutral-200 dark:bg-neutral-800 rounded px-2 py-1">
        Configuration Error
      </div>
      <div className="text-sm opacity-70 px-4">
        Please contact the administrators.
      </div>
    </div>
  );
}

function AccessDenied() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <div className="text-lg bg-neutral-200 dark:bg-neutral-800 rounded px-2 py-1">
        Access Denied
      </div>
      <div className="text-sm opacity-70 px-4">
        You do not have permission to access this page.
      </div>
    </div>
  );
}

function Default() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <div className="text-lg bg-neutral-200 dark:bg-neutral-800 rounded px-2 py-1">
        An error occurred
      </div>
      <div className="text-sm opacity-70 px-4">
        Sorry, an error occurred while processing your request.
      </div>
    </div>
  );
}
