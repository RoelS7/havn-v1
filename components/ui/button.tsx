import React from "react"

export function Button({ children, className = "", ...props }: any) {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-black text-white border border-yellow-500 hover:bg-yellow-500 hover:text-black transition ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
