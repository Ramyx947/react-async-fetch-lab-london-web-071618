// create your App component here
import React, {Component} from 'react'

// import Button from './components/Button'
// import ExampleComponent from './components/ExampleComponent'
// import Greeting from './components/Greeting'

class App extends Component{
  state = {
    people: []
  }
  
  render(){
    return(
      <div className="App">
      {this.state.people.map(person => person.name)} 
      </div>
    )
  } 
  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(data => {this.setState({people: data.people
    })
  })
}
}


export default App