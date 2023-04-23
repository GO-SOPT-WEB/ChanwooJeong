import styled from "styled-components";
import Card from "../../components/Card";
import getPokemonListRandom from "../utils/getPokemonList";


const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 0 1.5rem;
  height: calc(100% - 30rem);
`;
const CardsSection = (props) => {
  const { currentDifficulty } = props;

  //랜덤카드데이터 가져오기
  const RandomCardList = getPokemonListRandom(currentDifficulty)

  return (
    <Wrapper>
      {RandomCardList.map((pokemonData, i) => (
        <Card
          key={i}
          pokemonId={pokemonData.id}
          pokemonName={pokemonData.name}
          pokemonImg={pokemonData.img}
        />
      ))}
    </Wrapper>
  );
};

export default CardsSection;
