import React, { Component } from 'react';
import Header from './Header'
import Stylessheet from "./StyleSheet"

class App extends Component {
    constructor() {
        super()
        this.state = {
            LogofirstName: "",
            LogolastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <Stylessheet />

            <form>
                <input 
                type="text"
                value={this.state.firstName}
                name="LogofirstName"
                placeholder="LogoFirst Name"
                onChange={this.handleChange}
                />

                <br/>
                <input 
                type="text"
                value={this.state.lastName}
                name="LogolastName"
                placeholder="LogoLast Name"
                onChange={this.handleChange}
                />
                <h1>{this.state.LogofirstName} {this.state.LogolastName}</h1>
            </form>
            </div>
            
        )
    }
}
export default App;