import React from 'react';
import './header.styles.css';

const Header = ({handleChange}) =>
(
    <div className='header'>
    
        < h1 className = "title is-3" > Select Employee </h1>
        <div className='dropdown'>
          <div className='block'>
            <div className="field has-addons">
              <p className='control'>
                <span className='select'>
                  <select name='employee' className='emps' onChange={handleChange}>
                    <option defaultValue='Employee1'>Employee1</option>
                    <option defaultValue='Employee2'>Employee2</option>
                    <option defaultValue='Employee3'>Employee3 </option>
                    <option defaultValue='Employee4'>Employee4 </option>
                    <option defaultValue='Employee5'>Employee5 </option>
                  </select>
                
                
                </span>

              </p>
            
            </div>


          </div>
        
        </div>
    
    </div>


)

export default Header;