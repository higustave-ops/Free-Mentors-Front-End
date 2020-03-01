/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
	render() {
		return <h1>Welcome To Free Mentors Website</h1>;
	}
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
