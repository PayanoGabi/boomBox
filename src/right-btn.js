import React from 'react';

export default function RightBtn(){
    const handleNext = () => {
        console.log('jumbalya')
    };
    return(
        <div id="nextBtn">
            <button type="button" onClick={handleNext}> Next</button>
      </div>
    )

}