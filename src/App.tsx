import React, { FC, ReactElement} from 'react';
import { Header } from './components/Header';
import { Rooms } from './components/Rooms';

const App : FC = (): ReactElement => {

  
  
  return (

    <div>
      <Header title='Move-out List' />
      <Rooms />
    </div>
  );
}

export default App;
