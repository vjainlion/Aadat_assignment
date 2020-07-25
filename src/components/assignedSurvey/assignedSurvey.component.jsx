import React from 'react';

import './assignedSurvey.styles.css';
import SearchBar from '../searchBar/searchBar.component';
import SurveyItem from '../surveyItem/surveyItem.component';
const AssignedSurvey = ({surveys,handleChange,handleClick}) =>
(
    <div className='survey-list'>
        <h1 className='title is-4'>Assigned-Survey</h1>
       <SearchBar handleChange={handleChange}/>

    <div className='surveys-list-body'>
    
    {

        surveys.map((survey,index) =>{
            return(
                <SurveyItem handleClick={handleClick} key ={index} name={surveys[index]} type='a' />

            )
        })
       }
    </div>

     
    
    
    
    </div>



)
export default AssignedSurvey;