import React from 'react'
import Badge from 'react-bootstrap/Badge'


const LanguageBadge = ({ language }) => {
    return (
      <Badge pill bg="secondary" className="m-1">
        {language}
      </Badge>
    );
  };

  export default LanguageBadge;