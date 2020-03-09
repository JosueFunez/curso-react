import React from 'react';
import './App.css';



class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options : []
    }
  }
  handleDeleteOptions(){
    this.setState(()=>{
      return{
          options: []
      }
    })
  }
  handlePick(){
    const randomNum = Math.floor(Math.random()*this.state.options.length)
    const option = this.state.options[randomNum]
    alert(option)
  }
  handleAddOption(option){
    if(!option){
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option)>-1){
      return 'This option already exists'
    }
    this.setState((prevState)=>{
     
      return {
        options: prevState.options.concat(option)
      }
    })
  }
  render(){
    const title = "Indecision"
    const subtitle = 'Put your life in the hands of a computer'
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action handlePick = {this.handlePick}
        hasOptions={this.state.options.length > 0}/>
        <Options options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
}


class Header extends React.Component{
  render(){   
    return (
<div>
  <h1>
    {this.props.title}
  </h1>
  <h2>
    {this.props.subtitle}
  </h2>
</div>

    )
  }
} 

class Action  extends React.Component{
  
  render(){
    return (
      <div>
        <button onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
        What Should I Do?
        </button>
      </div>
    )
  }
}

class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e){
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option)
    
    this.setState(()=>{
      return { error }
    })

  }
  render(){
    return(
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>Add Option</button>
        </form> 
      </div>
    )
  }
}


class Options extends React.Component{
 
  render(){
    return(
      <div>
        <ol>
          {
            this.props.options.map((option)=> <Option key={option} optionText={option}/>)
          }
           
        </ol>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
      </div>
    )
  }
}

class Option extends React.Component{
  render(){
    return (
      <div>
        <li>{this.props.optionText}</li>
        </div>
    )
  }
}
//*********************************************** */

// class Counter extends React.Component{
//   constructor(props){
//     super(props);
//     this.handleAddOne = this.handleAddOne.bind(this);
//     this.handleMinusOne = this.handleMinusOne.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//     this.state = {
//       count:0
//     };
//   }
//   handleAddOne(){
//     this.setState((prevState)=>{
//       return {
//         count: prevState.count+1
//       }

//     })
//   }
//   handleMinusOne(){
//     this.setState((prevState)=>{
//       return {
//         count: prevState.count-1
//       }

//     })
//   }
//   handleReset(){
//     this.setState(()=>{
//       return {
//         count: 0 
//       }

//     })
//   }
//   render(){
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.handleAddOne}>+1</button>
//         <button onClick={this.handleMinusOne}>-1</button>
//         <button onClick={this.handleReset}>Reset</button>
//       </div>
//     )
//   }
// }
// class Details extends React.Component{
//   render(){
//     return(
//       <div><p>Hey, These are some details you can now see!</p></div>
//     )
//   }
// }
// class Visibiility extends React.Component{
//   constructor(props){
//     super(props);
//     this.toggleVisibility = this.toggleVisibility.bind(this)
//     this.state = {
//         visibility : false
//     }
//   }
//   toggleVisibility(){
//     this.setState((prevState)=>{
//         return{
//           visibility: !prevState.visibility
//         }
//     })
//   }
//   render(){
//     return (
//       <div>
//       <h1>Visibiility</h1>
//       <button onClick={this.toggleVisibility}>{this.state.visibility ? 'Hide details':'Show details'}</button>
//       {this.state.visibility && (<Details/>)}
//       </div>
//     )
//   }
// }

function App() {
  return (<IndecisionApp/>)
}

export default App;

