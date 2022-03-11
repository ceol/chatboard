import React from "react"
import { useClient } from "./ClientProvider"

type Props = {
  onSelect?: (channelName: string) => void
}

export function ChannelSelect({ onSelect }: Props) {
  const [name, setName] = React.useState("")

  return (
    <div className="">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => onSelect ? onSelect(name) : null}>Join</button>
    </div>
  )
}