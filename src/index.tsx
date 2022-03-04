import ReactDOM from "react-dom"
import React from "react"
import tmi from "tmi.js"
import { List } from "./List"

const displayLimit = 20

let _client: tmi.Client

function App() {
  const [channel, setChannel] = React.useState("")
  const [messages, setMessages] = React.useState<string[]>([])

  function addMessage(message: string) {
    setMessages(oldMessages => [
      ...oldMessages.length > displayLimit ? oldMessages.splice(1, displayLimit) : oldMessages,
      message
    ])
  }

  function getClient() {
    if (! _client) {
      _client = new tmi.Client({})
      _client.connect()
      _client.on('message', (channel, userstate, message, self) => {
        addMessage(message)
      })
    }
    return _client
  }

  const client = getClient()

  function handleClick() {
    client.join(channel)
  }

  return (
    <div className="">
      <div>
        <input value={channel} onChange={(e) => setChannel(e.target.value)} />
        <button onClick={handleClick}>Join</button>
      </div>
      {messages &&
        <List items={messages} />
      }
    </div>
  )
}

export function init(elementId: string) {
  return ReactDOM.render(
    <App />,
    document.getElementById(elementId)
  )
}