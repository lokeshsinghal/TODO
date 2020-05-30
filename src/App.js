import React from 'react';
import './App.css';
import Items from './Items'
import logo from './todo.png';
class App extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.progressMeter = this.progressMeter.bind(this);
    this.state = {
      item:[],
      currentItem:{
        text: "",
        key:"",
        color:"",
      },
    }
  }
  
  handleChange=(e)=>{
    e.preventDefault();
    const newitems = this.state.currentItem;
    console.log('new',newitems);
    if(newitems.text!=="")
    {
      const newItem = [...this.state.item,newitems];
      this.setState({
        item:newItem,
        currentItem:{
          text:'',
          key:'',
          color:'',
        }
      });
    }
  }

  onChange=(e)=>{
    this.setState({
      currentItem:{
        text : e.target.value,
        key : Date.now(),
        color:'#222354'
      }
    })
  }

  deleteItem=(key)=>{
    const {item} = this.state;
    const filtered = item.filter(items=> items.key!==key)
    this.setState({
     item:filtered,
     })
  }

  progressMeter=(per,key)=>{
    const item = this.state.item;
    item.map((item) =>{
      if(item.key===key){
        item.color=per;
      }
    })
    this.setState({
      item : item
    })
}
  render(){
    const {item,currentItem} = this.state;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" width="150px" style={{paddingBottom:"50px"}}/>
        <form id="todoform" onSubmit={this.handleChange}>
          <input 
            type="text"
            placeholder = "Enter Item Here"
            value = {currentItem.text}
            onChange = {this.onChange}
            className="input-ratio"
          />
          <button type="submit" className="button-ratio">Add</button>
        </form>
        <Items 
          item = {item}
          deleteItem = {this.deleteItem}
          progressMeter = {this.progressMeter}
        />
      </header>
    </div>
  );
}
}

export default App;
