"use client";

import { useState } from "react";
import { ModeToggle } from "../ModeToggle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="absolute top-0 z-50 pr-8 bg-foreground w-full">
      <div className="flex h-16 w-full mx-auto items-center">
        {/* Desktop Nav */}
        <nav className="hidden w-full md:flex md:flex-row justify-between items-center space-x-8 font-medium">
          <div className="bg-chart-1">
            <a href="/" aria-label="Home">
              <img src="/lk.png" alt="" className="h-16 w-16 object-contain" />
            </a>
          </div>
          <div className="ml-auto flex items-center space-x-8 text-background">
            <a href="/projects" className="text-sm hover:underline">
              Projects
            </a>
            {/* <a href="/#experience" className="text-sm hover:underline">
              Experience
            </a> */}
            <a href="/#about" className="text-sm hover:underline">
              About
            </a>
            <a href="#contact" className="text-sm hover:underline">
              Contact
            </a>
          </div>
        </nav>

        {/* Mobile Home */}
        <a href="/" aria-label="Home" className="p-2 md:hidden bg-chart-1">
          <img src="/lk.png" alt="" className="h-12 w-12 object-contain" />
        </a>

        {/* Mobile Menu Button */}
        <div className="z-50 ml-auto md:hidden">
          <Sheet>
            <SheetTrigger className="p-2">
              <Menu className="h-6 w-6 text-background" />
            </SheetTrigger>
            <SheetContent className="pt-16 bg-foreground border-none text-chart-1">
              <div className="flex flex-col space-y-8 text-xl font-medium">
                <a
                  href="/projects"
                  onClick={() => setMobileOpen(false)}
                  className="hover:underline"
                >
                  Projects
                </a>
                {/* <a
                  href="/#experience"
                  onClick={() => setMobileOpen(false)}
                  className="hover:underline"
                >
                  Experience
                </a> */}
                <a
                  href="/#about"
                  onClick={() => setMobileOpen(false)}
                  className="hover:underline"
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="hover:underline"
                >
                  Contact
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* <ModeToggle /> */}
      </div>
    </header>
  );
};

export default Navbar;
