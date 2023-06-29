import React from 'react';
import LanguageBadge from './LanguageBadge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LanguageBadges = () => {
  const languages = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Bulma', 'Node.js'];

  return (
    <Row className="justify-content-md-center">
      {languages.map((language, index) => (
        <Col key={index} xs={12} md={1}>
          <LanguageBadge language={language} 
          logo={process.env.PUBLIC_URL + '/assets/logos/' + language + '.png'} 
          />
        </Col>
      ))}
    </Row>
  );
};

export default LanguageBadges;