import React, { useState, useRef } from 'react';

export function useMultiState(initObj) {
    const refObj = useRef(initObj);
    const [_, setObj] = useState(initObj);
  
    const setObjByKey = (key, val) => {
      refObj.current[key] = val;
  
      let newObj = Object.create(refObj.current);
  
      setObj(newObj);
    };
  
    return [refObj.current, setObjByKey];
  }