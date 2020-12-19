import React from 'react';

import './ActionsBar.css'

import DropDown from './DropDown/DropDown';

import { IActionBarProps } from '../../shared/interfaces'

const ActionBar: React.FC<IActionBarProps> = (props) => {

    const { clicked, changed } = props
    return (
        <div className="bar">
            <button onClick={() => clicked()}>Gerate</button>
            <DropDown changed={changed} />
        </div>
    )
}

export default ActionBar