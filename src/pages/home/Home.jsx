import React from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../../components/back/BackButton';
import "./home.scss";


function Home() {
  return (
    <div className='home'>
        
        <Link to="/" className="homeCard" style={{ textDecoration: "none"}}>
            <span className="title"> User App</span>
            <span className="content"> Navigate to Users app to change permissions. Roles define persmissions of User.</span>
            <span className="link"> Manager Users</span>
        </Link>
        <Link to='report' className="homeCard" style={{ textDecoration: "none"}}>
            <span className="title"> Report Format</span>
            <span className="content">Something about changing report formats.</span>
            <span className="link"> Edit Report Formats</span>
        </Link>
        <Link to='report' className="homeCard" style={{ textDecoration: "none"}}>
            <span className="title"> Overall Report</span>
            <span className="content"> Something about generating overall reports.</span>
            <span className="link"> Create New Report</span>
        </Link>

    </div>
  )
}


export default Home