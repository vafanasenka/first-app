import React, { Component } from 'react'

export default class Ccomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Alex",
         visible: false
      }

      this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({
            name: this.getName(),
            visible: !this.state.visible
        })
    }
    getName() {
        return this.state.name.concat(" Win");
    }

  render() {
    const name = this.state.name;
    const visible = this.state.visible;
    
    return (
        <>
        
        <div className={!visible ? "hidden" : "visible"}>
            <h1>Class Component {name} {this.props.numbers.join(', ')}</h1>
        </div>
        
        <button onClick={this.handleClick}>Click</button>
        </>
    )
  }
}

Ccomponent.defaultProps = { name: "Alexey999" }