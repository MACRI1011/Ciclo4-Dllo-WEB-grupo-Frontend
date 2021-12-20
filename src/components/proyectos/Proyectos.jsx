import { useLazyQuery, useQuery } from "@apollo/client";
import React from "react";
import { NavLink } from "react-router-dom";
import GET_PROYECTOS from "../../apollo/gql/getProyectos";

const Proyectos = () => {
  const { loading, data, error } = useQuery(GET_PROYECTOS);

  // const handleDelete = (id) => {

  //     const [getCurso, result] = useLazyQuery(DELETE_PROYECTO);

  //     console.log('delete');
  // }

  console.log(data);

  return (
    <>
      <div>
        <h1>Gestión de Proyectos</h1>
      </div>
      <a href="/addProyecto">
        <button type="button" class="btn btn-success">
          Agregar Proyecto
        </button>
      </a>
      <br /> <br />
      {loading && <p>Cargando ...</p>}
      {error && <p>Se ha producido un error</p>}
      {data && (
        <table className="table table-hover">
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
            {data.proyectos?.map((proyecto, index) => (
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
                  {/* <button type="button" className="btn btn btn-danger mr-3" data="data de pruebas" onClick={() => handleDelete(proyecto.id)}>Eliminar</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Proyectos;
