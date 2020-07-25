import React from 'react';

import './surveyItem.styles.css';

const SurveyItem = ({name,type ,handleClick=f=>f}) =>
(
     <div className='survey-item'>
        <div className='survey-name'>
         {name}
        
        </div>

        

      
       {

        type==='s' ?
        (
            <button className="button is-success is-outlined" onClick={handleClick(name)}>
            <span className="icon">
            <i className="fa fa-plus" aria-hidden="true" ></i>
           </span>
           <span>ADD</span>
        
            </button>
       ):
       (
           <div className='button is-danger is-outlined' onClick={handleClick(name)}>
           <span className="icon">
           <i className="fa fa-window-close" aria-hidden="true"></i>
            </span>
           <span>REMOVE</span>
           </div>
       )




       }
    
    
    </div>


)

export default SurveyItem;