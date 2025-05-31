export type Sender = 'sender' | 'receiver'

export type StoreMessage = {
  id: number | string
  sender: Sender
  content: string
  timestamp: string
  [key: string]: any
}

export type SendMessageParams = {
  content: string
  streaming: boolean
}

