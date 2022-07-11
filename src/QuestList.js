import React from 'react'
import Quests from './Quests'

export default function QuestList({ quest, toggleQuest }) {
  return (
    quest.map(quest => {
      return <div className='list'> <Quests key={quest.id} toggleQuest={toggleQuest} quest={quest} />
   </div>} )
)
}
