import React from "react";
import mockNirlab from '../assets/images/mockNirlab.png';
import mockJavion from '../assets/images/MockJavion.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.nirlab.com/" target="_blank" rel="noreferrer"><img src={mockNirlab} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.nirlab.com/" target="_blank" rel="noreferrer"><h2>Filmate AI</h2></a>
                <p>(On going) Developed a classifier in PyTorch using Joint-Embedding Predictive Architecture (JEPA) to map drug samples into a latent space, identifying cocaine’s origin based on chemical composition. Benchmarked the model as part of a research collaboration with NIRLAB and EPFL</p>
            </div>
            <div className="project">
                <a href="https://www.nirlab.com/" target="_blank" rel="noreferrer"><img src={mockNirlab} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.nirlab.com/" target="_blank" rel="noreferrer"><h2>Optimizing Cocaine Seizure Profiling</h2></a>
                <p>This study explored the feasibility of integrating portable spectroscopic techniques,
such as Near Infrared (NIR) and Raman spectroscopy, into cocaine seizure profiling.
By evaluating clustering methods combined with dimensionality reduction, this method
uncover chemical links among samples and determine common sources. The
findings demonstrate that Raman spectroscopy, when coupled with dimensionality reduction
techniques like t-SNE, significantly improves clustering performance by organizing spectral
data into separable patterns. K-means clustering exhibited strong performance, while
DBSCAN and HDBSCAN faced limitations due to varying cluster densities.</p>
            </div>
            <div className="project">
                <a href="https://www.google.com" target="_blank" rel="noreferrer"><img src={mockNirlab} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.google.com" target="_blank" rel="noreferrer"><h2>Astro Raiders</h2></a>
                <p>Improved financial volatility forecasts by integrating macroeconomic data using a GARCH-MIDAS framework. Enhanced model performance with PCA and Bayesian structural time series (BSTS), deployed using PyTorch and scikit-learn..</p>
            </div>
            <div className="project">
                <a href="https://www.google.com" target="_blank" rel="noreferrer"><img src={mockJavion} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.google.com" target="_blank" rel="noreferrer"><h2>Software-Defined Radio System for Live Aircraft Tracking via ADS-B</h2></a>
                <p>Developed a Java-based application that decodes ADS-B messages from aircraft using the AirSpy R2 software-defined radio, capturing signals on the 1090 MHz frequency to extract real-time flight data such as identity, speed, and position, and visualizing this information on an interactive map for live air traffic monitoring.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;