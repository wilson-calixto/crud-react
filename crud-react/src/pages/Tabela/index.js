

// export default function Tabela ({ theme }) {

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
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



export default function Tabela ({ theme}) {


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


  return (
    <div
      css={css`
        padding: 50px 0;
        background-color: ${theme.background};
        color: ${theme.text};
        text-align: center;
        transition-duration: 0.2s;
        transition-property: background-color, color;
      `}
    >
      
     



      <ul 
       css={css`
    
       border: 2px solid ${theme.buttonBorder};
       background-color: ${theme.buttonBg};
       color: ${theme.buttonText};

     `}>
        { courses.map(course => <li key={course}>{course}</li>) }
      </ul>




    </div>
  );
}

