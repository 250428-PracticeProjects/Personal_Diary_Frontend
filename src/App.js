import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DiaryEntryList from './components/DiaryEntryList';
import DailyQuote from './components/DailyQuote'; 
 
function App() {
  return (
    <Router>
      <div>
      
        
        {/* Render DailyQuote only once here */}
        <DailyQuote /> {/* This is where the Daily Quote should appear once */}
        
        <Routes>
          <Route path="/" element={<DiaryEntryList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
