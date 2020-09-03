//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// import EditKaijuForm from './EditKaijuForm'
// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: []
    // isCardState: true
  }

  componentDidMount(){
    this.getKaijus()
  }


  getKaijus = () => {
    requests.fetchKaijus()
    .then(data => this.setState({ kaijus: data }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let {name, type, image, power} = this.state
    let newObj = {name, type, image, power}
    
    fetch('http://localhost:3000/endpoint', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newObj),
    })
  
  



// handleSubmit = (e) => {
//     e.preventDefault()
//   let { state1, state2, state3, state4 } = this.state

//   let newObj = { state1, state2, state3, state4 }

//   let options = {
//     method: id ? 'PATCH' : 'POST', //delete if just using for one
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json'
//     },
//     body: JSON.stringify(newObj)
//   }

//   fetch(${url})
//   .then(r => r.json())
//   .then( toy => {
//     this.setState({
//       toys: [...this.state.toys, toy], id: null, name: '' etc etc 
//     })
//   })
// }
// // updatedToy is the whole toy even if u only patched in a single attribute 

//   fetch(${url}/${id})
//   .then(r => r.json())
//   .then( updatedToy => {
//     let newToy = this.state.toys.map(toy => {
//       return toy.id === id ? updatedToy : toy
//     })
//     this.setState({
//       toys: newToy
//     })
//   })


//   .then( updatedToy => {
//     this.setState({
//       toys: this.state.toys.map(toy => toy.id === id ? updatedToy : toy)
//     })
//   })

// map through the current data array and check if id passed in is === an id in the db and if it is === then return the updated Version 
// if it's not return the iterated item unchanged
// need to save the return of the mapping then you can set that to the old array replacing it
handleSubmit = (e) => {
  e.preventDefault()
  let {stateAtt0, stateAtt1, stateAtt2} = this.state
  let newObj = {stateAtt0, stateAtt1, stateAtt2}
  
  fetch('http://localhost:3000/endpoint', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(newObj),
  })
  .then(r => r.json())
  .then( item => {
    this.setState({array: [...this.state.array, item], id: null, stateAtt0: '', stateAtt1: '', stateAtt2: '' })
  })
}


handleEditPatch = (id) => {

  let { state1, state2, state3, state4 } = this.state

  let newObj = { state1, state2, state3, state4 }

  let options = {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(newObj)
  }

  fetch(`http://localhost:3000/endpoint/id`, options )
    .then(r => r.json())
    .then(updatedObject => {
      let newObject = this.state.array.map(${item} => {
        return item.id === id ? updatedObject : item
      })
      this.setState({ array: newObject, id: null, state1: '', state2: '', state3: '', state4: '' })
    })
}





  render() {
    
    return (
      <>

        <CreateKaijuForm  getKaijus={this.getKaijus} />

        <div id='kaiju-container'>
          

          {this.state.kaijus.map(kaiju => <KaijuCard key={kaiju.id} {...kaiju} getKaijus={this.getKaijus} />)}

          {/* {this.state.isCardState && this.state.kaijus.map(kaiju => <KaijuCard key={kaiju.id} {...kaiju} handleEditClick={this.editKaiju} {...this.state} />)}

          {this.state.isEditState && <EditKaijuForm handleChange={this.handleChange} {...this.state}/>} */}
          
        
        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer
