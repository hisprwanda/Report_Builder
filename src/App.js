import React from 'react'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import New from "./pages/report/formats/New";
import './style/styles.scss'
import ReportFormatsList from './pages/report/formats/ReportFormatsList';
import ReportEdit from './pages/report/edit/ReportEdit';


function App() {  

    return (
      <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="report">
                <Route index element={<ReportFormatsList />} />
                <Route path=":reportId" element={<Home />} />
                <Route path="reports" element={<New title="Add New Report" />}/>
                <Route path="report-edit" element={<ReportEdit />}/>
              </Route>
              
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;
  