// inputNode.js

import React from 'react';
import Node from './Node';

const InputNode = ({ id, data }) => {
  return (
    <Node
      id={id}
      type="customInput"
      data={data}
      label="Input"
      outputTypes={['Text', 'File']}
    />
  );
}

export default InputNode;
