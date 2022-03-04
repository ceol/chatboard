import React from "react"

type Props<T> = {
  items: T[]
  children?: (item: T) => React.ReactNode
  getKey?: (item: T) => string | number | undefined
}

export function List<T>({
  items,
  children = (item) => item,
  getKey
}: Props<T>) {
  return (
    <div>
      {items.map((item, index) =>
        <div key={getKey ? getKey(item) : index}>
          {children(item)}
        </div>
      )}
    </div>
  )
}