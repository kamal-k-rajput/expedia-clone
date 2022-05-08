import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({id,img,name,time,rating,rnumber,price,cancel,ptravel,lprice}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}    
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="p">
            {name}
          </Typography>
          
          <Typography gutterBottom variant="h6" component="h1">
          <AccessTimeIcon/> {time}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            {rating}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {rnumber}
          </Typography> */}
          <Typography variant="body2" color="textSecondary" component="p">
            {cancel}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            S${price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {ptravel}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {lprice}
          </Typography>
         
 
        
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
  );
}
