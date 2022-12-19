import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import New from "./pages/report/formats/New";
import './style/styles.scss'
import ReportHome from './pages/report/ReportHome';
// import ReportHome from './pages/report/ReportHome';


function App() {  
  
    return (
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<ReportHome />} />
              <Route path="report">
                <Route index element={<ReportHome />} />
                <Route path=":reportId" element={<Home />} />
                <Route path="newReport" element={<New title="Add New Report" />}/>
              </Route>
              
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;
  