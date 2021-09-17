import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux'
import { getEpisodesAction } from '../actions/episodes';
import Card from './Card';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    main: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
  });


const ListEpisodes = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch( getEpisodesAction())
    }, [dispatch]);

    const liEpisodes = useSelector(state => state.episodes.listEpisodes)
    console.log(liEpisodes)
    
    const classes = useStyles()

    return (
        <div className={ classes.main }>
            
                {
                    liEpisodes.map( el => (
                        el.episodes.map( episode => (
                            <Card 
                                key={ episode.id }
                                title_episode={ episode.title_episode }
                                description={ episode.description }
                                imageEpisode={ episode.image_large }
                            />
                        ))
                    ))
                }    
           
        </div>
    )
}

export default ListEpisodes
