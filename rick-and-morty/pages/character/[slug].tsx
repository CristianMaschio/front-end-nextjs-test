import { NextPage } from "next";
import Link from "next/link";

import mockSingleCharacter from "mockdata/singleCharacter.json";
import {
  Header,
  HeaderCharacterInformationWrapper,
  HeaderCharacterWrapper,
  Wrapper,
  Footer,
} from "./Character.styled";
import { useRouter } from "next/router";

const CharacterPage: NextPage = () => {
  const router = useRouter();

  // router.query.slug is the Character id and can be used to fetch the character data inside the useEffect hook
  console.log(router.query.slug);

  const singleCharacter: LickApi.ICharacter = mockSingleCharacter.data;
  const orderedAppearanceEpisodes = singleCharacter.episodes.sort((a, b) => {
    return new Date(a.airDate).getTime() - new Date(b.airDate).getTime();
  });

  return (
    <>
      <Header>
        <h1>Rick and Morty</h1>
        <Link href="/">{"< Back to charact listing"}</Link>
        <HeaderCharacterWrapper>
          <img
            src={singleCharacter.avatar}
            alt={singleCharacter.name}
            width="100%"
          />
          <HeaderCharacterInformationWrapper>
            <h2>{singleCharacter.name}</h2>
            <p>Status: {singleCharacter.status} </p>
            <p>Origin: {singleCharacter.origin.name} </p>
          </HeaderCharacterInformationWrapper>
        </HeaderCharacterWrapper>
      </Header>
      <Wrapper>
        <h3>Location Details:</h3>
        <p>Name: {singleCharacter.location.name}</p>
        <p>Type: {singleCharacter.location.type}</p>
        <p>Dimension: {singleCharacter.location.dimension}</p>
        <p>No. of Residents: {singleCharacter.location.noOfResidents}</p>

        <h3>Episodes {singleCharacter.episodes.length}:</h3>
        <p>First appearance: {orderedAppearanceEpisodes[0].name}</p>
        <p>First appearance air date: {orderedAppearanceEpisodes[0].airDate}</p>
        <p>
          First appearance character count:{" "}
          {orderedAppearanceEpisodes[0].noOfCharacters}
        </p>
        <p>
          Last appearance:{" "}
          {orderedAppearanceEpisodes[orderedAppearanceEpisodes.length - 1].name}
        </p>
        <p>
          Last appearance air date:{" "}
          {
            orderedAppearanceEpisodes[orderedAppearanceEpisodes.length - 1]
              .airDate
          }
        </p>
        <p>
          Last appearance character count:{" "}
          {
            orderedAppearanceEpisodes[orderedAppearanceEpisodes.length - 1]
              .noOfCharacters
          }
        </p>
      </Wrapper>

      <Footer />
    </>
  );
};

export default CharacterPage;
