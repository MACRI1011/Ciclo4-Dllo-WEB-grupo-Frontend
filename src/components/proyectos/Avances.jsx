import { useMutation, useQuery } from "@apollo/client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Badge, Button, Card, Form, ListGroup, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import AGREGAR_AVANCE from "../../apollo/gql/agregarAvance";
import GET_AVANCES from "../../apollo/gql/getAvances";

const Avances = () => {
  const [show, setShow] = useState(false);
  const [avance, setAvance] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();

  const handleAgregarAvance = () => {
    agregarAvance({
      variables: {
        idProyecto: id,
        avance: avance,
      },
    });
    handleClose();
  };

  const { loading, data, error } = useQuery(GET_AVANCES, {
    variables: {
      idProyecto: id,
    },
  });

  const [agregarAvance] = useMutation(AGREGAR_AVANCE);

  return (
    <>
      {error && <h1>error</h1>}
      {loading && <h1>datos</h1>}
      {data && (
        <div>
          <h2 className="mb-4">Avances del proyecto</h2>
          <br />
          <label for="#IDPROYECTO"> ID del proyecto</label>
          <Form.Control type="text" placeholder={id} readOnly id="IDPROYECTO" />
          <br />
          <section className="row">
            <div className="col">
              {data.listaAvances?.map((avance, index) => (
                <Card border="success">
                  <Card.Header>Avance # {index + 1}</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      Realizado por: {avance.usuario_id.nombre}
                    </Card.Title>
                    <Card.Text>
                      Fecha: {avance.fechaAvance}
                      <br />
                      Avance : {avance.avanceEstudiante}
                    </Card.Text>
                    <ListGroup as="ol" numbered>
                      {avance.observaciones.map((observacion, index) => (
                        <ListGroup.Item
                          as="li"
                          className="d-flex justify-content-between align-items-start"
                        >
                          <div className="ms-2 me-auto">
                            <div className="fw-bold">Observación</div>
                            {observacion.observacion}
                          </div>
                          <Badge variant="primary" pill>
                            {observacion.fechaObservacion}
                          </Badge>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                    {user.rol === "Lider" && (
                      <>
                        <Button variant="primary">Agregar Observación</Button>
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>
                              Ingresa la información del avance
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                              >
                                <Form.Label>Texto del avance</Form.Label>
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  value={avance}
                                  onChange={(e) => setAvance(e.target.value)}
                                />
                              </Form.Group>
                            </Form>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button
                              variant="success"
                              onClick={handleAgregarAvance}
                            >
                              Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </>
                    )}

                    {user.rol === "Estudiante" && (
                      <Button variant="primary"> Actualizar Avance</Button>
                    )}
                  </Card.Body>
                </Card>
              ))}
            </div>
          </section>
          <br />
          <section className="row">
            <div
              className="col-md-6
              "
            >
              <Button variant="success" onClick={handleShow}>
                + Agregar Avances
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Ingresa la información del avance</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Texto del avance</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        value={avance}
                        onChange={(e) => setAvance(e.target.value)}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="success" onClick={handleAgregarAvance}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Avances;
