import React from "react";
import { connect } from "react-redux";
import { Row, Col, Card, CardBody, CardHeader, CardText } from "reactstrap";
import TextRotator from "./TextRotator";
import Miniwidget from "pages/Dashboard/Miniwidget";
import DonutChart from "pages/AllCharts/DonutChart";
import PieChart from "../AllCharts/C3charts/piechart";

import { setBreadcrumbItems } from "../../store/actions";

const UserDashboard = () => {
    const texts = ["Coders", "Charms", "All"];
    const reports = [
        { title: "Companies Applied", iconClass: "cube-outline", total: "46", badgecolor: "info" },
        { title: "Eligible", iconClass: "buffer", total: "56", average: "", badgecolor: "danger" },
        { title: "Companies Placed", iconClass: "tag-text-outline", total: "3", average: "", badgecolor: "warning" },
        { title: "Companies Rejected", iconClass: "briefcase-check", total: "43", average: "", badgecolor: "info" },
    ];
    const data = [
        ["Azure Cloud", 32], ["FSD", 55], ["AWS Cloud", 40], ["Google Cloud", 25]
    ];

    return (
        <React.Fragment>
          <Row>

            <Col lg={4} >
                <Card className="My_division">
                    <CardHeader className="CardHeader">Quote</CardHeader>
                    <CardBody>
                        <blockquote className="card-blockquote mb-0">
                            <CardText className="CardText">
                                Hi  <TextRotator texts={texts} interval={2000} />
                            </CardText>
                            <footer className="blockquote-footer mt-0 mb-0">{" "}
                                Someone famous in{" "}
                                <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                    </CardBody>
                </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
            <Miniwidget reports={reports} />
            </Col>
          </Row>
          <div>
          <h2>Round Wise Status</h2>
            <Row>
              <Col lg={6}>
                <div id="apexchart">
                <div id="online">
                 <h2>Apptitude</h2>
                </div>
                <div className="donutchartt">
                    <DonutChart/>
                </div>
            </div>
              </Col>

              <Col lg={6}>
                <div id="apexchart">
                <div id="online">
                 <h2>Coding</h2>
                </div>
                <div className="donutchartt">
                    <DonutChart/>
                </div>
            </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <div id="apexchart">
                <div id="online">
                 <h2>TR</h2>
                </div>
                <div className="donutchartt">
                    <DonutChart/>
                </div>
            </div>
              </Col>

              <Col lg={6}>
                <div id="apexchart">
                <div id="online">
                 <h2>               HR         </h2>
                </div>
                <div className="donutchartt">
                    <DonutChart/>
                </div>
            </div>
              </Col>
            </Row>
            </div>
            <Row>
              <col>
              </col>
            </Row>
              <Row>
              <div className="Pie_Charts_1">
                    <Card className="m-b-20">
                        <CardBody>
                            <b><h3 className="card-title mb-4">Placement Division Based On The Technology</h3></b>
                            <h5>Tech Division</h5>
                            <div id="pie-chart" dir="ltr">
                             <PieChart Info={data} />
                            </div>
                        </CardBody>
                    </Card>
                </div>
              

              
              <div className="Pie_Charts_1">
                    <Card className="m-b-20">
                        <CardBody>
                            <h4 className="card-title mb-4">Placement Division Based On Programming Language</h4>
                            <h5>Programme Language Division</h5>
                            <div id="pie-chart" dir="ltr">
                                 <PieChart Info={data} />
                            </div>
                        </CardBody>
                    </Card>
                </div>
                </Row>

                
                
        </React.Fragment>
    );
}

export default connect(null, { setBreadcrumbItems })(UserDashboard);