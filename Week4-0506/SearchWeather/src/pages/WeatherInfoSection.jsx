import { Outlet, useParams } from "react-router-dom";
import { styled } from "styled-components";
import WeatherCard from "../components/WeatherCard";

const Wrapper = styled.div`
    width: 100%;
    padding: 2rem;

    border: 2px solid violet;
    font-size: 3rem;
`


const WeatherInfoSection = () => {

    const {period ,area} = useParams()

    return (
        <Wrapper>
            {period} {area}
            <Outlet />
        </Wrapper>
    );
};

export default WeatherInfoSection;