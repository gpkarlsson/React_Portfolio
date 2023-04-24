// Dependency Injections
import React from "react";
import Project from "../../components/Project/Project"
import { Container, Row, Col } from "react-bootstrap";

// Create and export main portfolio component, and define the props to be passed into each Project component
export default function Portfolio() {
    return (
        <Container className="justify-content-center">
            <Row className="justify-content-center justify-content-md-between mb-5">
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="Cards & Cartridges"
                        subtitle="Front End App"
                        description="Information about Pokemon games and TCG cards."
                        link1="https://github.com/gpkarlsson/Pokemon-Cards-and-Games-Info-App"
                        tech="Bulma, JavaScript, PokeAPI, Pokemon TCG Developers API, Fetch API"
                    />
                </Col>
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="ReadMe Generator"
                        subtitle="Command Line App"
                        description="Generate a professional readme easily using the Inquirer Package and Node.js."
                        link1="https://github.com/gpkarlsson/Node.js-ReadMe-Generator"
                        tech="JavaScript, Node.js, Inquirer, NPM, Template Literals"
                    />
                </Col>
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="React Portfolio"
                        subtitle="Front End App"
                        description="This very portfolio you are looking at!"
                        link1="https://github.com/gpkarlsson/React_Portfolio"
                        tech="React.js, React Bootstrap, Node.js, NPM"
                    />
                </Col>
            </Row>
            <Row className="justify-content-center justify-content-md-between mb-5">
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="Note Taker"
                        subtitle="Express.js CRUD Application"
                        description="Create and store user defined notes."
                        link1="https://github.com/gpkarlsson/Note-Taker-CRUD-App"
                        tech="JavaScript, Express.js, NPM, Node.js"
                    />
                </Col>
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="Quiz Taker"
                        subtitle="Full Stack App"
                        description="A quiz taking app."
                        link1="https://github.com/gpkarlsson/Custom_Quiz_Creator"
                        tech="JavaScript, Handlebars.js, Express.js, Node.js, NPM, Nodemon"
                    />
                </Col>
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="Email Sender"
                        subtitle="Back End App"
                        description="Automated email sender application."
                        link1="https://github.com/gpkarlsson/Willy_Coop_Tofu_Reuben_Bot"
                        tech="JavaScript, Nodemailer, Dotenv, Express.js, node-cron"
                    />
                </Col>
            </Row>
        </Container>
    );
}