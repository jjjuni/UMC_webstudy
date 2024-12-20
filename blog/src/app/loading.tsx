'use client'

import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='w-[screen] flex justify-center items-center p-[20%]'>
      <ClipLoader className='h-[100%] text-center'
        color={`var(--concept-color)`}
        cssOverride={{}}
        loading
        size={35}
        speedMultiplier={0.7}
      />
    </div>
  );
}

export default Loading;