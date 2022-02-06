import React, { useState } from 'react';
import { Col, Nav, Navbar, Row, Tab } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import AddFoods from '../AdminPanel/AddFoods/AddFoods';
import ManageUsers from '../AdminPanel/ManageUsers/ManageUsers';
import UserOrders from './UserOrders';





const ClientDashboard = () => {
    const { user } = useAuth();

    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2} xs={1} lg={2} md={2} className="">
                        <div className="text-center">
                            <img src={user?.photoURL} alt="" className="rounded-pill" />
                            <h4 > {user?.displayName} </h4>
                            <p> {user?.email}</p>
                        </div>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first"> Order details  </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"> Add new Food  </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Manage all Orders  </Nav.Link>
                            </Nav.Item>
                        </Nav>

                    </Col>
                    <Col sm={10} md={10} xs={11} lg={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <UserOrders></UserOrders>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <AddFoods></AddFoods>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <ManageUsers></ManageUsers>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
};

export default ClientDashboard;