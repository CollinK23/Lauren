"use client";

import { useState } from "react";
import { ModeToggle } from "../ModeToggle";
import { Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 backdrop-blur border-b border-border bg-background/80">
      <div className="container flex px-8 md:px-12 mx-auto h-16 items-center justify-between">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-mono">
          <a href="#experience" className="text-sm font-medium hover:underline">
            Experience
          </a>
          <a href="#work" className="text-sm font-medium hover:underline">
            Work
          </a>
          <a href="#skills" className="text-sm font-medium hover:underline">
            Skills
          </a>
          <a href="#contact" className="text-sm font-medium hover:underline">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Sheet className="md:hidden p-2 z-50">
          <SheetTrigger>
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-8 font-mono text-xl font-medium">
              <a
                href="#experience"
                onClick={() => setMobileOpen(false)}
                className="hover:underline"
              >
                Experience
              </a>
              <a
                href="#work"
                onClick={() => setMobileOpen(false)}
                className="hover:underline"
              >
                Work
              </a>
              <a
                href="#skills"
                onClick={() => setMobileOpen(false)}
                className="hover:underline"
              >
                Skills
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

        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
