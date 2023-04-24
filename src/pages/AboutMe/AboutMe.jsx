// Dependency Injections
import React from "react";
import { Card } from "react-bootstrap";

// Create and export AboutMe component, which has my personal information and resume
export default function AboutMe() {
  return (
    <div>
      <Card
        className="MAIN_CARD  justify-content-center container-fluid"
        style={{ width: "75%", display: "flex", justifyContent: "center" }}
      >
        <Card.Body>
          <Card.Title>
            Gordon Karlsson is a 29 year old Web Development student originally
            from Madison, Wisconsin that now resides in Milwaukee, Wisconsin. He
            is currently working at Avidity Science as a Software Engineering
            Technician. <br />
            <br /> He is anticipating graduation from the University of
            Wisconsin Full Stack Web Development Bootcamp in May of 2023.
          </Card.Title>
        </Card.Body>
      </Card>

      <Card className="justify-content-center container-fluid mt-5 mb-5" style={{ width: '75%' }}>
        <Card.Body>
          <Card.Title style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold' }}><u>Resume</u></Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>
            12/2022 – PRESENT<br />
            <em><b>SOFTWARE ENGINEERING TECHNICIAN, AVIDITY SCIENCE</b></em><br />
            • Participate in daily scrum meetings and regular sprint planning using Agile methodology.<br />
            • Write and execute manual test cases to ensure the functionality of newly developed software features.<br />
            • Utilize the Rally Application Lifecycle Management (ALM) tool.<br />
            • Develop a fluent understanding of the Software Development Lifecycle (SDLC) process.<br />
            • Collaborate closely with developers using effective interpersonal communication to report findings and identify and resolve issues.<br /><br />
            03/2021 – 12/2022<br />
            <em><b>DISTRIBUTION SERVICES SPECIALIST, PROMEGA CORPORATION</b></em><br />
            • Utilized SAP (ERP - Enterprise Resource Planning) software to manage inventory and product orders from internal company departments.<br />
            • Tracked internal orders for supplies and compile components for kits to be used by other departments to be packaged and delivered to external clients.<br />
            • Managed the preparation of cryogenic shippers to deliver temperature-sensitive materials to clients internationally.<br />
            • Cross-trained to assist the shipping department with sending out final products to clients as needed. 01/2021 – 03/2021<br /><br />
            <em><b>RECEIVING SPECIALIST, PROMEGA CORPORATION</b></em><br />
            • Utilized SAP (ERP - Enterprise Resource Planning) software to manage inventory and product orders from both internal departments and external suppliers.<br />
            • Received material from external suppliers and allocate to the appropriate location within company warehouses.<br />
            • Onboarded as a limited-term employee and quickly offered a permanent position within the logistics department as a Distribution Services Specialist.<br /><br />
            <em><b>EDUCATION</b></em><br />
            MAY 2023 <br />
            <em><b>FULL STACK WEB DEVELOPMENT, UNIVERSITY OF WISCONSIN BOOT CAMPS</b></em><br />
            MAY 2015 <br />
            <em><b>ASSOCIATE OF ARTS: LIBERAL ARTS, MADISON COLLEGE</b></em><br />
          </Card.Text>
          {/* <Card.Link style={{ display: 'flex', justifyContent: 'center' }} href="../../assets/Gordon_Karlsson_Resume_2023.pdf">Resume</Card.Link> */}
        </Card.Body>
      </Card>
    </div>
  );
}
