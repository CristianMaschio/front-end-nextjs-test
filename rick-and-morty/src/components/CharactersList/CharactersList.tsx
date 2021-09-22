import { useRouter } from "next/router";
import React from "react";
import { ProfileCard, Wrapper } from "./CharactersList.styled";

interface ICharactersListProps {
  className?: string;
  characterList: LickApi.ICharacterCore[];
}

const CharactersList: React.FC<ICharactersListProps> = ({
  className,
  characterList,
}) => {
  const router = useRouter();

  return (
    <Wrapper className={className}>
      {characterList.map((character) => (
        <ProfileCard key={character.id}>
          <img width="100%" src={character.avatar} alt={character.name} />
          <p>Name: {character.name}</p>
          <p>Gender: {character.gender}</p>
          <p>Species: {character.species}</p>
          <button
            onClick={() => {
              router.push(`/character/${character.id}`);
            }}
          >
            View Profile
          </button>
        </ProfileCard>
      ))}
    </Wrapper>
  );
};

export default CharactersList;
