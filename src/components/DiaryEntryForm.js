import React, { useState } from 'react';

function DiaryEntryForm({ onAddEntry }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEntry(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add Entry</button>
    </form>
  );
}

export default DiaryEntryForm;
