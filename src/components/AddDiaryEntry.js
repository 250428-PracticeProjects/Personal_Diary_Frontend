import { useState } from "react";
import { createDiaryEntry } from "../services/diaryService"; // 👈 Import your service

function AddDiaryEntry({ onAddEntry }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await createDiaryEntry({ title, content });
      console.log("Saved entry:", response.data);
      onAddEntry(response.data); // Add the entry to the list
      setTitle('');
      setContent('');
    } catch (error) {
      console.error("Error saving diary entry:", error);
      alert("Failed to save entry. Please try again.");
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Add New Diary Entry</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '300px', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <textarea
            placeholder="Write your thoughts here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ width: '300px', height: '100px', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '8px 20px' }}>
          Save Entry
        </button>
      </form>
    </div>
  );
}

export default AddDiaryEntry;