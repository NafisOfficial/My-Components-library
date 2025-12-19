"use client"
import { useState } from 'react';
import React from 'react';

const ButtonGroup = () => {
    const [view, setView] = useState<"Card View" | "Comparison">("Card View")
    return (
        <div className="relative inline-flex rounded-full bg-[#ECECF0] p-1 mb-5">
            <span className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-primary transition-all duration-300 ease-in-out ${view === "Card View" ? "left-1" : "left-1/2"}`} />
            <button
                onClick={() => setView("Card View")}
                className={`relative z-10 px-4 py-2 rounded-full transition-colors duration-300 ${view === "Card View" ? "text-white" : "text-gray-600"}`}
            >
                Card View
            </button>
            <button
                onClick={() => setView("Comparison")}
                className={`relative z-10 px-4 py-2 rounded-full transition-colors duration-300 ${view === "Comparison" ? "text-white" : "text-gray-600"}`}
            >
                Comparison
            </button>
        </div>
    );
};

export default ButtonGroup;