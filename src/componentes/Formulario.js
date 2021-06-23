export const Formulario = (props) => {
    return(
      <Col xs ="12">
        <Form.Group>
          <Form.Label>Nombre:</Form.Label>
          <Form.Label>Apellido:</Form.Label>
          <Form.Label>Valoracion:</Form.Label>
          <Form.Control
            type="text"
          />
        </Form.Group>
      </Col>

    );


  }
