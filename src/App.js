import React from 'react'
import './styles/App.css';
import Search from './components/Search';

class App extends React.Component{
  
    render(){
        return(
            <div>
                <h1 className='author'>Alejandro Cristancho</h1>
                <Search />
            </div>
        );
    }
}

export default App;

