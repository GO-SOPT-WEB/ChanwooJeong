import styled from "styled-components";
import Header from "./layout/Header";
import DifficultySection from "./layout/DifficultySection";
import CardsSection from "./layout/CardsSection";
import ModalPortal from "./utils/modalPortal";
import Modal from "../components/Modal";
import { useRecoilValue } from "recoil";
import { modalOpenAtom } from "../atoms/atom";

const MatchCardsGame = () => {
  /** 모달 열고 닫는 Recoil atom value */
  const isModalOpen = useRecoilValue(modalOpenAtom);

  return (
    <>
      <Wrapper>
        <Header />
        <DifficultySection />
        <CardsSection />
        {isModalOpen && (
          <ModalPortal>
            <Modal>Game Clear🎉</Modal>
          </ModalPortal>
        )}
      </Wrapper>
    </>
  );
};

export default MatchCardsGame;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  overflow: scroll;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.bgColor};
`;
