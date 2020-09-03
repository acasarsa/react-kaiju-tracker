import React from 'react'
import * as requests from './requests'

class EditKaijuForm extends React.Component {

  state = {
    id: '',
    name: '',
    power: '',
    image: '',
  }

  componentDidMount() {
    const {id, name, power, image} = this.props
    this.setState({id, name, power, image})

    // this takes in the props that come from kaijus: [] iteration in container 
    // and assigns each state here to those props from the json.  
  }
  
  

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    //// this sets the states based on what the input is
  }


  handleEditSubmit = (e) => {
    e.preventDefault()

    const {id, name, power, image} = this.state
    const data = {id, name, power, image} 
    // const catchError = error => {console.log(`%c${error}`, 'color: red;' )}

    requests.patchKaiju(id, data)
    .then(this.props.getKaijus, this.props.toggleEditForm())

  }

  

  


  



  render() {

    const {name, power, image} = this.state
    // becomes = props
    return (
      <>
        <form className='kaiju-card-edit-form' onSubmit={this.handleChange}>

          <label>Name: </label>
          <input type='text' value={name} name='name' onChange={ this.handleChange} />
          {/* value becomes this.props.name and props.handleChange etc */}
          <br/>

          <label>Power: </label>
          <input type='text' value={power} name="power" onChange={this.handleChange} />
          <br/>

          <label>Image URL: </label>
          <input type='text' value={image} name="image" onChange={this.handleChange}/>
          <br/>

          <input  type="submit" value="Save Changes" />

        </form>
      </>
    )
  }
}

export default EditKaijuForm
