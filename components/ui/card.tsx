import React from "react"

export function Card({ children, className = "" }: any) {
  return (
    <div className={`rounded-xl border border-yellow-500 p-6 bg-black ${className}`}>
      {children}
    </div>
  )
}

export function CardContent({ children }: any) {
  return <div>{children}</div>
}
