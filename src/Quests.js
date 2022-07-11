import React from 'react'

export default function Quests({ quest, toggleQuest }) {
  function handleQuestClick() {
    toggleQuest(quest.id)
  }
  return (
    <div>
      <label>
        <input type="checkbox" checked={quest.complete} onChange={handleQuestClick} />
      {quest.name}
      </label>
        
    </div>
  )
}
