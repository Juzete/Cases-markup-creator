const fs = require('fs');
import { configTemplate, createConfigTemplate } from './configTemplate.js';
const titleTitleSectionInput = document.querySelector('#titleTitleSection');
const headerImageAlt = document.querySelector('#headerImageAlt');
const headerImageTitle = document.querySelector('#headerImageTitle');
const challengeSubtitle = document.querySelector('#challengeSubtitle');
const solutionSubtitle = document.querySelector('#solutionSubtitle');
const techStackSubtitle = document.querySelector('#techStackSubtitle');
const subtitleClientSection = document.querySelector('#subtitleClientSection');

const templateBuilder = () => {
    configTemplate.titleTitleSection = titleTitleSectionInput.value.replace(/&&/gi, "<br />");
    configTemplate.headerImagePath = titleTitleSectionInput.value.replace(/&&/gi, " ").replace(/\s+/g, ' ').toLowerCase().split(" ").join('-');
    configTemplate.headerImageAlt = headerImageAlt.value;
    configTemplate.headerImageTitle = headerImageTitle.value;
    configTemplate.challengeSubtitle = challengeSubtitle.value;
    configTemplate.solutionSubtitle = solutionSubtitle.value;
    configTemplate.techStackSubtitle = techStackSubtitle.value;
    configTemplate.subtitleClientSection = subtitleClientSection.value.replace(/&&/gi, "<br />");
}


const buttonHandler = () => {
    templateBuilder();

    try { fs.writeFileSync('myfile.jsx', createConfigTemplate(), 'utf-8'); }
    catch(e) { alert(e); }
}
 

document.querySelector('#button').addEventListener('click', () => {
    buttonHandler();
})
  
  