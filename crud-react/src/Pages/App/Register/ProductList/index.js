import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { css, jsx } from "@emotion/core";
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import StarRateIcon from '@material-ui/icons/StarRate';
import {
  add_course,
  setInitialState,
  add_row,
  create,
  find,
  findProducts,
  update,
  remove,
  setUpdateInfo,
  setTotaElements,
  setando_total_element_de_outra_forma
} from '../../../../store/ducks/todos';

import { apiRoutes } from '../../../../Api';






const useStyles = makeStyles({
  root: {
    maxWidth: 635,
  },
  card: {
    // margin: "120px auto 50px",
    margin: "auto auto 50px",
    maxWidth: 345,
    overflow: "visible"
  },
  media: {
    height: 140,
  }
});

function ProductList() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setInitialState());
    // TODO MELHORAR A RESPOSTA DO BACKEND PRA METODO DE GET
    dispatch(findProducts(apiRoutes.PRODUCTS2));
  }, []);

  const { rows, pageNumber, pageSize, totalElements, deleteInfo, columns } = useSelector(
    state => state.todos
  );
  console.log('rows', rows)
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {rows.map(row => (
        <React.Fragment>
          <Card className={classes.card}>
            <CardActionArea>
            <Link to={'details/'+row.id}>
                <CardMedia
                  className={classes.media}
                  image="https://disottimodamasculina.com.br/wp-content/uploads/2019/01/disotticapa3.png"
                  title={row.name}
                />
              </Link>

              <CardContent>
                {/* TODO fazer essa rota de outro jeito */}
              <Link to={'details/'+row.id}>
                  <Typography gutterBottom component="h1">
                    {row.name}
                  </Typography>
                </Link>


                <Typography gutterBottom variant="headline" component="h2">
                  Price: {row.price}
                </Typography>




                <Typography gutterBottom component="h2">
                  Shipping: {row.shipping}
                </Typography>

                <Typography gutterBottom component="h2">
                  <StarRateIcon />{row.rating}
                </Typography>
                <Typography gutterBottom component="h2">
                  {row.sales} vendidos
                  </Typography>

              <Link to={row.store_link}>
                <Typography component="h2">
                  Store: {row.store_name}
                </Typography>

              </Link>


              {/* 
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                  </Typography> */}
              </CardContent>
            </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
                </Button>
            <Button size="small" color="primary">
              Learn More
                </Button>
          </CardActions>
          </Card>
        <Divider />

        </React.Fragment>
    // <React.Fragment>

    // <Divider />
    // </React.Fragment>
  ))
}


    </List >
  );
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(useStyles)(ProductList);