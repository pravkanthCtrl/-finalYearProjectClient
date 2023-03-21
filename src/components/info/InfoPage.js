import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Conclusion from './tabsPages/Conclusion';
import Introduction from './tabsPages/Introduction';
import WorkDone from './tabsPages/WorkDone';
import {Link} from "react-router-dom"
import {GrFormNextLink} from "react-icons/gr"
import {GrFormPreviousLink} from "react-icons/gr"
import Header from '../header/Header';
import './info.css'
const InfoPage = () => {
  return (
    <div className='info'>
        <Header/>
         <Tabs
            defaultActiveKey="introduction"
            id="justify-tab-example"
            className="mb-3 info-tabs"
            justify
        >
            <Tab eventKey="introduction" title="Introduction">
                <Introduction />
            </Tab>
            <Tab eventKey="workdone" title="Work done">
                <WorkDone />
            </Tab>
            <Tab eventKey="conclusion" title="Conclusion">
                <Conclusion />
            </Tab>
        </Tabs>
        <div className="navigation-btn-data">
          <Link to="/">
            <GrFormPreviousLink className='next-btn'/>
          </Link>
          <Link to="/graph">
              <GrFormNextLink className='next-btn'/>
          </Link>
        </div>
    </div>
  )
}

export default InfoPage