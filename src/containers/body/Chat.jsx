import { ChatContext } from '../../context/chat'
import React, { useContext, useState, useEffect } from "react";
import { db, chatDb } from '../../data/data'
import './chat.css'


export default function Chat () {
  const { chatState } = useContext(ChatContext)
  const [texts ] = useState(chatDb[chatState.chat_id] || null)
  const getCurrentGoat = () => {
    for (const goat of db) {
      if (goat.id === chatState.chat_id) return goat
    }
    return null
  }
  const goat = getCurrentGoat()
  
  useEffect(() => {
    console.log(texts)
  }, [texts])
  return (
    <>
    <p className='greeting'> You and {goat.name} have matched! </p>
    {texts && (
      texts.map((text) => {
        return (
          <div className={`textContainer_${text.sender}`}>
            <p className={`${text.sender}`} >{text.message}</p>
          </div>
        )
      })
    )}
    </>
  )
}