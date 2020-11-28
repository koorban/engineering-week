import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

export default function AppJumboTron() {
    return (
        <Jumbotron>
            <h1>University Of Caldas Engineering Week!</h1>
            <p>
                A week dedicated to seminars about upcoming technologies, companies, and more!
            </p>
            <p>
                <Button href="www.ucaldas.edu.co" variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    )
}
