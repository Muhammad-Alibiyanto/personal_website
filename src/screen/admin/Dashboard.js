import React from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image, Tabs, Tab } from 'react-bootstrap';
import SidebarComponent from '../../components/SidebarComponent';
import '../../styles/global.css';
import HeaderComponent from '../../components/HeaderComponent';
import '../../styles/tabs.css';
import { BsGear } from 'react-icons/bs';
import ChartComponent from '../../components/ChartComponent';

class AdminDashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 0
        };
    }

    handleChangeTab = (key) => {
        this.setState({ selectedTab: key })
    }

    render() {
        return(
            <Container fluid style={{ padding: 0 }} className="App-Container">
                <Row noGutters>
                    <Col xs={12} sm={12} md={2} lg={2}>
                        <SidebarComponent actived="Dashboard" />
                    </Col>
                    <Col xs={12} sm={12} md={10} lg={10}>
                        <HeaderComponent />
                        <div className="App-Content">
                            <div className="Header-Content">
                                <div>
                                    <h5 className="Page-Title">Dashboard</h5>
                                    <Tabs className="App-TabLink" activeKey={this.state.selectedTab} onSelect={(k) => this.handleChangeTab(k)}>
                                        <Tab eventKey="0" title="Hourly"></Tab>
                                        <Tab eventKey="1" title="Daily"></Tab>
                                        <Tab eventKey="2" title="Weekly"></Tab>
                                        <Tab eventKey="3" title="Monthly"></Tab>
                                    </Tabs>
                                </div>
                                <BsGear />
                            </div>
                            <div className="Body-Content">
                                {this.state.selectedTab == 0 ?
                                    <ChartComponent />
                                :
                                this.state.selectedTab == 1 ?
                                    <p>Daily</p>
                                :
                                this.state.selectedTab == 2 ?
                                    <p>Weekly</p>
                                :
                                    <p>Monthly</p>
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AdminDashboard;