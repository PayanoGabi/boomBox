import React from 'react';

export default function RightBtn(){
    const handleNext = () => {
        console.log('jumbalya')
    };
    return(
        <div id="player">
            <button type="button" onClick={handleNext}> Next</button>
      </div>
    )

}