// import React, { useState } from 'react'
// import './App.css';
// import Note from './components/Note';
// import Course from './components/Course';

// FIRST VERSION
// const App = ({ notes }) => {
//   return (
//     <div>
//       <h1>Notes</h1>
//       {<ul>
//         {notes.map(note => /* <li> tag needs a key prop */
//           <li key={note.id}>
//             {note.content}
//           </li>
//         )/*goes through the list of notes and creates an array of <li> tags */} 
//       </ul>}
//     </div>
//   )
// }

// SECOND VERSION
/* const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
} */


// //EXCERCISES
// PART 1 EXCERCISES COMPLETE


/* const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return <Course courses={courses} />
}

export default App;
 */

import React, { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
    'a new note...'
  ) 
  const [showAll, setShowAll] = useState(true)
  // FOR REACT, WE NEED TO USE TWO EVENT HANDLERS FOR FORMS, ONE THAT HANDLES THE SUBMIT BUTTON, AND ONE THAT HANDLES THE TYPING IN THE INPUT BAR
  //
  // handles change on the input bar, console logging every key typed
  // this captures the last information from the input bar and puts it into a state variable, newNote
  // event.target.value is how we access the value of the input tag. the value constantly changes with typing
  // we are constantly changing the variable with this updating. This way we can use the latest thing typed to place into our addNote funtion
  //
  // 
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
  
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  // acts as a switch. If the boolean showAll is ticked, show the notes array, if its not, filter the notes array on importance and show it
  const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>   
    </div>
  )
}

export default App 