import { Form, Button } from 'react-bootstrap'

const SurfboardForm  = (props) => {
    const {surfboard, handleChange, handleSubmit} = props
return(
    <Form onSubmit={handleSubmit}>
                <Form.Label>Type</Form.Label>
                <Form.Control 
                    placeholder="surfboard type"
                    value={surfboard.type}
                    type = 'string'
                    name='type'
                    onChange={handleChange}
                />
                <Form.Label>Height</Form.Label>
                <Form.Control 
                    placeholder="Height in inches"
                    value={surfboard.height}
                    type = 'number'
                    name='height'
                    onChange={handleChange}
                />
                <Form.Label>Width</Form.Label>
                <Form.Control 
                    placeholder="Width in inches"
                    value={surfboard.width}
                    type="number"
                    name='width'
                    onChange={handleChange}
                />
                <Form.Label>Fins</Form.Label>
                <Form.Control 
                    placeholder="Fin Setup"
                    value={surfboard.fins}
                    type="string"
                    name='fins'
                    onChange={handleChange}
                />

                <Button type='submit'>Submit</Button>
            </Form>  
    )
}

export default SurfboardForm