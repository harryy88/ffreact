import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main';


class Root extends React.Component{
    render(){
        return(<Main />)

    }

}


ReactDOM.render(<Root />, document.getElementById('root'));

