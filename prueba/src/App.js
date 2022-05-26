import './App.css';
import Note from './components/Note';
//import axios from 'axios'
// si utilizas axios debes instalarlo con $ npm install axios
import { useEffect, useState } from 'react'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")
  const [loading, setLoading] = useState(false)

  // FETCH Normal
  
  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => {
        setNotes(json)
        setLoading(false)
      })
  }, [])
  

  // FETCH con AXIOS
  /*
  useEffect(() => {
    setLoading(true)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setNotes(response.data)
        setLoading(false)
      })
  }, [])
  */

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: notes.length + 1,
      title: newNote,
      body: newNote,
    }
    setNotes((prevNotes) => prevNotes.concat(noteObject));
    setNewNote("");
  }

  return (
    <div className="App">
      <h1>NOTES Json Placeholder</h1>

      {loading ? "Loading . . ." : ""}

      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note}/>
        ))}
      </ol>

      <form onSubmit={addNote}>
        <input onChange={handleNoteChange} value={newNote} />
        <button type='submit'>ADD NOTE</button>
      </form>
    </div>
  );
}

export default App;
