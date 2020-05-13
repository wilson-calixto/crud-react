import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import {
  add_course,
  setInitialState,
  add_row,
  create,
  find,
  update,
  remove,
  setUpdateInfo,
  setTotaElements,
  setando_total_element_de_outra_forma
} from '../../store/ducks/todos';
import { apiRoutes } from '../../Api';


export default function CustomDataTable() {


  const dispatch = useDispatch();

//TODO transformar isso em um servico
  async function testAdd(newData) {
    const { data, success } = await dispatch(
      create(apiRoutes.TESTE_DE_API,  newData , 'Linha de Produção')
    );


    if (!success && data && 'errors' in data) {
      const { errors } = data;
      console.log(' error ',data,success)

    }else{
      console.log(' antes')
// todo ver isso
      // dispatch(add_row(data))
      dispatch(find(apiRoutes.TESTE_DE_API));

      console.log(' success',data,success)

    }

  }

  async function delete_row(oldData) {

    const { data, success } = await dispatch(
      remove(apiRoutes.TESTE_DE_API, oldData.id, 'TESTE'));
    if (!success && data && 'errors' in data) {
      const { errors } = data;
    }else{
      dispatch(find(apiRoutes.TESTE_DE_API));
    }
}


async function update_row(newData,oldData) {
  const { data, success } = await dispatch(
    update(apiRoutes.TESTE_DE_API, newData.id, newData, 'TESTE'));

  if (!success && data && 'errors' in data) {
    const { errors } = data;
  }else{
    dispatch(find(apiRoutes.TESTE_DE_API));
  }
}

  useEffect(() => {
    dispatch(setInitialState());
    dispatch(find(apiRoutes.TESTE_DE_API));
  }, []);

  const { rows, pageNumber, pageSize, totalElements, deleteInfo, columns } = useSelector(
    state => state.todos
  );

  return (
    <>
      <MaterialTable
        title="Simple Crud Example"
        columns={columns}
        data={rows}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                testAdd(newData)
                resolve();
              }, 600);
            }),

          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                update_row(newData,oldData);
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {                
                delete_row(oldData)
                resolve();

              }, 600);
            }),
        }}
      />
    </>
  );
}

