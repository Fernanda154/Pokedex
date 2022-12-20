import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import api from "../../../services/api";
import {firstLetter} from "../../../utils";


interface IPokemon {
  name: string;
  sprite: string;
}

function GridExample() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
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
    <Row className="g-4">
      {pokemons.map((pokemon: IPokemon) => (
        <Col>
          <Card style={{ width: '18rem', textAlign:"center"}}>
              <Card.Img variant="top" src={pokemon.sprite} style={{height: "100px", width: "100px", margin: "0 auto"}} />
            <Card.Body>
              <Card.Title>{firstLetter(pokemon.name)}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
