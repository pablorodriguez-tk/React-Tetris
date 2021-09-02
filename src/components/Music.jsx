import React from 'react';
import { useAudioPlayer } from 'react-use-audio-player';

const Music = ({ file }) => {
  const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
    src: file,
    format: 'mp3',
    autoplay: false,
    onend: () => console.log('sound has ended!'),
  });

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading) return <div>Loading audio</div>;

  return (
    <button onClick={togglePlayPause}>{playing ? 'Pause' : 'Play'}</button>
  );
};

export default Music;
