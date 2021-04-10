import React, { useReducer, createContext } from "react";

const createGoatMsg = () => {
  //Creates a random number between the min and max inclusive and generates a Baa with that many a's
  let response = 'B'
  const min = Math.ceil(15);
  const max = Math.floor(1);
  const aCount = Math.floor(Math.random() * (max - min) + min);

  for (let i = 0; i < aCount; i++) {
    if (Math.random() >= 0.5) {
      response += 'a'
      continue
    }
    response += 'A'
  }
  return response
}

const initialState = {
  open: false,
  chat_id: null
}

export const ChatContext = createContext({
  chatState: initialState,
  chatDispatch: () => { },
})

let reducer = (state, action) => {
  switch (action.type) {
    case "open_chat":
      return {
        ...state,
        open: true,
        chat_id: action.payload.chat_id
      }
    case "close_chat":
      return {
        ...state,
        open: false,
      }
    case "goat_reply":
      action.payload.setTexts([
        ...action.payload.texts,
        {
          sender: 'Goat',
          message: createGoatMsg()

        }
      ])
      return {
        ...state
      }
    default:
      return state
  }
}

export function ChatProvider({ children }) {
  const [chatState, chatDispatch] = useReducer(reducer, initialState)

  return (
    <ChatContext.Provider value={{ chatState, chatDispatch }}>
      {children}
    </ChatContext.Provider>
  )
}