/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
const Wrapper = styled.article`
  cursor: pointer;
  margin: 2rem;
  .card {
    width: 19rem;
    height: 25rem;

    .active {
      transform: rotateY(180deg);
    }
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    border-radius: 5px;
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;

    background-color: white;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }

  .back {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    width: 100%;
    height: 100%;

    ::before {
      display: block;
      position: absolute;
      content: " ";
      width: 160px;
      height: 160%;
      background: linear-gradient(90deg, transparent, purple, transparent);
      animation: borderAnimation 3000ms infinite linear;
    }

    @keyframes borderAnimation {
      0% {
        transform: rotateZ(0deg);
      }

      0% {
        transform: rotateZ(360deg);
      }
    }

    .back-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      position: absolute;
      width: 98%;
      height: 98%;
      background-color: blueviolet;
      border-radius: 0.5rem;

      img {
        width: 5rem;
        height: 5rem;
      }
    }
  }

  .front {
    transform: rotateY(180deg);
    color: black;

    .front-content {
      display: flex;
      flex-direction: column;
      justify-content: center;

      position: absolute;
      width: 100%;
      height: 100%;
      padding: 10px;

      .headerName {
        position: absolute;
        font-size: 1.5rem;
        top: 1.5rem;
        left: 1.5rem;
      }
      .footerName {
        position: absolute;
        font-size: 1.5rem;
        bottom: 1.5rem;
        right: 1.5rem;
      }
      .pokemonImgBox {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .pokemonImg {
        width: 80%;
      }
    }
  }
`;

const Card = (props) => {
  const {
    Primarykey,
    pokemonName,
    pokemonImg,
    matchCards,
    matchCardArr,
    setMatchingArr,
  } = props;

  /** 카드 막기 및 카드를 매칭할 때 전체 이벤트 막기 위한 useState */
  const [active, setActive] = useState(false);
  const [allStop, setAllStop] = useState(false);


  /** 2개의 카드의 동일 유무를 가리기 위한 로직 */
  useEffect(() => {
    if (matchCardArr.matchingArr.length === 2) {
      setAllStop(true);
      setTimeout(() => setActive(false), 1000);
      setMatchingArr([]);
      setTimeout(() => setAllStop(false), 1000);
    }
  }, [matchCardArr.matchingArr ,setActive , setMatchingArr]);


  /** 카드가 이미 매칭된 짝인지 판별하는 로직 */
  const alreadyMatched = matchCardArr.matchedArr.some((pokemon) => {
    return (
      pokemon.first.pokemonName === pokemonName ||
      pokemon.second.pokemonName === pokemonName
    );
  });

  /** 카드를 매칭하는 로직 */
  const matchHandler = () => {
    const payload = { Primarykey, pokemonName };
    matchCards(payload);
    setActive(true);
  };

  return (
    <Wrapper
      onClick={alreadyMatched || allStop || active ? null : matchHandler}
    >
      <div className="card">
        <div
          className={`content ${
            alreadyMatched ? "active" : active ? "active" : ""
          }`}
        >
          <div className="back">
            <div className="back-content">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/220px-Pokebola-pokeball-png-0.png"
                alt="몬스터볼"
              ></img>
            </div>
          </div>

          <div className="front">
            <div className="front-content">
              <span className="headerName">{pokemonName}</span>

              <div className="pokemonImgBox">
                <img className="pokemonImg" src={pokemonImg} alt="피카츄" />
              </div>
              <span className="footerName">{pokemonName}</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
