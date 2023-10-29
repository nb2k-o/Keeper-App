import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Form from "./Form";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(noteItem) {
    setNotes((prevNotes) => {
      return [...prevNotes, noteItem];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => index !== id);
    });
  }

  function createNote(noteItem, index) {
    return (
      <Note
        key={index}
        id={index}
        title={noteItem.title}
        content={noteItem.content}
        onDelete={deleteNote}
      />
    );
  }

  return (
    <div>
      <Header />
      <Form onAdd={addNote} />
      {notes.map((note, index) => createNote(note, index))}
      <Footer />
    </div>
  );
}

export default App;
