import React from 'react'
import UseContextHook from './UseContextHook/UseContextHook';
import UseRef from './UseRefHook/UseRef';

import Form1 from './CustomHooks/Form1';
import Form2 from './CustomHooks/Form2';
import FirstApi from './CustomHooks/FirstApi';
import SecondApi from './CustomHooks/SecondApi';

const ImportHooks = () => {
  return (
    <div>
  
      <h1>Hooks In React</h1>
      {/* <UseContextHook/>
      <UseRef/> */}
    
      {/* <Form1/>
      <Form2/> */}
      <FirstApi/>
      <SecondApi/>
    </div>
  );
}

export default ImportHooks