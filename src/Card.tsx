import React, { ReactNode } from "react"

type Props = {
  className?: string
  children?: ReactNode
}

export function Card({ className = "", children }: Props) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}