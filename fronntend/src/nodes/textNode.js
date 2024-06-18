// textNode.js

import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import './Node.css';

const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const generateHandles = () => {
    const regex = /{{(.*?)}}/g;
    const matches = [...currText.matchAll(regex)];
    return matches.map((match, index) => (
      <Handle
        key={index}
        type="source"
        position={Position.Left}
        id={`${id}-handle-${index}`}
        style={{ top: `${(index + 1) * 100 / (matches.length + 1)}%` }}
      />
    ));
  };

  return (
    <div className="node">
      <div>
        <span>Text</span>
      </div>
      <div>
        <label>
          Text:
          <textarea 
            value={currText} 
            onChange={handleTextChange} 
            style={{ width: '100%', height: `${20 + currText.split('\n').length * 20}px` }}
          />
        </label>
      </div>
      {generateHandles()}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        className="handle source"
      />
    </div>
  );
}

export default TextNode;
