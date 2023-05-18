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
                        title="MERN Marketplace"
                        subtitle="Full Stack MERN App"
                        description="A marketplace that allows users to list their own items for sale, and purchase items from other users."
                        link1="https://github.com/gpkarlsson/E_Commerce_Placeholder"
                        link2="https://pacific-dawn-34240.herokuapp.com/"
                        tech="React.js, Vite.js, MongoDB, Mongoose, Apollo GraphQL, Node.js, Express.js, NPM, ChakraUI"
                    />
                </Col>
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="Cards & Cartridges"
                        subtitle="Front End App"
                        description="Information about Pokemon games and TCG cards."
                        link1="https://github.com/gpkarlsson/Pokemon-Cards-and-Games-Info-App"
                        link2="https://gpkarlsson.github.io/Pokemon-Cards-and-Games-Info-App/"
                        tech="Bulma, JavaScript, PokeAPI, Pokemon TCG Developers API, Fetch API"
                    />
                </Col>
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="ReadMe Generator"
                        subtitle="Command Line App"
                        description="Generate a professional ReadMe easily using the Inquirer Package and Node.js."
                        link1="https://github.com/gpkarlsson/Node.js-ReadMe-Generator"
                        link2="#"
                        tech="JavaScript, Node.js, Inquirer, NPM, Template Literals"
                    />
                </Col>
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="React Portfolio"
                        subtitle="Front End App"
                        description="This very portfolio you are looking at!"
                        link1="https://github.com/gpkarlsson/React_Portfolio"
                        link2="https://gpkarlsson.github.io/React_Portfolio/"
                        tech="Create-React-App, React.js, React Bootstrap, Node.js, NPM"
                    />
                </Col>
            
            {/* <Row className="justify-content-center justify-content-md-between mb-5"> */}
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="Note Taker"
                        subtitle="Express.js CRUD Application"
                        description="Create and store user defined notes."
                        link1="https://github.com/gpkarlsson/Note-Taker-CRUD-App"
                        link2="https://note-taker-crud.herokuapp.com/notes"
                        tech="JavaScript, Express.js, NPM, Node.js, HTML, CSS"
                    />
                </Col>
               
                <Col md={4} className="mb-4 mt-4">
                    <Project
                        title="Work Day Scheduler"
                        subtitle="Front End App"
                        description="A simple calendar application that allows a user to save events for each hour of the day."
                        link1="https://github.com/gpkarlsson/Challenge05-Work-Day-Scheduler"
                        link2="https://gpkarlsson.github.io/Challenge05-Work-Day-Scheduler/"
                        tech="HTML, CSS, JavaScript, Day.js, Local Storage"
                    />
                </Col>
            </Row>
        </Container>
    );
}