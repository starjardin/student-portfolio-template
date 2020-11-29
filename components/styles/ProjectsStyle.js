import styled from "styled-components"

const ProjectsStyle = styled.section`
  h3 {
    color : #fff;
    padding : 1rem 0 0 0;
  }
  .project {
    background-color : #fff;
    margin-block : 2rem;
    padding : 2rem 1rem;
    display : grid;
    grid-template-columns : repeat(2, 1fr);
    grid-gap : 2rem;
  }
  box-shadow : 1px 1px 5px #333;
  .anchor {
    display : inline-block;
    padding : 0.5rem 1rem;
    margin : 1rem 1rem 1rem 0;
    box-shadow : 1px 1px 5px #a7a9be;
    cursor : pointer;
  }
  .anchor:hover {
    background-color : #ff8906;
  }
`

export default ProjectsStyle