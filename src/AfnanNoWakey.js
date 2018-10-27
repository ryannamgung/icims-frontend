import React, { Component } from 'react';

// export default class AfnanNoWakey extends Component{
//   constructor(props){
//     super(props)
//     this.state = {}
//   }
//
//   render(){
//     return (
//       <div className="afnan-sleepy">
//       <h2>Afnan No Wakey....</h2>
//       <li></li>
//       <img src={require('./photos/austin.jpg')} style={{width: '280px', height: '187.5px'}}/>
//       </div>
//     )
//   }
// }
//

const AfnanNoWakey = (props) => {
    return (
      <div className="afnan-sleepy">
        <h2>Afnan No Wakey....</h2>
        <li>I am currently {props.info.weight} lbs</li>
        <img src={require('./photos/austin.jpg')} style={{width: '280px', height: '187.5px'}}/>
        <img src={require('./photos/austin.jpg')} style={{width: '280px', height: '187.5px'}}/>
        <img src={require('./photos/austin.jpg')} style={{width: '280px', height: '187.5px'}}/>
        <img src={require('./photos/austin.jpg')} style={{width: '280px', height: '187.5px'}}/>
        <img src={require('./photos/austin.jpg')} style={{width: '280px', height: '187.5px'}}/>
        <img src={require('./photos/austin.jpg')} style={{width: '280px', height: '187.5px'}}/>
        <img src={require('./photos/austin.jpg')} style={{width: '280px', height: '187.5px'}}/>
        <img src={require('./photos/austin.jpg')} style={{width: '280px', height: '187.5px'}}/>
      </div>
    )
}

export default AfnanNoWakey
