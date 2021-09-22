import { NextPage } from "next";
import CharactersList from "@/components/CharactersList";
import Meta from "@/components/_shared/Meta";
import { Footer, Header } from "./Homepage.styled";

import mockAllCharacters from "mockdata/allCharacters.json";

const Homepage: NextPage = () => {
  const title = "Rich and Morty";

  return (
    <>
      <Meta title={title} />
      <Header>
        <h1>{title}</h1>
      </Header>
      <CharactersList characterList={mockAllCharacters.data} />
      <Footer />
    </>
  );
};

export default Homepage;
