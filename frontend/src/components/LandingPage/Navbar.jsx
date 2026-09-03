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
    <header className="md:static sticky top-0 z-50 border-b  backdrop-blur">
      <div className=" flex px-8 md:px-16 mx-auto h-12 items-center justify-between">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-mono font-medium text-muted-foreground">
          <a href="#work" className="text-sm hover:underline">
            WORK
          </a>
          <a href="#experience" className="text-sm hover:underline">
            EXPERIENCE
          </a>
          <a href="#about" className="text-sm hover:underline">
            ABOUT
          </a>
          <a href="#contact" className="text-sm hover:underline">
            CONTACT
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Sheet className="p-2 z-50">
          <SheetTrigger className="md:hidden">
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-8 font-mono text-xl font-medium">
              <a
                href="#work"
                onClick={() => setMobileOpen(false)}
                className="hover:underline"
              >
                WORK
              </a>
              <a
                href="#experience"
                onClick={() => setMobileOpen(false)}
                className="hover:underline"
              >
                EXPERIENCE
              </a>
              <a
                href="#about"
                onClick={() => setMobileOpen(false)}
                className="hover:underline"
              >
                ABOUT
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="hover:underline"
              >
                CONTACT
              </a>
            </div>
          </SheetContent>
        </Sheet>

        {/* <ModeToggle /> */}
      </div>
    </header>
  );
};

export default Navbar;
