import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import NotFound from './components/NotFound';
import DiaryEntryList from './components/DiaryEntryList';
import DailyQuote from './components/DailyQuote';  // Ensure this is imported correctly

function App() {
  return (
    <Router>
      <div>
        
        {/* Render DailyQuote only once here */}
        <DailyQuote /> {/* This is where the Daily Quote should appear once */}
        
        <Routes>
          <Route path="/" element={<DiaryEntryList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
