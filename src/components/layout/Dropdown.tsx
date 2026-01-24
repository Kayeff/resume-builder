import { motion } from "motion/react";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";

export default function Dropdown({
  closeDropdown,
}: {
  closeDropdown: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed bottom-0 left-0 w-full h-[calc(100vh-120.67px)] p-10 flex items-start justify-end bg-background"
    >
      <ul className="w-full flex items-end flex-col">
        <li className="font-tanker text-4xl justify-self-start w-full">
          <span>menu</span>
        </li>
        {["Home", "Build", "About", "Contact"].map((link) => (
          <li
            key={link}
            className="text-[8vw] leading-[9vw] tracking-tight font-tanker"
          >
            <NavLink
              to={`/${link === "Home" ? "" : link.toLowerCase()}`}
              onClick={closeDropdown}
              className={({ isActive }) =>
                twMerge("text-foreground/50", isActive && "text-foreground")
              }
            >
              <span>{link}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
