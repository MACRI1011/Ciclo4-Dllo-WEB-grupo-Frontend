import { useLazyQuery, useQuery } from "@apollo/client";
import React from "react";
import { NavLink } from "react-router-dom";
import GET_MIS_PROYECTOS from "../../apollo/gql/getMisProyectos";
import useAuth from "../../hooks/useAuth";

const MisProyectos = () => {

    const auth = useAuth();

    const { loading, data, error } = useQuery(GET_MIS_PROYECTOS);

    console.log(data);

    const rol = auth.user.rol;

    return (
        <>
            
                <div>
                    <div>
                        <h1>Mis proyectos inscritos</h1>
                    </div>
                    <br /> <br />

                    {loading && <p>Cargando ...</p>}
                    {error && <p>Se ha producido un error</p>}
                    {data && (
                        <table className="table align-middle text-center table-bordered border-dark table-striped caption-top table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Nº</th>
                                    <th scope="col">Proyecto</th>
                                    <th scope="col">Objetivos Generales</th>
                                    <th scope="col">Objetivos Especificos</th>
                                    <th scope="col">Presupuesto</th>
                                    <th scope="col">Fecha Inicio</th>
                                    <th scope="col">Fecha Fin</th>
                                    <th scope="col">Líder</th>
                                    <th scope="col">CC</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Fase</th>
                                    <th scope="rol">Avances</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.misProyectos?.map((proyecto, index) => (
                                    <tr key={proyecto.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{proyecto.nombre}</td>
                                        <td>
                                            <ul>
                                                {proyecto.objetivosG.map((objetivo) => {
                                                    return <li>{objetivo}</li>;
                                                })}
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                {proyecto.objetivosE.map((objetivo) => {
                                                    return <li>{objetivo}</li>;
                                                })}
                                            </ul>
                                        </td>
                                        <td>{proyecto.presupuesto}</td>
                                        <td>{proyecto.fechaInicio}</td>
                                        <td>{proyecto.fechaFin}</td>
                                        <td>{proyecto.lider.nombre}</td>
                                        <td>{proyecto.lider.cc}</td>
                                        <td>{proyecto.estado ? "Activo" : "Inactivo"}</td>
                                        <td>{proyecto.fase}</td>
                                        <td> <a href={`/avances/${proyecto.id}`}>Ver Avances</a></td>

                                        <td>
                                            <NavLink
                                                className="btn btn-primary mr"
                                                to={`/editProyecto/${proyecto.id}`}
                                            >
                                                Editar
                                            </NavLink>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                       
        </>
    );
};

export default MisProyectos;