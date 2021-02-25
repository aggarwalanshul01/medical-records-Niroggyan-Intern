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
    //console.log("))))"+props.Lang);
    const getTitle=()=>{
      if(props.Lang=='hindi'&&props.post.title.hindi){
        return props.post.title.hindi
      }return props.post.title.en
    }
    const getDescription=()=>{
      if(props.Lang=='hindi'&&props.post.description.hindi){
        return props.post.description.hindi
      }return props.post.description.en
    }
  return (
      
    <Card variant="outlined">
      <CardContent>
        <img src={props.post.imgLink} width='230'/>
        <Typography variant="h5" component="h2">
          {getTitle()}
        </Typography>
        
        <Typography variant="body2" component="p">
          {getDescription()}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      
        <Button size="small" onClick={clickedLink} style={{zIndex:'1',position:'static', marginLeft:'14px',marginBottom:'10px'}}>Learn More <ArrowRightAltIcon/></Button>
      
    </Card>
  );
}