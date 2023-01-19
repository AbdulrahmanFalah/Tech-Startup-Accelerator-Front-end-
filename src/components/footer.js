import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="copy-right">Housen © 2020</div>
      <div className="footer-list">
        <ul>
          <a href="" className="footer-link">
            About
          </a>
          <a href="" className="footer-link">
            FAQ
          </a>
          <a href="" className="footer-link">
            Terms & Conditions
          </a>
          <a href="" className="footer-link">
            Privacy Policy
          </a>
        </ul>
      </div>
    </div>
  );
}
