import React, { useEffect } from "react"

import { connect } from "react-redux";
import {
    Row,
    Col,
    Card,
    CardBody
} from "reactstrap"
import Miniwidget from "pages/Dashboard/Miniwidget";
import MyChart from "./MyChart"
import CountUp from "react-countup";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import PieChart from "./PieCharts";
const Admindashboard = () => {
    const reports = [
        { title: "Total Placements", iconClass: "cube-outline", total: "3100", badgecolor: "info" },
        { title: "Highest Package", iconClass: "buffer", total: "31.31", average: "", badgecolor: "danger" },
        { title: "Top Recuriters", iconClass: "tag-text-outline", total: "578", average: "", badgecolor: "warning" },
        { title: "Mnc's Visited", iconClass: "briefcase-check", total: "20", average: "", badgecolor: "info" },
    ]
    const data = [
        ["Azure Cloud", 32], ["FSD", 55], ["AWS Cloud", 40], ["Google Cloud", 25]
    ]
    const data1 = [
        ["Python", 32], ["C++", 55], ["Java", 40],
    ]
    

    return (
        <React.Fragment>
            <Miniwidget reports={reports} />
            <div className="Graph_division_1">
                <Card className="Graph_division_2">
                    <CardBody>
                        <h4 className="card-title mb-4">College Wise Analysis</h4>
                        <Row className="text-center mt-4">
                            <Col sm="4">
                                <h5 className="mb-0 font-size-20"><CountUp end={25610} /></h5>
                                <p className="text-muted">AEC</p>
                            </Col>
                            <Col sm="4">
                                <h5 className="mb-0 font-size-20"><CountUp end={56210} /></h5>
                                <p className="text-muted">ACET</p>
                            </Col>
                            <Col sm="4">
                                <h5 className="mb-0 font-size-20"><CountUp end={12485} /></h5>
                                <p className="text-muted">ACOE</p>
                            </Col>
                        </Row>
                        <div dir="ltr">
                            <MyChart />
                        </div>
                    </CardBody>
                </Card>

            </div>
            <div className="Pie_Charts">
                <div className="Pie_Charts_1">
                    <Card className="m-b-20">
                        <CardBody>

                            <b><h3 className="card-title mb-4">Placement Division Based On The Technology</h3></b>
                            <h5>Tech Division</h5>

                            {/* <div className="row text-center mt-4">
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">86541</h5>
                                    <p className="text-muted">Activated</p>
                                </div>
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">2541</h5>
                                    <p className="text-muted">Pending</p>
                                </div>
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">102030</h5>
                                    <p className="text-muted">Deactivated</p>
                                </div>
                            </div> */}

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


                            {/* <div className="row text-center mt-4">
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">86541</h5>
                                    <p className="text-muted">Activated</p>
                                </div>
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">2541</h5>
                                    <p className="text-muted">Pending</p>
                                </div>
                                <div className="col-sm-4">
                                    <h5 className="mb-0 font-size-20">102030</h5>
                                    <p className="text-muted">Deactivated</p>
                                </div>
                            </div> */}

                            <div id="pie-chart" dir="ltr">
                                <PieChart Info={data1} />
                            </div>

                        </CardBody>
                    </Card>
                </div>

            </div>







        </React.Fragment>
    )
}

export default connect(null, { setBreadcrumbItems })(Admindashboard);