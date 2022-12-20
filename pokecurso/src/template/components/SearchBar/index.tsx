import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import { Container } from "./styles";
import { InputGroup, Form, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  useEffect(() => {
    const getPokemons = async () => {
      try {
        const { data } = await api.get(`pokemons`);
        setPokemons(data);
        console.log(pokemons, data);
      } catch (error) {
        console.log("Deu erro", error);
      }
    };
    getPokemons();
  }, []);
  return (
    <Container>
        <InputGroup className="mb-3 w-50">
          <Form.Control
            placeholder="Pesquisar"
            aria-describedby="basic-addon2"
            className="p-2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            <BsSearch />
          </Button>
        </InputGroup>
    </Container>
  );
};
export default SearchBar;
