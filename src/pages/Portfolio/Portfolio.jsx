import React from "react";
import Project from '../../components/Project/Project'
import { Container, Row, Col } from 'react-bootstrap';

export default function Portfolio() {
    return (
        <Container >
            <Row className="justify-content-center justify-content-md-between mb-5">
                <Col md={4} className="mb-4">
                    <Project
                        title="Cards & Cartridges"
                        subtitle="Front End App"
                        description="An application made to provide information about Pokemon games as well as display the cards in certain Pokemon card sets."
                        link1="https://github.com/gpkarlsson/Pokemon-Cards-and-Games-Info-App"
                        tech="Bulma, CSS, JavaScript, PokeAPI, Pokemon TCG Developers API, Fetch API"
                    />
                </Col>
                <Col md={4} className="mb-4">
                    <Project
                        title="ReadMe Generator"
                        subtitle="Command Line App"
                        description="Using Node.js, generate a professional readme easily"
                        link1="https://github.com/gpkarlsson/Node.js-ReadMe-Generator"
                        tech="JavaScript, Node.js, Inquirer, NPM"
                    />
                </Col>
                <Col md={4} className="mb-4">
                    <Project
                        title="Note Taker"
                        subtitle="Express.js CRUD Application"
                        description="Create and store user defined notes"
                        link1="https://github.com/gpkarlsson/Note-Taker-CRUD-App"
                        tech="HTML, CSS, JavaScript, Express.js, NPM, Node.js"
                    />
                </Col>
            </Row>
            <Row className="justify-content-center justify-content-md-between mb-5">
                <Col md={4} className="mb-4">
                    <Project
                        title="Email Sender"
                        subtitle="Back End App"
                        description="Automated email sender application."
                        link1="https://github.com/gpkarlsson/Willy_Coop_Tofu_Reuben_Bot"
                        tech="JavaScript, Nodemailer, Dotenv, Express.js, node-cron"
                    />
                </Col>
                <Col md={4} className="mb-4">
                    <Project
                        title="Quiz Taker"
                        subtitle="Full Stack App"
                        description="A quiz taking app."
                        link1="https://github.com/gpkarlsson/Custom_Quiz_Creator"
                        tech="JavaScript, CSS, Handlebars.js, Express.js, Node.js, NPM, Nodemon"
                    />
                </Col>
                <Col md={4} className="mb-4">
                    <Project
                        title="React Portfolio"
                        subtitle="Front End App"
                        description="This very portfolio you are looking at!"
                        link1="https://github.com/gpkarlsson/React_Portfolio"
                        tech="React.js, React Bootstrap, CSS, Node.js, NPM"
                    />
                </Col>
            </Row>
        </Container>
    );
}