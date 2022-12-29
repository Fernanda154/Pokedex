import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import initialImg from "./../../assets/initial-img.png";
import logo from "./../../assets/logo.png";
import { ContainerLogin, Logo } from "./styles";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
interface IUser {
  username: string;
  password: string;
}
function Login() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const body: IUser = {
      username: event.target[0].value,
      password: event.target[1].value,
    };

    api
      .post("login", body)
      .then((response) => {
        console.log("logou");
        console.log(response.data);
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(response.data.token)}`;
        localStorage.setItem("token", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();
  function goToRegister() {
    navigate("/register");
  }
  return (
    <ContainerLogin>
      <MDBContainer fluid className="p-3 my-5">
        <MDBRow>
          <MDBCol col="10" md="6">
            <img
              src={initialImg}
              className="img-fluid"
              alt="Imagem ilustrativa contendo pokemons."
            />
          </MDBCol>

          <MDBCol col="4" md="4">
            <Logo src={logo} alt="Logo da aplicação" />
            <form action="" onSubmit={handleSubmit}>
              <MDBInput
                wrapperClass="mb-4"
                placeholder="Email"
                id="formControlLg"
                
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                placeholder="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <span onClick={goToRegister}>
                  <u>Não possui conta?</u>
                </span>
              </div>

              <MDBBtn className="mb-4 w-100" size="lg">
                ENTRAR
              </MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </ContainerLogin>
  );
}

export default Login;
