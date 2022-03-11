import React from "react"

type Props<T> = {
  items: T[]
  className?: string
  children?: (item: T, index: number) => React.ReactNode
}

export function List<T>({
  items,
  className = "",
  children = (item, index) => <div key={index}>{item}</div>,
}: Props<T>) {
  return (
    <div className={className}>
      {items.map(children)}
    </div>
  )
}