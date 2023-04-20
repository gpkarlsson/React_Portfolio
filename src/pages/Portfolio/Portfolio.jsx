import React from "react";
import Navigation from '../../components/Navigation/Navigation'
import Project from '../../components/Project/Project'
import { Container, Row, Col } from 'react-bootstrap';

export default function Portfolio() {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Project
                        title="Cards & Cartridges"
                        subtitle="Front End Web App"
                        description="Made using Bulma, PokeApi and Pokemon TCG  Developers Api"
                        link1="https://github.com/gpkarlsson/Pokemon-Cards-and-Games-Info-App"
                       
                    />

                </Col>
                <Col md={4}>
                    <Project
                        title="Professional ReadMe Generator"
                        subtitle="Command Line Application"
                        description="Using Node.js, generate a professional readme easily"
                        link1="https://github.com/gpkarlsson/Node.js-ReadMe-Generator"
                        link2="https://example.com"
                    />

                </Col>
                <Col md={4}>
                    <Project
                        title="Project 3"
                        subtitle="Subtitle 3"
                        description="Description 3"
                        link1="https://example.com"
                        link2="https://example.com"
                    />

                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Project
                        title="Project 4"
                        subtitle="Subtitle 4"
                        description="Description 4"
                        link1="https://example.com"
                        link2="https://example.com"
                    />

                </Col>
                <Col md={4}>
                    <Project
                        title="Project 5"
                        subtitle="Subtitle 5"
                        description="Description 5"
                        link1="https://example.com"
                        link2="https://example.com"
                    />
                </Col>
                <Col md={4}>
                    <Project
                        title="Project 6"
                        subtitle="Subtitle 6"
                        description="Description 6"
                        link1="https://example.com"
                        link2="https://example.com"
                    />
                </Col>
            </Row>
        </Container>
    );

}

// 5-6 projects, include screenshot and clickable link?
//card for each project?
//