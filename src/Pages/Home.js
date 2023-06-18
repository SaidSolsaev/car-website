import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Form, Button} from 'react-bootstrap'
import XMLParser from "react-xml-parser";

export default function Home() {
    const [reg, setReg] = useState("")
    const [car, setCar] = useState([])

    // const fetch = require('node-fetch');

    const url = `https://www.regcheck.org.uk/api/reg.asmx/CheckNorway?RegistrationNumber=${reg}&username=saidsolsaev`;

    const options = {
        method: 'GET',
        headers: {
            
        }
    };

    const getCar = () =>{
    
        fetch(url, options)
            .then(res => res.text())
            .then(data => {
                var xml = new XMLParser().parseFromString(data);
                console.log(xml)
            })
            .catch(err => console.error('error:' + err));
            console.log(car)
    }


    // useEffect(() => {
    //     getCar()
    // }, [])

    return (
        <Container>
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="Reg. nr" value={reg} onChange={(e) => setReg(e.target.value)}/>
                </Form.Group>
                <Button onClick={getCar}>Søk</Button>
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