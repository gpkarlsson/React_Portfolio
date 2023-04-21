import React from "react";
import { Card } from "react-bootstrap";
// import Image from '../../assets/portfoliopic.jpg'

export default function AboutMe() {
    return (
        <div>
        <Card className="MAIN_CARD justify-content-center container-fluid" style={{ width: '18rem', display: 'flex', justifyContent: 'center' }}>
           {/* <Card.Img as={Image} variant="top" src="../../assets/portfoliopic.jpg" /> */}
           <Card.Body>
             <Card.Title>Gordon Karlsson is a 29 year old Web Development student originally from Madison, Wisconsin that now resides in Milwaukee, Wisconsin. He is currently working at Avidity Science as a Software Engineering Technician. <br /><br />  He is anticipating graduation from the University of Wisconsin Full Stack Web Development Bootcamp in May of 2023. </Card.Title>
             <Card.Text>
              
             </Card.Text>
             {/* <Button variant="primary">Go somewhere</Button> */}
           </Card.Body>
         </Card>
         
       </div>
    );
}