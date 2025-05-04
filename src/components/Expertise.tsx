import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faGears, faCode, faHexagonNodes } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "SpaCy",
    "Hugging Face",
    "NLTK",
    "NumPy",
    "SQL",
    "Pandas",
    "Docker",
    "Postman"
];

const labelsSecond = [
    "Python",
    "OpenAI",
    "LLM",
    "LangChain",
    "Hugging Face",
    "LlamaIndex",
    "Docker",
    "Pandas",
    "Selenium",
];

const labelsThird = [
    "Python",
    "SQL",
    "BigQuery",
    "Pixalate",
    "Google Ads API",
    "MongoDB",
    "Airflow",
    "Elasticsearch",
    "Docker"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faGears} size="3x"/>
                    <h3>AI Research & Development</h3>
                    <p>I have a strong research background in AI, with expertise in Machine Learning, Natural Language Processing, and Information Security. I’ve contributed to cutting-edge research in areas like Lightweight Security for IoT Edge Devices and authored peer-reviewed publications in SCI-indexed journals. My experience spans from algorithm design to practical AI system development, ensuring real-world impact and scalability.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>GenAI & LLMs</h3>
                    <p>I specialize in building enterprise-grade solutions powered by Generative AI and Large Language Models. Leveraging my professional expertise in AI, I design and deploy intelligent systems for contextual targeting, personalized recommendations, and enhanced decision-making, driving tangible business value in the AdTech domain.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faHexagonNodes} size="3x"/>
                    <h3>Data-Driven AdTech Solutions</h3>
                    <p>With extensive experience in ML and NLP applications in AdTech, I excel at creating and optimizing data-driven solutions. From developing robust contextual targeting systems to improving inventory quality and content moderation, I’ve successfully aligned advanced technical implementations with strategic business objectives.</p>
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