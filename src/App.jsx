import { useState } from 'react'

import './App.css'
import Card from './components/Card'
import Score from './components/Score';

function App() {
  const students = [
    {
      id: 42,
      firstname: "Harry",
      lastname: "Potter",
      house: "Gryffindor",
      courses: [
        {
          id: 23,
          name: "Potions",
          notes: [12, 9, 13, 4]
        },
        {
          id: 83,
          name: "Sortileges",
          notes: [17, 16, 13, 14]
        }
      ]
    },
    {
      id: 67,
      firstname: "Ron",
      lastname: "Weasley",
      house: "Gryffindor",
      courses: [
        {
          id: 27,
          name: "Potions",
          notes: [11, 7, 5, 6]
        },
        {
          id: 33,
          name: "Sortileges",
          notes: [11, 12, 13, 11]
        }
      ]
    }
  ]

  const [gryffindor, setGryffindor] = useState(0);

  function increment () {
    setGryffindor(gryffindor + 1)
  }

  function decrement () {
    setGryffindor(gryffindor - 1)
  }

  return (
    <>
      <Score score={gryffindor} />
      {students.map(student => <Card key={student.id} students={student} increment={increment} decrement={decrement} />)}
    </>
  )
}

export default App
