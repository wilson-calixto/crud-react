import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { css, jsx } from "@emotion/core";
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
} from '../../../../store/ducks/todos';
import { apiRoutes } from '../../../../Api';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function ProductList() {

    
    const dispatch = useDispatch();

    
      useEffect(() => {
        dispatch(setInitialState());
        dispatch(find(apiRoutes.PRODUCTS));
      }, []);
    
      const { rows, pageNumber, pageSize, totalElements, deleteInfo, columns } = useSelector(
        state => state.todos
      );
console.log('rows',rows)
  const classes = useStyles();

  return (
    <div
    css={css`
      padding: 50px 0;
      text-align: center;
      transition-duration: 0.2s;
      transition-property: background-color, color;
    `}
  >
    
    <List className={classes.root}>
    {rows.map(row => (        
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />      
      </ListItem>))}


    </List>
    </div>
  );
}