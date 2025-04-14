import Link from "next/link";
import Image from "next/image";
import { Projects } from "./projects";
import { Navigation } from "./navigation";
import { DottedSeparator } from "./dotted-separator";
import { WorkspaceSwitcher } from "./workspace-switcher";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <div className="flex gap-3 items-center shrink-0 pr-6">
                  <Link href="/">
                     <Image src="/logo.svg" alt="Logo" width={36} height={36} />
                   </Link>
                 <h3 className="text-xl">Tasks</h3>
               </div>
      <DottedSeparator className="my-4" />
      <WorkspaceSwitcher />
      <DottedSeparator className="my-4" />
      <Navigation />
      <DottedSeparator className="my-4" />
      <Projects />
    </aside>
  );
};
