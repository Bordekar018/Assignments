import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navigation extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/home">
          Product
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/home">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
