import {Link} from "react-router-dom"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import {GrFormNextLink} from "react-icons/gr"
import {GrFormPreviousLink} from "react-icons/gr"


import "./dataPage.css"
import "./animation.css"
import Graph from './Graph';
import Tabular from './Tabular';
import Graph2 from './Graph2';
import Header from '../header/Header';

const DataPage = () => {
  //http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5

  return (
    <div className='dataPage'>
        <Header/>

        <div className='data-component'>
            <div className='data'>
              <h3 className='chart-heading'>Chart</h3>
              <Tabs
                  defaultActiveKey="graph"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                  
                >
                <Tab eventKey="graph" title="Graph">
                    <Graph />
                  </Tab>
                  <Tab eventKey="graph2" title="Graph 2">
                    <Graph2 />
                  </Tab>
                  <Tab eventKey="tabular" title="Tabular">
                    <Tabular />
                  </Tab>
                </Tabs>
            </div>
            <div className="main">
              <div className="face"></div>
              <div className="foot"></div>
              <div className="hay"></div>
              <div className="nose"></div>
              <div className="eye-ball-left"></div>
              <div className="ear-left"></div>
              <div className="ear-right"></div>
              <div className="eye-left"></div>
              <div className="eye-right"></div>
              <div className="eye-ball-right"></div>
            </div>
        </div>
        <div className="navigation-btn-data">
          <Link to="/info">
            <GrFormPreviousLink className='next-btn'/>
          </Link>
          <GrFormNextLink className='next-btn'/>
        </div>
    </div>
  )
}

export default DataPage