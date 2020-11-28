import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export default function CompanyCard({ name, address, contact, website, description, products, image }) {
    return (
        <Card style={{ width: '36rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Phone: {contact}</Card.Subtitle>
            <Card.Subtitle className="mb-4 text-muted">Address: {address}</Card.Subtitle>
            <Card.Text>
                {description}
            </Card.Text>
            <ListGroup style={{marginBottom: '0.5em'}}>
                <ListGroup.Item>Known For: {products}</ListGroup.Item>
            </ListGroup>
            <Button href={website} variant="info" block>Visit Site</Button>
            </Card.Body>
        </Card>
    )
}
