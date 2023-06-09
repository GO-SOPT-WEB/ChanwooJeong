import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalInnerContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;

  padding: 5rem;
  transform: translate(-50%, -50%);
  background-color: aliceblue;
  border-radius: 5rem;
  font-size: 7rem;

  button {
    margin-top: 2rem;
    padding: 1rem;
    border: none;
    background-color: palevioletred;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
`;

const Confetti = styled.div`
  position: absolute;
  top: -1rem;
  left: ${() => Math.random() * 1000}rem;
  width: 1rem;
  height: 1rem;
  background-color: rgb(
    ${() => Math.floor(Math.random() * 256)},
    ${() => Math.floor(Math.random() * 256)},
    ${() => Math.floor(Math.random() * 256)}
  );

  animation: fall 3s linear;
  animation-delay: ${() => Math.random() * 10}s;

  @keyframes fall {
    from {
    }
    to {
      transform: translateY(100vh);
      opacity: 0;
    }
  }
`;

const Modal = ({ children, setIsModalOpen, allReset }) => {
  
  /** 게임으로 돌아가기 + 전체리셋 **/
  const resetAndReturnToGame = () => {
    allReset();
    setIsModalOpen(false);
  };

  /** GameClear 축하 색종이 생성함수**/
  const manyConfetti = () => {
    const Confetties = Array.from({ length: 1000 }).map((index) => {
      return <Confetti key={index} />;
    });
    return Confetties;
  };

  /** GameClear 축하 색종이 생성**/
  const confettieArr = manyConfetti();

  return (
    <ModalWrapper>
      {confettieArr}
      <ModalInnerContent>
        {children}
        <button onClick={resetAndReturnToGame}>게임으로 돌아가기</button>
      </ModalInnerContent>
    </ModalWrapper>
  );
};

export default Modal;
