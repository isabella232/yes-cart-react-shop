/*
 * Copyright 2020 Inspire-Software.com
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import Form from "react-bootstrap/Form";
import React from "react";
import {connect} from "react-redux";
import Card from "react-bootstrap/Card";

/**
 * User: Igor Azarny iazarny@yahoo.com
 * Date: 04-Oct-2020
 * Time: 12:10:23
 */
class Email extends React.Component {

    render() {
        return <Card>
            <Card.Header>
                E - Mail
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        {
                            this.props.customerSummary &&
                            <Form.Control
                                value={this.props.customerSummary.email}
                                name="email"
                                type="email"
                                readOnly={true}/>
                        }
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    }
}


function mapStateToProps(state) {
    return {
        customerSummary: state.customerSummary
    };
}


export default connect(mapStateToProps)(Email);


