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
                         I am currently seeking a position as a Front End Web Developer.
                    </Card.Text>
                </Card.Body>
            </Card>
            
            <Card style={{
                display: 'flex',
                width: '50rem', 
                boxShadow: '5px 5px 5px gray',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Card.Body>
                    <Card.Title>My Bio</Card.Title>
                    <Card.Text>
                    Reflecting on the past six months, my experience in the University of Wisconsin Full-Stack Web Development bootcamp has been a transformative journey that equipped me with a plethora of skills.<br /><br />

In the initial Foundation phase, I built a strong base in the essentials of web development such as HTML, CSS, JavaScript, and Git, which were instrumental in developing my first front-end project. The intricacies of working with APIs really sparked my interest and pushed me to explore them more.

<br /><br />The subsequent Technical phase was a deep dive into the realm of back-end technologies. Grasping Node.js, Express.js servers, and MySQL was initially challenging but rewarding. The real game-changer was understanding the Agile methodology, which refined my approach to project management and software development.

<br /><br />Finally, the Performance phase was the pinnacle of the course. It introduced me to key optimization strategies and computer science principles. I ventured into the world of MongoDB, NoSQL, and React, which further broadened my skillset. One of the most beneficial aspects of this phase was creating a comprehensive portfolio that showcased my learnings.

<br /><br />All in all, the bootcamp was a rigorous yet enlightening experience that consolidated my skills and spurred my transition into full-stack web development.





                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}