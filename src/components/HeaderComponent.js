import React from 'react';
import '../styles/header.css';
import { Form, Image } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

class HeaderComponent extends React.Component
{
    constructor() {
        super();
        this.state = {
            actived: ""
        }
    }

    render() {
        return(
            <div className="App-Header">
                <div className="Header-Right Header-Inline">
                    <Form>
                        <Form.Control type="email" />
                        <BsSearch />
                    </Form>
                    <div className="Header-Avatar" style={{ backgroundImage: `url(` + process.env.PUBLIC_URL + `/image/avatar.jpg)`}}></div>
                </div>
            </div>
        )
    }
}

export default HeaderComponent;