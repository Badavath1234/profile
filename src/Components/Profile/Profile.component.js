import React from "react";

import '../Profile/Profile.css';
import Pic from '../../Assets/Elon.jpg';


import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Typography } from "@mui/material";

function Profile() {
    return (
        <div className="Main-Container">

            <Container className="Left-Container">
                <Typography className="img-container">
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={Pic} className="Image" roundedCircle />
                        </Col>
                    </Row>
                    <Typography sx={{ textAlign: 'center', width: '300px' }}>
                        <h4 className="text-left">ELON MUSK</h4>
                        <h6>COURSE:MERN</h6>
                        <h6>BATCH ID:2023</h6>
                        <h6>STUDENT ID:2023123</h6>
                    </Typography>

                </Typography>

                <div className="table-Container">
                    <h2 className="right-text">ATTENDANCE SUMMARY</h2>
                    <table className="table table-striped table-hover">

                        <tbody>
                            <tr>
                                <td>Total Days</td>
                                <td>140</td>
                            </tr>

                            <tr>
                                <td>Working Days</td>
                                <td>140</td>
                            </tr>
                            <tr>
                                <td>Absents</td>
                                <td>140</td>
                            </tr>
                            <tr>
                                <td>Days Attended</td>
                                <td>140</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </Container>
            <div className="attendance-container">
                <h2 className="attendance-details">ATTENDANCE DETAILS</h2>
            </div>
            <div>
                <table className="table table-hover">
                    <thead>
                        <th>S.NO</th>
                        <th>Date</th>
                        <th>Day Type</th>
                        <th>Check In</th>
                        <th>Check Out</th>
                        <th>Time Spent</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td>sun,26-Aug-2023</td>
                            <td>ClassLab</td>
                            <td>10:00Am</td>
                            <td>6:00Pm</td>
                            <td>8Hrs</td>
                        </tr>

                        <tr>
                            <td>02</td>
                            <td>sun,26-Aug-2023</td>
                            <td>Lab</td>
                            <td>10:00Am</td>
                            <td>6:00Pm</td>
                            <td>8Hrs</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
};
export default Profile;