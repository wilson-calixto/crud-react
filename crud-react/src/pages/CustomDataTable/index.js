import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import {
  add_course,
  setInitialState,
  setUpdateInfo,
  setTotaElements,
  setando_total_element_de_outra_forma
} from '../../store/ducks/todos';




export default function CustomDataTable() {


  const dispatch = useDispatch();

  function addCourse() {
    dispatch(setando_total_element_de_outra_forma(1))
    dispatch(add_course('slksnjfns'))

  }
  
  useEffect(() => {
    dispatch(setInitialState());
    // eslint-disable-next-line
}, []);

const courses = useSelector(state =>  state.todos.data);
//   const { rows, pageNumber, pageSize, totalElements } = useSelector(
//     state => state.register
// );
const { rows, pageNumber, pageSize, totalElements,deleteInfo } = useSelector(
  state => state.todos
);

const [state, setState] = React.useState({
  columns: [
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' },
    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    {
      title: 'Birth Place',
      field: 'birthCity',
      lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    },
  ],
  data: [
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    {
      name: 'Zerya Betül',
      surname: 'Baran',
      birthYear: 2017,
      birthCity: 34,
    },
  ],
});

  console.log('totalElements',totalElements)
  return (
    <>
      <ul>
        {totalElements}
        { courses.map(course => <li key={course}>{course}</li>) }
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar curso
      </button>
      <MaterialTable
      // style={{background: '#161617'}}
      // style={{background: ${props => props.theme.background};}}
      
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
    </>
  );
}

