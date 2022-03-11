import React from "react"
import { Client } from "tmi.js"

const ClientContext = React.createContext<Client | undefined>(undefined)

export function useClient() {
  const client = React.useContext(ClientContext)

  if (!client) {
    throw new Error("Missing tmi.Client set through ClientProvider")
  }

  return client
}

type Props = {
  client: Client
  children?: React.ReactNode
}

export function ClientProvider({
  client,
  children
}: Props) {
  React.useEffect(() => {
    client.connect()

    return () => {
      client.disconnect()
    }
  }, [client])

  return (
    <ClientContext.Provider value={client}>
      {children}
    </ClientContext.Provider>
  )
}