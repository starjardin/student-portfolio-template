const personalDetaislRow = document.querySelector("#row")
const personalDetaislColumn = document.querySelector("#column")

const personalDetailsTemplate = document.querySelector(".personal-details-template")
const personalDetaislRowContent = document.importNode(personalDetailsTemplate.content, true)
const personalDetaislColumnContent = document.importNode(personalDetailsTemplate.content, true)
personalDetaislRow.appendChild(personalDetaislRowContent)
personalDetaislColumn.appendChild(personalDetaislColumnContent)

// Here the skills content

const skillsRow = document.querySelector("#skills-row")
const skillsColumn = document.querySelector("#skills-column")
const skillsTemplate = document.querySelector(".skills__content")

const skillsRowContent = document.importNode(skillsTemplate.content, true)
const skillsColumnContent = document.importNode(skillsTemplate.content, true)
skillsRow.appendChild(skillsRowContent)
skillsColumn.appendChild(skillsColumnContent)