import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


export default function OutlinedCard(props) {
    const clickedLink=()=>{
        window.open(props.post.link);
    }
  return (
      
    <Card variant="outlined">
      <CardContent>
        <img src={props.post.imgLink} width='230'/>
        <Typography variant="h5" component="h2">
          {props.post.title}
        </Typography>
        
        <Typography variant="body2" component="p">
        {props.post.description}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={clickedLink}>Learn More <ArrowRightAltIcon/></Button>
      </CardActions>
    </Card>
  );
}