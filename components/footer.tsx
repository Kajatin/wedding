"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Footer(props: { lang: string }) {
  const { lang } = props;

  const path = usePathname();
  const router = useRouter();

  return (
    <div>
      <select
        className="flex p-2 rounded justify-center items-center appearance-none outline-none"
        value={lang}
        onChange={(e) => {
          const newPath = path.replace(/^\/[a-z]{2}/, `/${e.target.value}`);
          router.replace(newPath);
        }}
      >
        <option value="en">English</option>
        <option value="hu">Magyar</option>
      </select>
    </div>
  );
}
