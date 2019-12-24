import React from 'react';
import ReactDom from 'react-dom';
import styles from './mystyle.module.css';

class Car extends React.Component {

    render() {
        return (
            <div>
                <h1 className={styles.bigblue}>Day1 Plan  </h1>
                <h4 className={styles.smallblack}>09:00 - 09:30 Take Uber to the Metro</h4>
                <h4 className={styles.smallblack}>09:45 - 12:00 visit Metro</h4>
                <h4 className={styles.smallblack}>Lunch time(will add pics later on)</h4>
                <h4 className={styles.smallblack}>14:30 - 17:30 shopping at Fifth Ave</h4>
                <h4 className={styles.smallblack}>17:30 - 18:00 back to hotel by Uber</h4>
            </div>
        );
    }
}

ReactDOM.render(<Container />, document.getElementById('root'));
