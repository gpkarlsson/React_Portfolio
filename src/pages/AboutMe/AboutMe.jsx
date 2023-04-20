import React from "react";
import { Card } from "react-bootstrap";
// import Image from '../../assets/portfoliopic.jpg'

export default function AboutMe() {
    return (
        <div>
        <Card className="MAIN_CARD" style={{ width: '18rem', display: 'flex', justifyContent: 'center'  }}>
           {/* <Card.Img as={Image} variant="top" src="../../assets/portfoliopic.jpg" /> */}
           <Card.Body>
             <Card.Title>About Me ? Prob needs to be in the middle, huh?</Card.Title>
             <Card.Text>
              
             </Card.Text>
             {/* <Button variant="primary">Go somewhere</Button> */}
           </Card.Body>
         </Card>
         
       </div>
    );
}