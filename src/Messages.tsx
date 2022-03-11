import React from "react"
import { Events } from "tmi.js"
import { useClient } from "./ClientProvider"
import { List } from "./List"

type Props = {
  limit?: number
  className?: string
  children?: React.ReactNode
}

export function Messages({ limit = 20, className = "", children }: Props) {
  const [history, setHistory] = React.useState<string[]>([])
  const client = useClient()

  const onMessage: Events["message"] = (channel, userstate, message, self) => {
    setHistory(oldState => ([
      ...oldState.length > limit ? oldState.splice(1, limit) : oldState,
      message
    ]))
  }

  React.useEffect(() => {
    client.on('message', onMessage)

    return () => {
      client.removeListener('message', onMessage)
    }
  }, [])

  return (
    <div className={className}>
      <List items={history} />
    </div>
  )
}