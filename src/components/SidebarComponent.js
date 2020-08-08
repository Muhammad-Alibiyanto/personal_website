import React from 'react';
import { Navbar, Image, Nav } from 'react-bootstrap';
import '../styles/sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BsPerson, BsGraphUp, BsFillPieChartFill, BsFileEarmarkText, BsGeoAlt, BsMap, BsFileEarmarkPlus, BsSearch, BsPieChart, BsChat, BsGear } from "react-icons/bs";

class SidebarComponent extends React.Component
{
    constructor() {
        super();
        this.state = {
            actived: ""
        }
    }

    render() {
        this.state.actived = this.props.actived;
        return(
            <Navbar expand="lg" className="App-Sidebar">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav defaultActiveKey="/" className="flex-column App-SidebarNav">
                        <Nav.Link href="/admin/dashboard" className={this.state.actived == 'Dashboard' ? 'Active' : '' }>
                            <BsPerson size="2em"/>
                            DASHBOARD
                        </Nav.Link>
                        <Nav.Link href="/admin/traffic" className={this.state.actived == 'Traffic' ? 'Active' : '' }>
                            <BsGraphUp size="2em"/>
                            TRAFFIC OVERVIEW
                        </Nav.Link>
                        <Nav.Link href="/admin/activities" className={this.state.actived == 'Activity' ? 'Active' : '' }>
                            <BsPieChart size="2em"/>
                            DETAILED ACTIVITY
                        </Nav.Link>
                        <Nav.Link href="/home">
                            <BsFileEarmarkText size="2em"/>
                            CONTENT ANALYSIS
                        </Nav.Link>
                        <Nav.Link href="/home">
                            <BsMap size="2em"/>
                            LOCATION
                        </Nav.Link>
                        <Nav.Link href="/home">
                            <BsFileEarmarkPlus size="2em"/>
                            ADD DOCUMENT
                        </Nav.Link>
                        <Nav.Link href="/home">
                            <BsSearch size="2em"/>
                            EXPLORE QUERIES
                        </Nav.Link>
                        <Nav.Link href="/home">
                            <BsChat size="2em"/>
                            MESSAGE
                        </Nav.Link>
                        <Nav.Link href="/home">
                            <BsGear size="2em"/>
                            ACCOUNT SETTING
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default SidebarComponent;