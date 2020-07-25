import React from 'react';

import Header from './components/header/header.component';
import './App.css';

import SurveyList from './components/surveyList/surveyList.component';
import AssignedSurvey from './components/assignedSurvey/assignedSurvey.component';
class App extends React.Component {

  constructor()
  {
    super();
    this.state = {
      employees: [{
        'name':'Employee1',
        'surveys':['Survey1','Survey2','Survey3']
      
      },
     {
        'name':'Employee2',
     'surveys':['Survey1','Survey3']},
     {
        'name':'Employee3',
        'surveys':['Survey1','Survey2','Survey3']
     },
     {
        'name':'Employee4',
        'surveys':['Survey1','Survey2','Survey3']
     },
     {
        'name':'Employee5',
        'surveys':['Survey1','Survey2','Survey3']
     }],
     assignedSurvey:[],
     availableSurvey:[],
     totalSurvey:['Survey1','Survey2','Survey3'],
     
     currentAvailableSurvey:'',
     currentAssignedSurvey:'',
     currentEmployee:'Employee1'

      }
  }

  handleChangeOnAvailable = (e) =>
  {
      const name = e.target.value;
      this.setState({currentAvailableSurvey:name});

  }
  handleChangeOnAssigned = (e) =>
  {
    const name = e.target.value;
    this.setState({currentAssignedSurvey:name})
  }

  handleClick1 = name =>
  {

    const {availableSurvey ,assignedSurvey,currentEmployee} = this.state;

    const newArray = availableSurvey.filter(survey =>{
      return (survey!==name);
    });
    console.log(newArray);

     assignedSurvey.push(name);

       
    console.log(assignedSurvey);

    this.setState({availableSurvey:newArray,assignedSurvey:assignedSurvey});

    const emplo = this.state.employees;

    const ee = emplo.map(em=>{
      if(em.name===currentEmployee)
      {
        const s = assignedSurvey;
        const y = {
          'name':currentEmployee,
          'surveys':s
        };
        return y;
      }
      else
      {
        return em;
      }
    });
    this.setState({employees:ee});
    console.log(ee);
    console.log(this.state);
  };

  handleClick2 = name =>
  {
    console.log(name);

    const {availableSurvey ,assignedSurvey,currentEmployee} = this.state;

    const newArray = assignedSurvey.filter(survey =>{
      return (survey!==name);
    });

    availableSurvey.push(name);


    this.setState({availableSurvey:availableSurvey,assignedSurvey:newArray});
    
    const emplo = this.state.employees;

    const ee = emplo.map(em=>{
      if(em.name===currentEmployee)
      {
        
        const y = {
          'name':currentEmployee,
          'surveys':newArray
        };
        return y;
      }
      else
      {
        return em;
      }
    });
    console.log(ee);
    this.setState({employees:ee});
  };

  handleChange = (e) =>
  {
     const employee = e.target.value;
     this.setState({currentEmployee:employee});
     console.log(employee);
     const { employees } = this.state;
      console.log(employees);
      console.log(employees);
     const survey_ob = employees.find(emplo => {
       
      if(emplo.name===employee)
       return emplo;
     });
     console.log(survey_ob);

     const surveys = survey_ob.surveys;
     const total_survey = this.state.totalSurvey;
     console.log(total_survey);
     const availableSurvey = total_survey.filter(survey =>{
       if(surveys.indexOf(survey) ==-1)
       return true;
       else
       return false;
     });

     this.setState({assignedSurvey:surveys,availableSurvey:availableSurvey});
     console.log(this.state);
  }

  componentDidMount()
  {

      const total_survey = this.state.totalSurvey;
    const assignedSurvey = this.state.employees[0].surveys;
    console.log(assignedSurvey);
    const availableSurvey = total_survey.filter(survey =>{
      if(assignedSurvey.indexOf(survey) ==-1)
      return true;
      else
      return false;
    })

    this.setState({assignedSurvey:assignedSurvey,availableSurvey:availableSurvey})

  }
  render()
  {

     const { availableSurvey,assignedSurvey} = this.state;
     console.log(availableSurvey);
    const {currentAvailableSurvey,currentAssignedSurvey} = this.state;
    console.log(currentAvailableSurvey);
    console.log(currentAssignedSurvey);
    console.log(assignedSurvey);
     const filteredAvailableSurvey = availableSurvey.filter(survey =>
      survey.toLowerCase().includes(currentAvailableSurvey.toLowerCase())
     
    )

     console.log(filteredAvailableSurvey);
    const filteredAssignedSurvey = assignedSurvey.filter(
      survey => 

       survey.toLowerCase().includes(currentAssignedSurvey.toLowerCase())
    );

     return (
       <div className='app'>
       <Header handleChange={this.handleChange}/>
       <div className='survey-grid'>
       <SurveyList surveys={filteredAvailableSurvey} handleChange={this.handleChangeOnAvailable} handleClick={(par)=>this.handleClick1.bind(this,par)}/>
       <AssignedSurvey surveys={filteredAssignedSurvey} handleChange={this.handleChangeOnAssigned} handleClick={(par)=>this.handleClick2.bind(this,par)}/>
      
       </div>

       <div className="done">
       <div></div>
       <button className='button is-primary dd' onClick={()=> alert("Congratulations,your details has been updated successfully")}>
         DONE
       </button>
       <div></div>
       </div>
    
       </div>
      
    
    );

}
 
}

export default App;
