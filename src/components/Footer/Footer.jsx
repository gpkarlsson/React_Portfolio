// Dependency Injections

import React from "react";
 
export default function Footer() {
  return (
    <footer className="page-footer fixed-bottom bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li className="mx-3">
                <a href="https://github.com/gpkarlsson" className="text-white text-decoration-none">
                  GitHub
                </a>
              </li>
              <li className="mx-3">
                <a href="https://www.linkedin.com/in/gordon-karlsson" className="text-white text-decoration-none">
                  LinkedIn
                </a>
              </li>
              <li className="mx-3">
                <a href="https://stackoverflow.com/users/21120628/gordon-k" className="text-white text-decoration-none">
                  Stack Overflow
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
    