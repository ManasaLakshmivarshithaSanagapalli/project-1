import React from "react"
import { Card, CardBody, Row,  CardTitle } from "reactstrap"
import DonutChart from '../AllCharts/DonutChart';

const MonthlyEarnings1 = props => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <CardTitle className="h4 mb-4">Overview</CardTitle>

                    <Row className="text-center mt-4">
                        <div className="col-6">
                            <p className="text-muted">Apptitude</p>
                        </div>
                        <div className="col-6">
                            <p className="text-muted">Coding</p>
                        </div>
                    </Row>
                    <div dir="ltr">
                        <DonutChart />
                    </div>

                </CardBody>
            </Card>
        </React.Fragment>
    )

}

export default MonthlyEarnings1;
