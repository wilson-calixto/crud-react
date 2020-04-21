import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const Demo = ({ classes, onToggleDark }) => (
  <Card>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="h2">
        be nev lent
      </Typography>
      <Typography color="textSecondary">adjective</Typography>
      <Typography component="p">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>

    <CardActions>
      <Button variant="contained" color="default" onClick={onToggleDark}>
        Toggle Theme Type
      </Button>
    </CardActions>
  </Card>
);

export default Demo;
