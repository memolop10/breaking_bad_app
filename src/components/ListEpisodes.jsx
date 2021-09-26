import React from 'react'
import Card from './Card';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    main: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
  });


const ListEpisodes = ({liEpisodes}) => {
    
    const classes = useStyles()

    return (
        <div className={ classes.main }>
            
                {
                    liEpisodes.length &&
                    liEpisodes.map( el => (
                        <div>
                            <p>Temporada {el.title}</p>
                            <div>{
                                
                                el.episodes.map( episode => (
                                    <Card 
                                        key={ episode.id }
                                        title_episode={ episode.title_episode }
                                        description={ episode.description }
                                        imageEpisode={ episode.image_large }
                                    />
                                ))
                                
                            }
                            </div>
                            
                        </div>
                   ))
                }    
           
        </div>
    )
}

export default ListEpisodes
