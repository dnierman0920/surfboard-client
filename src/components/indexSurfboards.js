import React, { useState, useEffect } from 'react'
import { getAllSurfboards } from '../api/surfboard'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const IndexSurfboards = (props) => {
    const { msgAlert} = props
    const [surfboards, setSurfboards] = useState(null)

    useEffect(() => {
        getAllSurfboards()
            .then(res => {
                setSurfboards(res.data.surfboards)
            })
            .then(() =>
                msgAlert({
                    heading: 'Here are the surfboards!',
                    // message: indexPetsSuccess,
                    variant: 'success',
                }))
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    // message: indexPetsFailure,
                    variant: 'danger',
                }))
    }, [])

    if (!surfboards) {
        return <p>loading...</p>
    } else if (surfboards.length === 0) {
        return <p>no surfboards yet, go add some</p>
    }

    let surfboardCards

    if (surfboards.length > 0) {
        surfboardCards = surfboards.map(surfboard => (
            <Card key={surfboard._id} style={{ width: '30%' }} className="m-2">
                <Card.Header>{surfboard.type}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Link to={`/surfboard/${surfboard.id}`}>View {surfboard.name}</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }
    console.log('surfboardCards', surfboardCards)


    return (
        <>
            <h3>All the surfboards</h3>
            <div style={cardContainerLayout}>
                {surfboardCards}
            </div>
        </>
    )



}

export default IndexSurfboards