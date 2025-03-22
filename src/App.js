import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
