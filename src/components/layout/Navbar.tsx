import { Link } from "react-router";
import { useDropdown } from "../hooks/useDropdown";
import Dropdown from "./Dropdown";
import { AnimatePresence } from "motion/react";
import { useEffect } from "react";

export default function Navbar() {
  const isDropdownOpen = useDropdown((state) => state.isDropdownOpen);
  const toggleDropdown = useDropdown((state) => state.toggleDropdown);
  const closeDropdown = useDropdown((state) => state.closeDropdown);

  return (
    <nav className="w-full flex justify-between sticky top-0 left-0 bg-background border-b border-foreground/20">
      <div className="flex">
        <Link to="/" className="flex items-center justify-start p-10">
          <span className="text-4xl font-semibold tracking-tight">
            Resume Builder
          </span>
        </Link>
      </div>

      <button
        onClick={toggleDropdown}
        className="cursor-pointer hoverline p-10"
      >
        <span>
          <svg width="53" height="16" viewBox="0 0 53 16">
            <path fill="currentColor" d="M0 3h53V0H0zM0 16h53v-3H0z"></path>
          </svg>
        </span>
      </button>

      <AnimatePresence mode="wait">
        {isDropdownOpen && <Dropdown closeDropdown={closeDropdown} />}
      </AnimatePresence>
    </nav>
  );
}
