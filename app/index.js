import React from 'react'
import ReactDOM from 'react-dom'
import GroceryList from "./components/GroceryList";
import './GroceryList.css'


class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <GroceryList />
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)