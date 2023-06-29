import React from 'react'
import Badge from 'react-bootstrap/Badge'


const LanguageBadge = ({ language }) => {
    return (
      <Badge pill bg="secondary" className="m-1">
        <img
        src={logo}
        alt={`${language} logo`}
        style={{ height: '20px', marginRight: '5px'}}
        />
        {language}
      </Badge>
    );
  };

  export default LanguageBadge;