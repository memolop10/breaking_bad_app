import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEpisodesAction } from '../actions/episodes';
import BKBImg from '../assets/bkB.png'
import InputFilter from './InputFilter';
import ListEpisodes from './ListEpisodes';


const HomeView = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getEpisodesAction() )
    }, [dispatch]);

    const liEpisodes = useSelector(state => state.episodes.listEpisodes)
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        if (liEpisodes.length) {
            setEpisodes(liEpisodes)
        }
    }, [liEpisodes])
    

    const onSearchEpisodes = (e) => {
        console.log(e.target.value)
        const keySearch = e.target.value;
        const filterEpisodes = liEpisodes.map( el => {
            const x = el?.episodes
            if (x && x.length) {
                const y = el.episodes.reduce( (acc,ep) => {
                    if (ep.title_episode.search(keySearch) !== -1) {
                        acc = [...acc,ep]
                    }
                    return acc
                },[])  
                return { ...el, episodes: y }
            }
                return { ...el, episodes:[] }
        })

        setEpisodes(filterEpisodes)
    }   

    return (
    <>
        <div className="header-app">
            <div className="img-container">
            <img src={ BKBImg } alt="BKB"/> 
            </div>
            <div className="input-container">
            <InputFilter
                onSearchEpisodes = { onSearchEpisodes }
            />
            </div>
        </div>
        <ListEpisodes 
            liEpisodes = {episodes}
        />
    </>
    )
}

export default HomeView
