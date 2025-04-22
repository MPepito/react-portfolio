import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "PyTorch",
    "LangChain",
    "Hugging Face",
    "Python",
    "CUDA",
    "C"

];

const labelsSecond = [
    "Google Firebase",
    "Docker",
    "GitHub Actions",
    "Linux",
    "Java",
    "React",
    "JavaScript",
    "Kotlin",
    "HTML5",
    "CSS3"
];

const labelsThird = [
    "Databricks",
    "Scikit-learn",
    "Azure",
    "MySQL",
    "C",
    "Scala"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>ML & LLM</h3>
                    <p>I design and deploy machine learning pipelines, with recent focus on LLM-powered applications. From fine-tuning transformer-based models to building retrieval-augmented generation (RAG) systems, I enjoy bringing intelligent systems into real-world products.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built different mobile app and Web applications, set up DevOps testing, CI/CD pipelines in an Agile settings with different colleagues and friends. My focus on such project are usually on backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMoneyBillTrendUp} size="3x"/>
                    <h3>Finance</h3>
                    <p>With a focus in ML engineering, I bring hands-on experience in financial engineering — including building and deploying trading algorithms that forecast volatility using a GARCH-MIDAS framework with Azure Data Factory and Databricks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    );
}

export default Expertise;