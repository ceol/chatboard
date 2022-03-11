import ReactDOM from "react-dom"
import React from "react"
import tmi from "tmi.js"
import { ClientProvider } from "./ClientProvider"
import { Board } from "./Board"

const client = new tmi.Client({})

function App() {
  return (
    <ClientProvider client={client}>
      <Board />
    </ClientProvider>
  )
}

export function init(elementId: string) {
  return ReactDOM.render(
    <App />,
    document.getElementById(elementId)
  )
}