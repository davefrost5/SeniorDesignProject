"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, Users, Cog, Phone, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/app/images/logo.webp";

const aboutDropdownItems = [
  { name: "Team", href: "/about/team" },
  { name: "Equipment", href: "/about/equipment" },
  { name: "Software", href: "/about/software" },
];

const milestonesDropdownItems = [
  { name: "Milestone 1", href: "/milestones/1" },
  { name: "Milestone 2", href: "/milestones/2" },
  { name: "Milestone 3", href: "/milestones/3" },
  { name: "Milestone 4", href: "/milestones/4" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-background/80 backdrop-blur-sm fixed w-full top-0 z-50">
      <nav className="w-full px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="SYNC Prosthetics Logo"
                width={80}
                height={80}
                className="object-contain"
              />
              <span className="text-xl font-bold">SYNC Prosthetics</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-2">
            <Button
              variant="ghost"
              asChild
              className={cn(
                "flex items-center space-x-2",
                pathname === "/" && "bg-secondary"
              )}
            >
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                <span>Home</span>
              </Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "flex items-center space-x-2",
                    pathname.startsWith("/about") && "bg-secondary"
                  )}
                >
                  <Users className="h-4 w-4 mr-2" />
                  <span>About</span>
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
                    "flex items-center space-x-2",
                    pathname.startsWith("/milestones") && "bg-secondary"
                  )}
                >
                  <Cog className="h-4 w-4 mr-2" />
                  <span>Milestones</span>
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

            <Button
              variant="ghost"
              asChild
              className={cn(
                "flex items-center space-x-2",
                pathname === "/contact" && "bg-secondary"
              )}
            >
              <Link href="/contact">
                <Phone className="h-4 w-4 mr-2" />
                <span>Contact</span>
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}