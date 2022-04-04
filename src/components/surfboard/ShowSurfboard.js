import { Container, Button } from "react-bootstrap";
import { getSurfboard, deleteSurfboard } from "../../api/surfboard";
import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'



const ShowSurfboard = (props) => {
   const [surfboard, setSurfboard] = useState(null)
   const { id } = useParams() 
   const {user, msgAlert} = props
   const navigate = useNavigate()

   const removeTheSurfboard= () => {
    deleteSurfboard(user, id)
        .then(() => {navigate(`/`)})
        .catch((next) => {
        })
    }

   useEffect(()=> {
        getSurfboard(id)
        .then( res => {setSurfboard(res.data.surfboard)})
        //.then(surfboard => console.log(surfboard))
        .catch(error => console.log('Error: ', error))
   },[id])

    console.log('SURFBOARD', surfboard)
   if(!surfboard){
       return(
           <h2>Loading...</h2>
       )
   }
   return(
       <>
            {surfboard.type}
            { <Container className="fluid">
                <Card>
                <Card.Header>{surfboard.type}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small>type: {surfboard.type}</small><br/>
                            <small>height: {surfboard.height}</small><br/>
                            <small>width: {surfboard.width}</small><br/>
                            <small>fins: {surfboard.fins}</small><br/>

                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => removeTheSurfboard()}className="m-2" variant="danger">
                            Delete Surfboard
                        </Button>
                    </Card.Footer>
                </Card>
            </Container> }
       </>
   )
}

export default ShowSurfboard