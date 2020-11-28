import styled from 'styled-components'

const StyledPersonalDetails = styled.div`
  background-color : #fff;
  color : #094067;
  max-width: 250px;
  box-shadow: 1px 1px 5px #094067;
  padding-block: 2rem;
  padding-inline: 1rem;
  box-sizing: border-box;
  border-radius: 5px;

  .personal__about {
  padding-block: 2rem;
  .contact {
    padding-block-start: 1rem;
  }
  span {
    display: block;
  }
}

@media (min-width: 620px) {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  max-width: 100%;
  margin-bottom: 2rem;

  .personal__image {
    img {
      border-radius : 5px;  
    }
    grid-row: 1/3;
    grid-column: 1/2;
  }

  .personal__about {
    grid-column: 2/5;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;

    .contact {
      display: flex;
      flex-direction: column;
      padding: 0;
    }
  }

  .personal__desc {
    margin-top: 0.7rem;
    grid-row: 2/3;
    grid-column: 2/5;
  }
}
`
export default StyledPersonalDetails;