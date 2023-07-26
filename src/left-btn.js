import React from 'react';

export default function LeftBtn(){
    const handleBack = () => {
        console.log('jumbalya')
    };
    return(
        <div id="player">
            <button type="button" onClick={handleBack}> Back</button>
      </div>
    )

}