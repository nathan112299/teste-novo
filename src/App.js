import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage'; // Página de boas-vindas

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);  // Assume que o usuário está logado

  return (
    <Router>
      <Routes>
        {/* Rota para a landing page */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <LandingPage user="Letícia" onLogout={() => setIsLoggedIn(false)} />
            ) : (
              <div>
                <h1>Você saiu. Até logo!</h1>
              </div>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
