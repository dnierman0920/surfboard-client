import React, { useState } from 'react'
import { createSurfboard } from '../../api/surfboard'
import { useNavigate } from 'react-router-dom'
import SurfboardForm from '../shared/SurfboardForm'

// create surfboard renders a form and calls createSurfboard function
// maybe redirect(navigate) to the new pet show page
// props we'll need are user, msgAlert
const CreateSurfboard = (props) => {
    const {user, msgAlert} = props
    console.log('user in create', user)
    const navigate = useNavigate()
    // we'll need two states
    const [surfboard, setSurfboard] = useState({type: '', height: '', width: '', fins: ''})
    console.log('surfboard in create', surfboard)
    //  an empty surfboard object
    // and a createdId (used to navigate)
    // we'll need handleChange and handleSubmit funcs
    const handleChange = (e) => {
        // e === event
        e.persist()

        setSurfboard(prevSurfboardValue => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.type)
            if (e.target.type === 'width' || e.target.type === 'height' ) {
                value = parseInt(e.target.value)
            }
            const updatedValue = { [name]: value }
            console.log('prevSurfboard', prevSurfboardValue)
            console.log('updatedValue', updatedValue)

            return {...prevSurfboardValue, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        createSurfboard(user, surfboard)
            // if create is successful, we should navigate to the show page
            .then(res => {navigate(`/surfboards/${res.data.surfboard._id}`)})
            // then we send a success message
        // console.log('this is the pet', pet)
    }

    return (
        <SurfboardForm 
            surfboard={surfboard}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Add new surfboard!"
        />
    )
}

export default CreateSurfboard