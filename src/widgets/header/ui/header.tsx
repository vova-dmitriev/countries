import { ThemeSwitcher } from "@/features/theme-switcher";
import Link from "next/link";

export function Header() {
  return (
    <header className="py-4 px-6 border-b bg-white dark:bg-zinc-900 dark:border-zinc-800 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Countries
          </h1>
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
