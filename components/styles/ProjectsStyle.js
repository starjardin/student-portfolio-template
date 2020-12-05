import styled from "styled-components"

const ProjectsStyle = styled.section`
  box-shadow : 1px 1px 5px #333;
  .title , .tools {
    text-transform : capitalize;
    font-weight : 600;
    font-size : 2rem;
    color : black;
  }

  h3 {
    color : #fff;
    padding : 1rem 0 0 0;
  }

  .project {
    background-color : #fff;
    margin-block : 2rem;
    padding : 2rem 1rem;
  }

  img { width : 100%; height : 100%}

  .anchor {
    display : inline-block;
    padding : 0.5rem 1rem;
    margin : 1rem 1rem 1rem 0;
    box-shadow : 1px 1px 5px #a7a9be;
    cursor : pointer;
    transition : 0.3s;
    border-radius : 4px;
    text-decoration : none;
  }

  .anchor:hover { 
    background-color : #ff8906;
    transform : scale(1.1)
  }

  @media (min-width : 520px) {
    .project {
      display : grid;
      grid-template-columns : repeat(2, 1fr);
      grid-gap : 2rem;
    }
  }
`

export default ProjectsStyle