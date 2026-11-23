"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  Users,
  Cog,
  Phone,
  ChevronDown,
  Video,
  Menu,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/app/images/logo.webp";

const aboutDropdownItems = [
  { name: "Overview", href: "/about" },
  { name: "Team", href: "/about/team" },
  { name: "Equipment", href: "/about/equipment" },
  { name: "Software", href: "/about/software" },
  { name: "Expenses", href: "/about/expenses" },
];

const milestonesDropdownItems = [
  { name: "All milestones", href: "/milestones" },
  { name: "Milestone 1", href: "/milestones/1" },
  { name: "Milestone 2", href: "/milestones/2" },
  { name: "Milestone 3", href: "/milestones/3" },
  { name: "Milestone 4", href: "/milestones/4" },
];

const demoHref = "/#demo";

function NavLink({
  href,
  children,
  active,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Button
      variant="ghost"
      asChild
      className={cn("w-full justify-start md:w-auto", active && "bg-secondary")}
      onClick={onNavigate}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const demoActive = isHome;

  return (
    <header className="border-b border-indigo-400/10 bg-background/90 backdrop-blur-md fixed w-full top-0 z-50">
      <nav className="w-full px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 min-w-0">
            <Image
              src={logo}
              alt="SYNC Prosthetics Logo"
              width={44}
              height={44}
              className="object-contain shrink-0"
            />
            <span className="text-lg sm:text-xl font-bold truncate">
              SYNC Prosthetics
            </span>
          </Link>

          <div className="hidden md:flex md:items-center md:space-x-1">
            <Button
              variant="ghost"
              asChild
              className={cn(pathname === "/" && "bg-secondary")}
            >
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Home
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    pathname.startsWith("/about") && "bg-secondary"
                  )}
                >
                  <Users className="h-4 w-4 mr-2" />
                  About
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {aboutDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    pathname.startsWith("/milestones") && "bg-secondary"
                  )}
                >
                  <Cog className="h-4 w-4 mr-2" />
                  Milestones
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {milestonesDropdownItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href}>{item.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" asChild className={cn(demoActive && "bg-secondary")}>
              <Link href={demoHref}>
                <Video className="h-4 w-4 mr-2" />
                Demo / Videos
              </Link>
            </Button>

            <Button
              variant="ghost"
              asChild
              className={cn(pathname === "/contact" && "bg-secondary")}
            >
              <Link href="/contact">
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 mt-6">
                <NavLink href="/" active={pathname === "/"}>
                  <span className="flex items-center">
                    <Home className="h-4 w-4 mr-2" />
                    Home
                  </span>
                </NavLink>
                <NavLink href="/about" active={pathname === "/about"}>
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    About
                  </span>
                </NavLink>
                <NavLink href="/milestones" active={pathname === "/milestones"}>
                  <span className="flex items-center">
                    <Cog className="h-4 w-4 mr-2" />
                    Milestones
                  </span>
                </NavLink>
                <NavLink href={demoHref}>
                  <span className="flex items-center">
                    <Video className="h-4 w-4 mr-2" />
                    Demo / Videos
                  </span>
                </NavLink>
                <NavLink href="/contact" active={pathname === "/contact"}>
                  <span className="flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact
                  </span>
                </NavLink>
                <div className="pt-4 border-t text-xs text-muted-foreground space-y-2">
                  <p className="font-medium text-foreground">Quick links</p>
                  <Link href="/about/team" className="block hover:text-foreground">
                    Team
                  </Link>
                  <Link href="/milestones/4" className="block hover:text-foreground">
                    Milestone 4 (Expo)
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
