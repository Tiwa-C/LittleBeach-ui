import styled  from "styled-components"

const Container = styled.div`
    heigh: 50px;
    background-color: #228E95;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500px;

`;

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $79
    </Container>
  )
}

export default Announcement
