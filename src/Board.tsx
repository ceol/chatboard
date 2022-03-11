import React from "react"
import { ChannelSelect } from "./ChannelSelect"
import { useClient } from "./ClientProvider"
import { Messages } from "./Messages"

type Props = {
  className?: string
}

export function Board({ className = "" }: Props) {
  const client = useClient()

  return (
    <div className={className}>
      <ChannelSelect
        onSelect={name => {
          for (const channel of client.getChannels()) {
            client.part(channel)
          }
          client.join(name)
        }}
      />
      <Messages />
    </div>
  )
}