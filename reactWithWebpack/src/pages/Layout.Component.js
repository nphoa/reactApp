import React, { Component } from 'react';
import '../public/css/bar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/style.css';
import '../public/css/style4.css';
import '../public/css/fontawesome-all.css';
import '../public/js/script.js';
import 'bootstrap/dist/js/bootstrap.min.js';

$(document).ready(function () {
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });

  $(".dropdown").hover(
    function () {
      $('.dropdown-menu', this).stop(true, true).slideDown("fast");
      $(this).toggleClass('open');
    },
    function () {
      $('.dropdown-menu', this).stop(true, true).slideUp("fast");
      $(this).toggleClass('open');
    }

  );

  $(window).load(function () {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
  });

});
class LayoutComponent extends Component {
  render() {
    console.log('hoa4222222333');
    return (
      <div>

        <div className="wrapper">
          {/* Sidebar Holder */}
          <nav id="sidebar">
            <div className="sidebar-header">
              <h1>
                <a href="index.html">Modernize</a>
              </h1>
              <span>M</span>
            </div>
            <div className="profile-bg" />
            <ul className="list-unstyled components">
              <li className="active">
                <a href="index.html">
                  <i className="fas fa-th-large" />
                  Dashboard
                    </a>
              </li>
              <li>
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                  <i className="fas fa-laptop" />
                  Components
                      <i className="fas fa-angle-down fa-pull-right" />
                </a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <a href="cards.html">Cards</a>
                  </li>
                  <li>
                    <a href="carousels.html">Carousels</a>
                  </li>
                  <li>
                    <a href="forms.html">Forms</a>
                  </li>
                  <li>
                    <a href="modals.html">Modals</a>
                  </li>
                  <li>
                    <a href="tables.html">Tables</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="charts.html">
                  <i className="fas fa-chart-pie" />
                  Charts
                    </a>
              </li>
              <li>
                <a href="grids.html">
                  <i className="fas fa-th" />
                  Grid Layouts
                    </a>
              </li>
              <li>
                <a href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false">
                  <i className="far fa-file" />
                  Pages
                      <i className="fas fa-angle-down fa-pull-right" />
                </a>
                <ul className="collapse list-unstyled" id="pageSubmenu1">
                  <li>
                    <a href="404.html">404</a>
                  </li>
                  <li>
                    <a href="500.html">500</a>
                  </li>
                  <li>
                    <a href="blank.html">Blank</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="mailbox.html">
                  <i className="far fa-envelope" />
                  Mailbox
                      <span className="badge badge-secondary float-md-right bg-danger">5 New</span>
                </a>
              </li>
              <li>
                <a href="widgets.html">
                  <i className="far fa-window-restore" />
                  Widgets
                    </a>
              </li>
              <li>
                <a href="pricing.html">
                  <i className="fas fa-table" />
                  Pricing Tables
                    </a>
              </li>
              <li>
                <a href="#pageSubmenu3" data-toggle="collapse" aria-expanded="false">
                  <i className="fas fa-users" />
                  User
                      <i className="fas fa-angle-down fa-pull-right" />
                </a>
                <ul className="collapse list-unstyled" id="pageSubmenu3">
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="forgot.html">Forgot password</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="maps.html">
                  <i className="far fa-map" />
                  Maps
                    </a>
              </li>
            </ul>
          </nav>
          {/* Page Content Holder */}
          <div id="content">
            {/* top-bar */}
            <nav className="navbar navbar-default mb-xl-5 mb-4">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" id="sidebarCollapse" className="btn btn-info navbar-btn">
                    <i className="fas fa-bars" />
                  </button>
                </div>
                {/* Search-from */}
                <form action="#" method="post" className="form-inline mx-auto search-form">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" required />
                  <button className="btn btn-style my-2 my-sm-0" type="submit">Search</button>
                </form>
                {/*// Search-from */}
                <ul className="top-icons-agileits-w3layouts float-right">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="far fa-bell" />
                      <span className="badge">4</span>
                    </a>
                    <div className="dropdown-menu top-grid-scroll drop-1">
                      <h3 className="sub-title-w3-agileits">User notifications</h3>
                      <a href="#" className="dropdown-item mt-3">
                        <div className="notif-img-agileinfo">
                          <img src="images/clone.jpg" className="img-fluid" alt="Responsive image" />
                        </div>
                        <div className="notif-content-wthree">
                          <p className="paragraph-agileits-w3layouts py-2">
                            <span className="text-diff">John Doe</span> Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                          <h6>4 mins ago</h6>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item mt-3">
                        <div className="notif-img-agileinfo">
                          <img src="images/clone.jpg" className="img-fluid" alt="Responsive image" />
                        </div>
                        <div className="notif-content-wthree">
                          <p className="paragraph-agileits-w3layouts py-2">
                            <span className="text-diff">Diana</span> Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                          <h6>6 mins ago</h6>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item mt-3">
                        <div className="notif-img-agileinfo">
                          <img src="images/clone.jpg" className="img-fluid" alt="Responsive image" />
                        </div>
                        <div className="notif-content-wthree">
                          <p className="paragraph-agileits-w3layouts py-2">
                            <span className="text-diff">Steffie</span> Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                          <h6>12 mins ago</h6>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item mt-3">
                        <div className="notif-img-agileinfo">
                          <img src="images/clone.jpg" className="img-fluid" alt="Responsive image" />
                        </div>
                        <div className="notif-content-wthree">
                          <p className="paragraph-agileits-w3layouts py-2">
                            <span className="text-diff">Jack</span> Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>
                          <h6>1 days ago</h6>
                        </div>
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">view all notifications</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown mx-3">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-spinner" />
                    </a>
                    <div className="dropdown-menu top-grid-scroll drop-2">
                      <h3 className="sub-title-w3-agileits">Shortcuts</h3>
                      <a href="#" className="dropdown-item mt-3">
                        <h4>
                          <i className="fas fa-chart-pie mr-3" />Sed feugiat</h4>
                      </a>
                      <a href="#" className="dropdown-item mt-3">
                        <h4>
                          <i className="fab fa-connectdevelop mr-3" />Aliquam sed</h4>
                      </a>
                      <a href="#" className="dropdown-item mt-3">
                        <h4>
                          <i className="fas fa-tasks mr-3" />Lorem ipsum</h4>
                      </a>
                      <a href="#" className="dropdown-item mt-3">
                        <h4>
                          <i className="fab fa-superpowers mr-3" />Cras rutrum</h4>
                      </a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="far fa-user" />
                    </a>
                    <div className="dropdown-menu drop-3">
                      <div className="profile d-flex mr-o">
                        <div className="profile-l align-self-center">
                          <img src="images/profile.jpg" className="img-fluid mb-3" alt="Responsive image" />
                        </div>
                        <div className="profile-r align-self-center">
                          <h3 className="sub-title-w3-agileits">Will Smith</h3>
                          <a href="mailto:info@example.com">info@example.com</a>
                        </div>
                      </div>
                      <a href="#" className="dropdown-item mt-3">
                        <h4>
                          <i className="far fa-user mr-3" />My Profile</h4>
                      </a>
                      <a href="#" className="dropdown-item mt-3">
                        <h4>
                          <i className="fas fa-link mr-3" />Activity</h4>
                      </a>
                      <a href="#" className="dropdown-item mt-3">
                        <h4>
                          <i className="far fa-envelope mr-3" />Messages</h4>
                      </a>
                      <a href="#" className="dropdown-item mt-3">
                        <h4>
                          <i className="far fa-question-circle mr-3" />Faq</h4>
                      </a>
                      <a href="#" className="dropdown-item mt-3">
                        <h4>
                          <i className="far fa-thumbs-up mr-3" />Support</h4>
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="login.html">Logout</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            {/*// top-bar */}
            <div className="container-fluid">
              <div className="row">
                {/* Stats */}
                <div className="outer-w3-agile col-xl">






                </div>

              </div>
            </div>



            {/* Copyright */}
            <div className="copyright-w3layouts py-xl-3 py-2 mt-xl-5 mt-4 text-center">
              <p>© 2018 Modernize . All Rights Reserved | Design by
                    <a href="http://w3layouts.com/"> W3layouts </a>
              </p>
            </div>
            {/*// Copyright */}
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutComponent;
