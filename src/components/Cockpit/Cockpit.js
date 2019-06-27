import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');

      //http request...
      setTimeout(() => {
        alert('Saved data to cloud');
      }, 1000);

      return () => {
        console.log('[Cockpit.js] clean up work in Cockpit.js useEffect')
      };
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] clean up work in Cockpit.js 2nd useEffect')
      };
    });

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = classes.Red;
    }
    if(props.personsLength <= 2) {
      assignedClasses.push(classes.Red);
    }

    if(props.personsLength <= 1) {
      assignedClasses.push(classes.Bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!!!</p>
            <button
            className={btnClass} 
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(Cockpit);