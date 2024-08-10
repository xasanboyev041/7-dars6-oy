import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import SinglePage from "./routes/SinglePage";
import SavedItemsPage from "./routes/SavedItemsPage"; // SavedItemsPage ni import qilamiz
import "./App.css";

const App = () => {
  const [savedItems, setSavedItems] = useState([]);

  const handleSaveItem = (item) => {
    setSavedItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/product/:id"
          element={<SinglePage onSave={handleSaveItem} />}
        />
        <Route
          path="/saved-items"
          element={<SavedItemsPage initialSavedItems={savedItems} />} // initialSavedItems propini uzatamiz
        />
      </Routes>
    </Router>
  );
};

export default App;
