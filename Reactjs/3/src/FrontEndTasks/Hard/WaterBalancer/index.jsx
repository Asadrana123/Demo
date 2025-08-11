import React from 'react'
import useManageTank from './hooks/useManageTank';
import WaterTanks from './Components/WaterTank';
import './index.css'
import RangeContainer from './Components/RangeContainer';
function index() {
    const { tanksData, changeHeight, changeRange,timeTracker } = useManageTank();
    return (
        <div className='main-container'>
            <h3>Press and Hold "Add" to start filling the tank</h3>
            <div className='tanks-container'>
                {tanksData.map((data, index) => {
                    return <WaterTanks
                        key={index}
                        timeTracker={timeTracker}
                        height={data}
                        changeHeight={changeHeight}
                        index={index} />
                })}
            </div>
            <RangeContainer range={tanksData.length - 4} changeRange={changeRange} />
        </div>
    )
}

export default index