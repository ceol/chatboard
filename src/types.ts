import { Events } from "tmi.js"

export type MessagePatternListener = {
  pattern: string
  listener: Events["message"]
}