import React from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import SidebarComponent from '../../components/SidebarComponent';
import HeaderComponent from '../../components/HeaderComponent';

class TrafficOverview extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <Container fluid style={{ padding: 0 }}>
                <Row noGutters>
                    <Col xs={12} sm={12} md={2} lg={2}>
                        <SidebarComponent actived="Traffic" />
                    </Col>
                    <Col xs={12} sm={12} md={10} lg={10}>
                        <HeaderComponent />
                        <div className="App-Content">
                            HELLO TRAFFIC
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default TrafficOverview;