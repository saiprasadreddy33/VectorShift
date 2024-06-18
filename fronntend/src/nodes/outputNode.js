// outputNode.js

import React from 'react';
import Node from './Node';

const OutputNode = ({ id, data }) => {
  return (
    <Node
      id={id}
      type="customOutput"
      data={data}
      label="Output"
      outputTypes={['Text', 'Image']}
    />
  );
}

export default OutputNode;
