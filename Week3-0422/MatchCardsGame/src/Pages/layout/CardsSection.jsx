import styled from "styled-components";
import Card from "../../components/Card";
import getPokemonListRandom from "../utils/getPokemonList";
import { useMemo} from "react";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 0 1.5rem;
  margin-bottom: 7rem;
`;
const CardsSection = (props) => {
  const { currentDifficulty, matchCards, matchCardArr, setMatchingArr } = props;

  /** 랜덤카드데이터 가져오고 난이도가 변경되지 않는 한 해당 데이터들을 저장 (useMemo사용) */
  const RandomCardList = useMemo(() => {
    /** 랜덤카드데이터 가져오기 */
    const RandomCardList = getPokemonListRandom(currentDifficulty);
    return RandomCardList;
  }, [currentDifficulty]);

  return (
    <Wrapper>
      {RandomCardList.map((pokemonData, i) => (
        <Card
          key={i}
          Primarykey={i}
          pokemonId={pokemonData.id}
          pokemonName={pokemonData.name}
          pokemonImg={pokemonData.img}
          matchCards={matchCards}
          matchCardArr={matchCardArr}
          setMatchingArr={setMatchingArr}
        />
      ))}
    </Wrapper>
  );
};

export default CardsSection;
