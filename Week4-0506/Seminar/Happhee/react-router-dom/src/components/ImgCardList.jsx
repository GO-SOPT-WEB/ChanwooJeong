import styled from "styled-components";
import ImgCard from "./ImgCard";
import {IMG_LIST} from "../assets/index";
const St = {
  CardListWrapper: styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;

    width: 100%;
    padding: 1rem;

    background-color: ${({ theme }) => theme.colors.Sopt_Blue};
  `,
};
const ImgCardList = () => {
  return (
    <St.CardListWrapper>
      {IMG_LIST.map(({imgSrc, id, name}) => (
        <ImgCard key={id} id={id} imgSrc={imgSrc} name={name} />
      ))}
    </St.CardListWrapper>
  );
};

export default ImgCardList;
