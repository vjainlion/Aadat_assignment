import React from 'react';

import './surveyList.styles.css';
import SearchBar from '../searchBar/searchBar.component';
import SurveyItem from '../surveyItem/surveyItem.component';
const SurveyList = ({surveys,handleChange,handleClick}) =>
(
    <div className='survey-list'>
        <h1 className='title is-4'>Survey-List</h1>
       <SearchBar handleChange={handleChange}/>

    <div className='surveys-list-body'>
    
    {

        surveys.map((survey,index) =>{
            return(
                <SurveyItem handleClick={handleClick} name={surveys[index]} type='s'/>

            )
        })
       }
    </div>

     
    
    
    
    </div>



)
export default SurveyList;