import { Container } from "react-bootstrap";
import { getSurfboard } from "../../api/surfboard";
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const ShowSurfboard = () => {
   const [surfboard, setSurfboard] = useState(null)
   const { id } = useParams() // this is not pulling the id for some reason

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
                </Card>
            </Container> }
       </>
   )
}

export default ShowSurfboard