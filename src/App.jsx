import React, { useContext } from 'react';
import SideBar from './Componant/sideBar/SideBar';
import Player from './Componant/Player/Player';
import Display from './Componant/Display/Display'
import { PlayerContext } from './Componant/Context/PlayerContext';


const App = () => {
  const {audioRef   ,track} = useContext(PlayerContext);
  return (
    <div className='h-screen bg-gradient-to-r from-slate-900 to-slate-800 '>
      <div className='h-[90%] flex'>
        <SideBar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App;