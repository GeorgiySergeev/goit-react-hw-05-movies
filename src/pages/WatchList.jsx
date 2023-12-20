import React from 'react';
import { TopBar } from 'components/TopBar/TopBar';

const WatchList = () => {
  return (
    <div style={{ padding: 60 }}>
      <TopBar
        title="Welcome to"
        span="Watchlists"
        text={
          'Create your watch list, add favorite movies, share with friends. Movie Box brings joy!"'
        }
      />
    </div>
  );
};

export default WatchList;
