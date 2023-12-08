import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Form from "./Form";

function App() {
  const [notes, setNotes] = useState([]);
  const [retrieved, setRetrieved] = useState(false);

  async function addNote(noteItem) {

    const response = await fetch(`/api/addNote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: noteItem.title,
          content: noteItem.content
        })
      })

    if(response?.status === 200) {

      noteItem._id = await response.json().then(data => data.insertedId)

    
      setNotes((prevNotes) => {
        return [...prevNotes, noteItem];
      });

    }else{
      alert("We could not add your note at this time. Please try again later.")
    }
  }

  async function deleteNote(id) {

    const response = await fetch(`/api/removeNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if(response?.status === 200) {

      console.log(response.json().then(data => data.insertedId))

      setNotes((prevNotes) => {
        return prevNotes.filter((noteItem) => noteItem._id !== id);
      });

    }else{
      alert("We could not delete your note at this time. Please try again later.")
    }

  }

  function createNote(noteItem) {
    return (
      <Note
        key={noteItem._id}
        id={noteItem._id}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
      />
    );
  }

  useEffect(()=>{
    getNotes();
  },[])

  const getNotes = () => {
    fetch("/api").then(
      response => response.json() 
    ).then(
      data =>{
        setNotes(data);
        setRetrieved(true)
      }
    ).catch((err) => {
      console.log(err);
      alert("Oops, something went wrong. Please refresh the page.")
    });
  };

  return (
    <div>
      <Header />
      <Form onAdd={addNote} />
      {(retrieved === true) ? notes.map((note) => createNote(note)) : (<p>Loading ...</p>)}
      <Footer />
    </div>
  );
}

export default App;
