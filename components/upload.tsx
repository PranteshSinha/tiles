// src/components/UploadBox.tsx

import React from 'react';

const UploadBox: React.FC = () => {
  return (
    <div className='flex justify-center w-60 h-10'>
      <input type="file" accept="image/*" />
    </div>
  );
};

export default UploadBox;
