import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;

    position: relative;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100px;
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`;

const Image = styled.img`
    height: 80%;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1``;
const Description = styled.p``;
const Button = styled.button``;

const slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined></ArrowLeftOutlined>
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src="https://sandro.com.vn/media/catalog/product/cache/29162ccbe9d79568e67e3d26712ec350/S/a/Sandro_SHPTS01064-40_V_1.jpg" />
                    </ImgContainer>
                    <InfoContainer>
                        <Title></Title>
                        <Description></Description>
                        <Button></Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined></ArrowRightOutlined>
            </Arrow>
        </Container>
    );
};

export default slider;
