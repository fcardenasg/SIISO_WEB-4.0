import React from "react";
import "./App.css";
import RoutesApp from "./routes/routes";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterMoment';

function App() {
  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <div className="App">
        <div className="bg-gray-200 h-screen fixed overflow-auto w-full">
          <RoutesApp />
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default App;
