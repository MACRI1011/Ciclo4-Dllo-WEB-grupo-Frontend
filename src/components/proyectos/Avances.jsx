import { useMutation, useQuery } from "@apollo/client";
import { set, useForm } from "react-hook-form";
import React, { useState } from "react";
import { Badge, Button, Card, Form, ListGroup, Modal } from "react-bootstrap";
import {  useParams } from "react-router-dom";
import AGREGAR_AVANCE from "../../apollo/gql/agregarAvance";
import GET_AVANCES from "../../apollo/gql/getAvances";
import AGREGAR_OBSERVACION from "../../apollo/gql/agregarObservacion";

const Avances = () => {
  const [show, setShow] = useState(false);
  const [avance, setAvance] = useState("");
  const [observacion, setObservacion] = useState("");
  const handleClose = () => setModalId("");
  const handleShow = () => setShow(true);
  const [modalId,setModalId]=useState("");
  const user = JSON.parse(sessionStorage.getItem("user"));
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

  function handleAgregarObservacion (idAvance) {
    if (observacion === "") {
      return alert("Observacion invalida, ingrese un valor");
    }
    agregarObservacion({
      variables: {
        idAvance: idAvance,
        observacion: observacion,
        idProyecto: id
      },
    });
    handleClose();
    setObservacion("");
  };

  const { loading, data, error } = useQuery(GET_AVANCES, {
    variables: {
      idProyecto: id,
    },
  });

  const [agregarAvance] = useMutation(AGREGAR_AVANCE);
  const [agregarObservacion] = useMutation(AGREGAR_OBSERVACION);

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
                <>
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
                             Fecha: {observacion.fechaObservacion}
                            </Badge>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>

                      {user.rol === "Lider" && (
                        <>
                          <Button key={index} variant="primary" onClick={()=>setModalId(`modal${index}`)}>
                            Agregar Observación
                          </Button>

                          <Modal show={modalId === `modal${index}`} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Agregar Observación a {avance.id}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Form>
                                <Form.Group
                                  className="mb-3"
                                  controlId="exampleForm.ControlTextarea2"
                                >
                                  <Form.Label>
                                    Texto de la observación
                                  </Form.Label>
                                  <Form.Control
                                    as="textarea"
                                    rows={3}
                                    value={observacion}
                                    onChange={(e) =>
                                      setObservacion(e.target.value)
                                    }
                                  />
                                </Form.Group>
                              </Form>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                              <Button
                                variant="primary"
                                onClick={()=>
                                  handleAgregarObservacion(avance.id)
                                }
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
                  <br />
                </>
              ))}
            </div>
          </section>
          {user.rol === "Estudiante" && (
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
          )}
        </div>
      )}
    </>
  );
};

export default Avances;
