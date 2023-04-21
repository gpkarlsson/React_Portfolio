import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap';

export default function Landing() {

    return (
        <div  style={{ width: '25rem', display: 'flex', justifyContent: 'center', boxShadow: ' 5px 5px 5px gray', margin: 'auto', color: 'white'}}>
            <Card className="bg-dark">
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
