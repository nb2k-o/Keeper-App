import React, { useState } from "react";

function Form(props) {
  const [noteItem, setNoteItem] = useState({
    title: "",
    content: ""
  });

  function handleAdd(event) {
    props.onAdd(noteItem);

    setNoteItem({
      title: "",
      content: ""
    });

    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNoteItem((prevNoteItem) => {
      return {
        ...prevNoteItem,
        [name]: value
      };
    });
  }

  return (
    <form>
      <input
        name="title"
        onChange={handleChange}
        value={noteItem.title}
        placeholder="Title"
      />
      <textarea
        name="content"
        onChange={handleChange}
        value={noteItem.content}
        placeholder="Take a note..."
        rows="3"
      />
      <button onClick={handleAdd}>Add</button>
    </form>
  );
}

export default Form;
