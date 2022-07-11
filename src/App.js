import React, { useState, useRef, useEffect } from "react";
import QuestList from "./QuestList";
import newId from "./newId";
import Header from "./Header";
import "./styles.css"
import Footer from "./Footer";


const LOCAL_STORAGE_KEY = 'questApp.quest'

function App() {
  const [quest, setQuests] = useState([])
  const questNameRef = useRef()

  useEffect(() => {
    const storedQuests = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedQuests) setQuests(storedQuests)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(quest))
  }, [quest])

  function toggleQuest(id) {
    const newQuest = [...quest]
    const quests = newQuest.find(quest => quest.id === id)
    quests.complete = !quest.complete
    setQuests(newQuest)
  }


  function handleAddQuest(q) {
    const name = questNameRef.current.value
    if (name === "") return
    setQuests(prevQuest => {
      return [...prevQuest, { id: newId(), name: name, complete: false }]
    })
    questNameRef.current.value = null
  }

  function handleClearQuests() {
    const newQuest = quest.filter(quest => !quest.complete)
    setQuests(newQuest)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }


  return (
    <>
      <Header />
      <div className="containers">
      <QuestList className="list" quest={quest} toggleQuest={toggleQuest} />
      <form className="buttonForm" onSubmit={handleSubmit}>
      <input  ref={questNameRef} type="text" placeholder="Enter Quest" />
      <button className="button" onClick={handleAddQuest}>Add Quest</button>
      </form>
      <button className="button" id="clear" onClick={handleClearQuests}>Clear Completed Quest</button>
      <div className="remainer">{quest.filter(quest => !quest.complete).length} Quests Remaining</div>
      </div>
      <Footer />
    </>
  )
}

export default App;
