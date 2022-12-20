import React from "react";
import SearchBar from "../SearchBar";
import PokeCard from "../PokeCard";
import { GeralContainer } from "./styles";
const Container = () => {
  return (
    <>
      <SearchBar />
      <GeralContainer>
        <PokeCard />
      </GeralContainer>
    </>
  );
};
export default Container;
