import React from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import  HandleFetch  from './fetch.js';

export default function LeftBtn(){
    const handleBack = () => {
        console.log('jumbalya')   
        let newArr = []
        newArr.push(HandleFetch())
        console.log(newArr)
        
    };
    return(
        <div id="backBtn">
            <button type="button" onClick={handleBack}> Back</button>
      </div>
    )

}