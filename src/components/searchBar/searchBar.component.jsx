import React from 'react';

import './searchBar.styles.css';

const SearchBar = ({handleChange}) =>
(
    <div className='search-bar'>
       
             <div className="search-input">
                 <input className="input" type="text" placeholder="Search" onChange={handleChange} />
             </div>
         <div className="search-icon">
            <div className='button is-info'>
            <i className="fa fa-search fa-2x" aria-hidden="true"></i> 
            
            </div>
         
         
        </div>



    
    
    
    </div>



)

export default SearchBar;