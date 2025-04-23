import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import nirlabLogo from '../assets/images/nirlab.png';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="July 2024 - February 2025"
            iconStyle={{ background: '#053E9F', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src={nirlabLogo}
                alt="NIRLAB logo"
                style={{ width: '60px', height: '60px', objectFit: 'contain' }}
              />
              <h3 className="vertical-timeline-element-title" style={{ margin: 0 }}>
                Research project with the startup NIRLAB
              </h3>
            </div>
            <h4 className="vertical-timeline-element-subtitle">Lausanne</h4>

            <p>
              Cocaine's origin classifier in PyTorch to abstract representations that capture the essential features of the input spectra and project it in the latent space. Set the first benchmark in accuracy.
            </p>
          </VerticalTimelineElement>


          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2021 - Juin 2025"
            iconStyle={{ background: '#053E9F', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">EPFL, Lausanne</h4>
            <p>
              Built several hands-on projects across AI, web development, and system design — always looking to bridge academic learning with practical impact.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2021"
            iconStyle={{ background: '#053E9F', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">COFCO, Geneva</h4>
            <p>
              Migrated legacy Excel workflows to a cloud-native Azure architecture; implemented ADF-based ETL pipelines for satellite-driven yield prediction in Databricks.
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015 - 2018"
            iconStyle={{ background: '#053E9F', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Master's degree in Finance</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Zürich</h4>
            <p>
              Applied ML on time series to real-world datasets, building end-to-end pipelines for forecasting, classification, and trading signal generation.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2016 - Jan 2017"
            iconStyle={{ background: '#053E9F', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">ED&F MAN, Zürich</h4>
            <p>
              Design and deploy a vessel line-up management system for key ports, optimizing scheduling and improving destination predictions by three days compared to public data provider.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2015"
            iconStyle={{ background: '#053E9F', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Trader</h3>
            <h4 className="vertical-timeline-element-subtitle">GAP SA</h4>

          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - 2014"
            iconStyle={{ background: '#053E9F', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor's degree in Economics</h3>
            <h4 className="vertical-timeline-element-subtitle">HEC Lausanne</h4>

          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;