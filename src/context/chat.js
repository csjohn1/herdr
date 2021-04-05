import React, { useReducer, useState, useEffect, createContext } from "react";

const initialState = {
  open: false,
  chat_id: null
}

export const ChatContext = createContext({
  chatState: initialState,
  chatDispatch: () => {},
})

let reducer = (state, action) => {
  switch (action.type) {
    case "open_chat":
      console.log('AYO')
      return {
        ...state,
        open: true,
        chat_id: action.chat_id
      }
    case "close_chat":
      return {
        ...state,
        open: false,
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