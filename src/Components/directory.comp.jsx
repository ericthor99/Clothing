import React                          from 'react';
import MenuItem                       from './menu-item.comp';
import { connect }                    from 'react-redux';
import { createStructuredSelector }   from 'reselect';
import { selectDirectorySections }    from '../redux/directory/directory.selectors';

import './directory.styles.scss';
 

const Directory = ({ sections }) => (
    
        <div className='directory-menu'>
            {
              sections.map(({id, ...sectionProps } ) => ( 
                <MenuItem key = { id } {...sectionProps } />))            
            }
        </div>
    
);

const mapStateToProps = createStructuredSelector ({ 
  sections: selectDirectorySections
 } );

export default connect ( mapStateToProps ) (Directory);