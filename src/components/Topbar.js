import React, { Component} from 'react';
import logo from '../logo.svg';
import { Navbar,FormControl,Form,Nav, NavDropdown } from 'react-bootstrap';

export default class Topbar extends Component{
render(){
    return (
        <Navbar bg="dark" variant="dark" className="App-navbar justify-content-between">
    <Navbar.Brand href="#">
      <img
        alt=""
        src={logo}
        width="35"
        height="35"
        className="d-inline-block align-top"
      />
      {' Star Wars movie app'}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" activeKey="episode" onSelect={s => this.props.handleSort(s)}>
      <NavDropdown title="Sort by" id="basic-nav-dropdown">
        <NavDropdown.Item eventKey ="episode_id">Episode</NavDropdown.Item>
        <NavDropdown.Item eventKey ="release_date">Year</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.props.searchBy} onChange={this.props.handleSearch} />
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
}
}