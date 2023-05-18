import React from 'react';
import Card from 'react-bootstrap/Card';

//Create and export the Landing component, which is the landing page of the app
export default function Landing() {

    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '5rem', // provide some space between the two cards
            alignItems: 'center',
            
        }}>
            <Card style={{ 
                width: '25rem', 
                boxShadow: '5px 5px 5px gray',
            }}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/portfoliopic.jpg'} />
                <Card.Body>
                    <Card.Title>Gordon Karlsson</Card.Title>
                    <Card.Text>
                       Welcome to my portfolio!
                         I am currently seeking a position as a full stack web developer.
                    </Card.Text>
                </Card.Body>
            </Card>
            
            <Card style={{ 
                width: '25rem', 
                boxShadow: '5px 5px 5px gray',
            }}>
                <Card.Body>
                    <Card.Title>My Bio</Card.Title>
                    <Card.Text>
                       Here is some information about me. This is where I would put my biography or other pertinent information.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}