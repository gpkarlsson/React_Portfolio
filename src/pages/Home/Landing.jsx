// Dependency Injections
import React from 'react';
import Card from 'react-bootstrap/Card';

//Create and export the Landing component, which is the landing page of the app
export default function Landing() {

    return (
        <div  style={{ width: '25rem', 
        display: 'flex', 
        justifyContent: 'center', 
        boxShadow: ' 5px 5px 5px gray', 
        margin: 'auto'}}>
            <Card >
                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/portfoliopic.jpg'} />
                <Card.Body>
                    <Card.Title>Gordon Karlsson</Card.Title>
                    <Card.Text>
                       Welcome to my portfolio!
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
