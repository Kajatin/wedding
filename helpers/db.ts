import pgLib from "pg-promise";

// Disable SSL for local development
let ssl: any = null;
if (process.env.NODE_ENV === "development") {
  ssl = { rejectUnauthorized: false };
}

function createSingleton<T>(name: string, create: () => T): T {
  const s = Symbol.for(name);
  let scope = (global as any)[s];
  if (!scope) {
    scope = { ...create() };
    (global as any)[s] = scope;
  }
  return scope;
}

const pgp = pgLib();

interface IDatabaseScope {
  db: pgLib.IDatabase<any>;
  pgp: pgLib.IMain;
}

export default function getDb(): IDatabaseScope {
  return createSingleton<IDatabaseScope>("wedding-db-singleton", () => {
    return {
      db: pgp({
        connectionString: process.env.DATABASE as string,
        ssl: ssl,
      }),
      pgp,
    };
  });
}
