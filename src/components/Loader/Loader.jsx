import React from 'react';
import { Circles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#0c7ca2"
      ariaLabel="circles-loading"
      wrapperStyle={{
        position: 'absolute',
        margin: '0',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      visible={true}
    />
  );
};

export default Loader;
