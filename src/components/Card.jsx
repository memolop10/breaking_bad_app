import React from 'react'
import CardUi from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        backgroundColor: '#2A3B2E',
        width: 400,
        marginBottom:20,
        marginLeft:20,
        color: '#ffff'     
    },
    media: {
      height: 250,
      width: 400
    },

    info: {
        padding:10
    }
  });


const Card = ({title_episode, description,imageEpisode }) => {

    const classes = useStyles()

    return (
        <CardUi className={ classes.card }>
             <CardActionArea>
             <CardMedia
                className={classes.media}
                image={ imageEpisode }
                title="Episode image"
             />
             </CardActionArea>
             <div className={ classes.info }>
                <span> { title_episode } </span> 
                <p>
                    { description }
                </p>
             </div>
             
             
            
        </CardUi>
    )
}

export default Card
