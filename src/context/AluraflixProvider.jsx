import {useEffect, useState} from 'react';
import {AluraflixContext} from './AluraflixContext';

const AluraflixProvider = ({children}) => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const response = await fetch('http://localhost:3500/aluraflix');
    const data = await response.json();

    setVideos(data);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <AluraflixContext.Provider value={{videos, getVideos}}>
      {children}
    </AluraflixContext.Provider>
  );
};

export default AluraflixProvider;
