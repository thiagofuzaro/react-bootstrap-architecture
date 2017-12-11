import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const formClass = location.pathname === "/" ? "active" : "";
    const modalClass = location.pathname.match(/^\/modal-example/) ? "active" : "";
    const serviceClass = location.pathname.match(/^\/service-example/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={formClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Formulário</IndexLink>
              </li>
              <li class={modalClass}>
                <Link to="modal-example" onClick={this.toggleCollapse.bind(this)}>Modal</Link>
              </li>
              <li class={serviceClass}>
                <Link to="service-example" onClick={this.toggleCollapse.bind(this)}>Serviço</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}