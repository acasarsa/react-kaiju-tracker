// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {

  state = {
    editForm: false,

  }

  toggleEditForm = () => {
    this.setState({editForm: !this.state.editForm})

    // can just reFetch whole thing
  }


  //  if <editKaijuFrom/>
  // How can we show the edit form conditionally?
  // change className to 'kaiju-card-edit-form' if props.kaiju.id exists else kaiju-card
  render() {

    const { name, power, image} = this.props

    return (
      <div className='kaiju-card' >

        <h2 className='kaiju-card-name'>{name}</h2>
        <h3 className='kaiju-card-power'>Power: {power}</h3>

        <img className='kaiju-card-image' src={image} alt={"Maybe something should go here"} />

        {/* What should this edit button do? */}
        {/* <button onClick={() => this.props.handleEditClick(id, name, power, image)} className='kaiju-card-edit-button'>Edit</button> */}
 
        <button onClick={this.toggleEditForm} className='kaiju-card-edit-button'>Edit</button>

        {this.state.editForm ? <EditKaijuForm {...this.props} toggleEditForm={this.toggleEditForm} getKaijus={this.props.getKaijus}/> : null}

      

      </div>
    )
  }
}

export default KaijuCard
