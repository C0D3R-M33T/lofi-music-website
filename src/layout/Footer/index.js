import React, { useState } from 'react';

import { chill, jazzy, sleep } from '../../data/songData';
import { useSelector } from 'react-redux';
import './styles.scss';
import Player from '../../components/Player'
import { CONSTANTS } from '../../constants/constants';

const Footer = () => {
  const data = useSelector((state) => state.mood);

  const { moodMode } = data;

  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  return (
    <div className='footer'>
      <div className='song-name'>
        {moodMode === 'chill' ? (
          <span>Now Playing: {chill[currentSongIndex].name}</span>
        ) : moodMode === 'jazzy' ? (
          <span>Song name: {jazzy[currentSongIndex].name}</span>
        ) : (
          <span>Song name: {sleep[currentSongIndex].name}</span>
        )}
      </div>
      <div className='controller'>
        {moodMode === 'chill' ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={chill}
          />
        ) : moodMode === 'jazzy' ? (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={jazzy}
          />
        ) : (
          <Player
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            songs={sleep}
          />
        )}
      </div>
      <div className='author'>
        Have a wonderful focus session, regards:
        <a
          href={CONSTANTS.AUTHOR_LINKEDIN_LINK}
          target='_blank'
          rel='noopener noreferrer'
          className='author-name'
        >
         {CONSTANTS.AUTHOR}
        </a>
      </div>
    </div>
  );
};

export default Footer;
