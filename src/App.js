import React, { useState } from 'react'
import './App.css';
import Note from './components/Note';
import Course from './components/Course';

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


// EXCERCISES

const App = () => {
  const [course, setCourse] = useState({
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  })
  const corse = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={corse} />
}

export default App;
