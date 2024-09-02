import React, { useState, useEffect } from 'react';
import { FaInfinity } from 'react-icons/fa';
import { motion } from 'framer-motion';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      const timer = setTimeout(() => {
        setShowMessage(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'sahiti' && password === '6301240468') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
      {!isLoggedIn ? (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center min-h-screen"
        >
          <form onSubmit={handleLogin} className="p-8 bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 mb-4 rounded bg-opacity-20 bg-white text-black"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 rounded bg-opacity-20 bg-white text-black"
            />
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
              Login
            </button>
          </form>
        </motion.div>
      ) : (
        <div className="p-8">
          <header className="flex justify-between items-center mb-8">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer"
            >
              <FaInfinity className="text-4xl text-blue-500" />
            </motion.div>
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition-colors"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </header>
          <main className="text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold mb-4"
            >
              Sorry Sahiti
            </motion.h1>
            {showMessage && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg"
              >
                I didn't respond well from evening due to other issues running through my mind, which made me change my mood and feel alone... That's why I didn't speak to anyone.
              </motion.p>
            )}
          </main>
        </div>
      )}
    </div>
  );
};

export default App;