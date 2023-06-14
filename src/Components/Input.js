import React from 'react'
import { Form, Button} from 'react-bootstrap'
import styled from 'styled-components'

export default function Input({placeholder}) {
    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder={placeholder} />
                </Form.Group>
                <Button>Søk</Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    width: 25%;
    padding: 20px;
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
`;
