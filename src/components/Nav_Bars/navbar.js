import React from "react";

export default function NavBar({ children }) {
    return (
      <nav className="bg-gray-900 border">
        <ul className="flex justify-center space-x-8 lg:text-xl uppercase font-semibold">
          {children}
        </ul>
      </nav>
    )
  }