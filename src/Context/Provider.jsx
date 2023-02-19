import React from 'react';
import {datas} from '../Components/Scores';

import { LeaderBoardContext } from './Context'
//  datas
const Provider = (props) => {
  
    return (
        <LeaderBoardContext.Provider value={ datas}>
            {props.children}
        </LeaderBoardContext.Provider>
    )
}
 
export default Provider