import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import api from "../../services/api";

interface IUser {
  username: string;
  password: string;
}

function Register() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const body: IUser = {
      username: event.target[0].value,
      password: event.target[1].value,
    };

    api
      .post("users/", body)
      .then((response) => {
        console.log("usuario cadastrado com sucesso");
        console.log(response.data.token);
        localStorage.setItem('token', response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MDBContainer fluid>

    <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
      <MDBCardBody>
        <MDBRow>
          <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
            <form action="" onSubmit={handleSubmit}>
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
            <div className="d-flex flex-row align-items-center mb-4 ">
              <MDBIcon fas icon="user me-3" size='lg'/>
              <MDBInput label='Username' id='form1' type='text' className='w-100'/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="lock me-3" size='lg'/>
              <MDBInput label='Senha' id='form3' type='password'/>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <MDBIcon fas icon="key me-3" size='lg'/>
              <MDBInput label='Confirme sua senha' id='form4' type='password'/>
            </div>

            <div className='mb-4'>
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
            </div>

            <MDBBtn className='mb-4' size='lg'>Cadastrar</MDBBtn>

            </form>


          </MDBCol>

          <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
          </MDBCol>

        </MDBRow>
      </MDBCardBody>
    </MDBCard>

  </MDBContainer>
  );
}

export default Register;
