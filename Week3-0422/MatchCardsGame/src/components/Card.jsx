import styled from "styled-components";

const Wrapper = styled.article`
  margin: 2rem;
  .card {
    width: 19rem;
    height: 25rem;

    :hover .content {
      transform: rotateY(180deg);
    }

    /* .card .content{
    transform: rotateY(180deg);
  } */
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
        top: 1.5rem;
        left: 1.5rem;
      }
      .footerName {
        position: absolute;
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

const Card = () => {
  return (
    <Wrapper>
      <div className="card">
        <div className="content">
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
              <span className="headerName">피카츄</span>

              <div className="pokemonImgBox">
                <img
                  className="pokemonImg"
                  src="https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002501.png"
                  alt="피카츄"
                />
              </div>
              <span className="footerName">피카츄</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
