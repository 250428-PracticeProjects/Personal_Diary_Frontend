import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DiaryEntryList.css';

function DiaryEntryList() {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [quote, setQuote] = useState('');
  const [editingId, setEditingId] = useState(null); // For editing
  const [message, setMessage] = useState('');


  useEffect(() => {
    fetchEntries();
    fetchQuote();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/diary');
      setEntries(response.data);
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const fetchQuote = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/diary/quote');
      setQuote(response.data.quote || response.data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleSave = async () => {
    if (!title || !content || !date) {
      alert('Please fill in all fields');
      return;
    }
  
    try {
      const newEntry = { title, content, date };
      if (editingId) {
        // Update entry
        await axios.put(`http://localhost:8080/api/diary/${editingId}`, newEntry);
        setMessage('Entry updated');
      } else {
        // Create new entry
        await axios.post('http://localhost:8080/api/diary', newEntry);
        setMessage('Entry added');
      }
  
      setTitle('');
      setContent('');
      setDate('');
      setEditingId(null);
      fetchEntries(); // Fetch updated entries
    } catch (error) {
      console.error('Error saving entry:', error);
    }
  };
  

  const handleEdit = (entry) => {
    setTitle(entry.title);
    setContent(entry.content);
    setDate(entry.date);
    setEditingId(entry.id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/diary/${id}`);
      setMessage('Entry deleted');
      fetchEntries();  // Fetch updated entries list after deletion
    } catch (error) {
      console.error('Error deleting entry:', error);
    }
  };
  

  return (
    <div className="container">
      <h1 className="main-heading">Personal Diary 📓</h1>

      <div className="quote-section">
        <h2>Daily Quote</h2>
        <div className="quote-box">
          {quote ? <p>{quote}</p> : <p>Loading quote...</p>}
        </div>
      </div>

      <h2 className="section-heading">My Diary Entries</h2>
      {entries.map((entry) => (
        <div key={entry.id} className="entry-card">
          <h3>{entry.title}</h3>
          <p>{entry.content}</p>
          <p className="entry-date"><em>{entry.date}</em></p>
          <button className="edit-btn" onClick={() => handleEdit(entry)}>Edit</button>
          <button className="delete-btn" onClick={() => handleDelete(entry.id)}>Delete</button>
        </div>
      ))}

      <div className="entry-form">
        <h3>{editingId ? 'Edit Diary Entry' : 'Add New Diary Entry'}</h3>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your thoughts here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={handleSave}>
          {editingId ? 'Update Entry' : 'Save Entry'}
        </button>
      </div>
      
{/* Success Message Box */}
<div className="message-box">
  {message && <p className="success-message">{message}</p>}
</div>
    </div>
  );
}

export default DiaryEntryList;
