import React , {useEffect} from "react"

import { connect } from "react-redux";
import {
  Row,
  Col,
} from "reactstrap"

// Pages Components
import Miniwidget from "./Miniwidget"
import MonthlyEarnings from "./montly-earnings";
import MonthlyEarnings1 from "./montly-earnings1";
import EmailSent from "./email-sent";
import MonthlyEarnings2 from "./montly-earnings2";
import Inbox from "./inbox";
import RecentActivity from "./recent-activity";
import WidgetUser from "./widget-user";
import YearlySales from "./yearly-sales";
import LatestTransactions from "./latest-transactions";
import LatestOrders from "./latest-orders";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";

const Dashboard = (props) => {

  document.title = "Dashboard | Lexa - Responsive Bootstrap 5 Admin Dashboard";


  const breadcrumbItems = [
    { title: "Lexa", link: "#" },
    { title: "Dashboard", link: "#" }
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Dashboard' , breadcrumbItems)
  },)

  const reports = [
    { title: "ELIGIBLE", iconClass: "cube-outline", total: "75",badgecolor: "info" },
    { title: "APPLIED", iconClass: "buffer", total: "39", average: "", badgecolor: "danger" },
    { title: "PLACED", iconClass: "tag-text-outline", total: "19", average: "", badgecolor: "warning" },
    { title: "REJECTED", iconClass: "briefcase-check", total: "0", average: "", badgecolor: "info" },
  ]

  return (
    <React.Fragment>

      {/*mimi widgets */}
      {/* <Miniwidget reports={reports} /> */}

      <Row>
        <Col xl="3">
          {/* Monthly Earnings */}
          <MonthlyEarnings />
        </Col>

        <Col xl="6">
          {/* Email sent */}
          <MonthlyEarnings1 />
        </Col>

        <Col xl="3">
          <MonthlyEarnings />
        </Col>

      </Row>
      <Row>

        <Col xl="4" lg="6">
          {/* inbox */}
          <Inbox />
        </Col>
        <Col xl="4" lg="6">
          {/* recent activity */}
          <RecentActivity />

        </Col>
        <Col xl="4">
          {/* widget user */}
          <WidgetUser />

          {/* yearly sales */}
          <YearlySales />
        </Col>
      </Row>

      <Row>
        <Col xl="6">
          {/* latest transactions */}
          <LatestTransactions />
        </Col>

        <Col xl="6">
          {/* latest orders */}
          <LatestOrders />
        </Col>
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(Dashboard);