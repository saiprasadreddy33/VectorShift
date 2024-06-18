// Node.js

import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import './Node.css';

const Node = ({ id, type, data, label, outputTypes }) => {
  const [currName, setCurrName] = useState(data?.name || id.replace(`${type}-`, ''));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div className="node">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        className="handle target"
      />
      <div>
        <span>{label}</span>
      </div>
      <div>
        <label>
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
          />
        </label>
        <label>
          Type:
          <select value={outputType} onChange={handleTypeChange}>
            {outputTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        className="handle source"
      />
    </div>
  );
}

export default Node;
