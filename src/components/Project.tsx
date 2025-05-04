import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://aclanthology.org/2025.naacl-long.10.pdf" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://aclanthology.org/2025.naacl-long.10.pdf" target="_blank" rel="noreferrer"><h2>What the #?*!: Disentangling Hate Across Target Identities</h2></a>
                <p>We presented a comprehensive analysis of various factors that influence the behavior and accuracy of HS detectors. Empirical results revealed that popular industrial and academic HS classifiers are still prone to bias due to specific mentions of the target identity.</p>
            </div>
            <div className="project">
                <a href="https://www.tandfonline.com/doi/full/10.1080/00986445.2022.2135504" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.tandfonline.com/doi/full/10.1080/00986445.2022.2135504" target="_blank" rel="noreferrer"><h2>ML-based system identification of a realistic heat integrated distillation column</h2></a>
                <p>In this study, a unique approach is presented to identify a dynamic closed-loop HIDC system using Support Vector Regression (SVR).</p>
            </div>
            <div className="project">
                <a href="https://www.sciencedirect.com/science/article/abs/pii/S1389128618302044#preview-section-snippets" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.sciencedirect.com/science/article/abs/pii/S1389128618302044#preview-section-snippets" target="_blank" rel="noreferrer"><h2>Anonymous hybrid mutual authentication and key agreement scheme for WBAN</h2></a>
                <p>We propose a hybrid anonymous authentication and key agreement scheme using the physiological signal to overcome the shortcomings in Li et al.’s scheme. The proposed scheme also provides additional security features to resist hub node impersonation attack and key escrow problem.</p>
            </div>
            <div className="project">
                <a href="https://www.sciencedirect.com/science/article/abs/pii/S0010482519302367" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.sciencedirect.com/science/article/abs/pii/S0010482519302367" target="_blank" rel="noreferrer"><h2>Plug and play self-configurable IoT gateway node for telemonitoring of ECG</h2></a>
                <p>The experimental results indicate that our proposed self-configurable system at the gateway node makes the entire ECG telemonitoring system flexible, plug and play, patient independent and power-efficient.</p>
            </div>
            <div className="project">
                <a href="https://link.springer.com/article/10.1007/s12652-021-03543-9" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://link.springer.com/article/10.1007/s12652-021-03543-9" target="_blank" rel="noreferrer"><h2>Efficient on-site confirmatory testing for atrial fibrillation with derived 12-lead ECG</h2></a>
                <p>We propose an efficient on-site confirmatory testing for AF with 12-lead ECG derived from the reduced lead set (RLS) in a wireless body area network (WBAN) environment.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;