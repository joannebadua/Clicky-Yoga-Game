import React from 'react';
import logo from './logo.svg';
import './App.css';
import pic1 from './pic-1.png';
import pic2 from './pic-2.png';
import pic3 from './pic-3.png';


class App extends React.Component {
  state = {
    picArray: [
      {
        id: 1,
        pic: pic1
      },
      {
        id: 2,
        pic: pic2
      },
      {
        id: 3,
        pic: pic3
      }
    ]
  }
  handleClickPick = () => {
    console.log("you got clicked")
  }

  render(){
    //secret spot to console log
    var self = this
    console.log("see what's printing", this.state)
  return (
    <div className="App">
      

<div>
{
  this.state.picArray.map(function(singleDude){
    //will give html here
    return(
      <img onClick = {self.handleClickPick} src={singleDude.pic} />
      
    )
  })
}

</div>

    </div>
  );
}
}

export default App;
