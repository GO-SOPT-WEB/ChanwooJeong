import { useParams } from "react-router-dom";

const WeatherInfoSection = () => {

    const {period} = useParams()

    return (
        <div>
            {period}
        </div>
    );
};

export default WeatherInfoSection;