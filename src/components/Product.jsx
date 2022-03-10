import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom";
import styled from "styled-components"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 150%;
    position: absolute;
    top: -57px;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height:380px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EBF5FB;
    position: relative;

    &:hover ${Info}{
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 230px;
    height: 230px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 150%;
    z-index: 2; 
    margin: -57px 0px ;
`;



const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;  
    &:hover{
        background-color: #C3EDF2;
        transform: scale(1.1)
    }
`;

const Product = ({item}) => {
  return (
    <Container>
        <Circle>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                    <SearchOutlined/>
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Circle>
      
    </Container>
  )
}

export default Product
