import React, { useState, useEffect } from 'react';

const BtnSide = ({ props }) => {

    const { direction, onClickHandler } = props;

    const [classes, setClasses] = useState('');

    useEffect(() => {

        switch (direction) {
            case 'left':
                setClasses('main_btnside_arrow_left')
                break;
            case 'right':
                setClasses('main_btnside_arrow_right')
                break;

            default:
                break;
        }
    }, [direction]);


    return (
        <div className='main_btnside' onClick={(ev) => onClickHandler(ev)} >
            <span className={classes} />
        </div>
    );
}

export default BtnSide;
