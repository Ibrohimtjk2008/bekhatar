"use client";
import { useState } from "react";
import arrow from "@/app/assets/icons/arrow.svg";
import Image from "next/image";

export default function Language_button() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("рус");

  const toggleDropdown = () => setOpen((prev) => !prev);

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="flex items-center gap-1">
        {selected}
        <Image className="font-bold" src={arrow} alt="error"></Image>
      </button>
      {open && (
        <div className="absolute z-10 mt-2 w-full">
          {selected !== "рус" && (
            <button
              onClick={() => handleSelect("рус")}
              className="rounded-sm shadow-xl px-4 py-2 text-center"
            >
              рус
            </button>
          )}
          {selected !== "анг" && (
            <button
              onClick={() => handleSelect("анг")}
              className="rounded-sm shadow-xl px-4 py-2 text-center"
            >
              анг
            </button>
          )}
        </div>
      )}
    </div>
  );
}
