import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import '../styles/Timeline.css';

import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  return (
    <div className="experience">
      <h1>Work experience & Education</h1>
      <VerticalTimeline >
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2020 - Present"
            iconStyle={{ background: "#82204A", color: "#fff" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Partners Support Team Lead
            </h3>
            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/images/skroutz.png" alt="skroutz" width="20" height="20" style={{ marginRight: '10px' }} />
              <a href="https://www.skroutz.gr/"  style={{ textDecoration: 'none' }}>Skroutz</a>, Greece
            </p>
          </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2023 - November 2023"
          iconStyle={{ background: "#736072", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Development
          </h3>
          <a href="https://codingfactory.aueb.gr/" style={{ textDecoration: 'none' }}>Coding Factory</a>
          <p >Athens University of Economics & Business </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="August 2019 - May 2020"
          iconStyle={{ background: "#82204A", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Customer Success Manager
          </h3>
          <p  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/images/parkaround-logo.png" width="60" height="60" style={{ marginRight: '-10px' }} />
              <a href="https://www.parkaround.com/"  style={{ textDecoration: 'none' }}>Parkaround</a>, Greece
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2017 - December 2018"
          iconStyle={{ background: "#82204A", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Operations Manager
          </h3>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/images/jc-logo.png" width="20" height="20" style={{ marginRight: '10px' }} />
            JoinCargo, Greece
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2017" 
          iconStyle={{ background: "#736072", color: "#fff" }}
          icon={<SchoolIcon />}
          
        >
          <h3 className="vertical-timeline-element-title">
            BSc - Industrial Management and Technology
          </h3>
          <p>University of Piraeus</p>
        </VerticalTimelineElement>
        
        
      </VerticalTimeline>



      
  

  

    </div>
  );
}

export default Experience;