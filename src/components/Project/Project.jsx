import React from 'react'
import Card from 'react-bootstrap/Card';


export default function Project(props) {
    const { title, subtitle, description, link1, link2 } = props;

      return (
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>{description}
            <br />
            <br />

            <Card.Link href={link1}>{link1}</Card.Link>
            <br />
            <br />
            
            <Card.Link href={link2}>{link2}</Card.Link>
          </Card.Body>
        </Card>
      );
    }