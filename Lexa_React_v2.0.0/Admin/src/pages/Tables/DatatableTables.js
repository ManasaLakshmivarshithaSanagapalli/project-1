// import React,{useEffect} from "react"
// import { MDBDataTable } from "mdbreact"
// import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

// import { connect } from "react-redux";

// //Import Action to copy breadcrumb items from local state to redux state
// import { setBreadcrumbItems } from "../../store/actions";

import "./datatables.scss"

// const DatatableTables = (props) => {
//   document.title = "Data Table | Lexa - Responsive Bootstrap 5 Admin Dashboard";

  
//   const breadcrumbItems = [
//     { title: "Lexa", link: "#" },
//     { title: "Tables", link: "#" },
//     { title: "Data Tables", link: "#" },
//   ]

//   useEffect(() => {
//     props.setBreadcrumbItems('Data Tables', breadcrumbItems)
//   })

//   const data = {
//     columns: [
//       {
//         label: "Roll number",
//         field: "roll number",
//         sort: "asc",
//         width: 150,
//       },
//       {
//         label: "Student name",
//         field: "student name",
//         sort: "asc",
//         width: 270,
//       },
//       {
//         label: "College",
//         field: "college",
//         sort: "asc",
//         width: 200,
//       },
//       {
//         label: "Branch",
//         field: "branch",
//         sort: "asc",
//         width: 100,
//       },
//       {
//       label: "Passout year",
//         field: "passout year",
//         sort: "asc",
//         width: 150,
//       },
//       {
//         label: "SSC percentage",
//           field: "ssc percentage ",
//           sort: "asc",
//           width: 150,
//         },
//         {
//           label: "Inter percentage",
//             field: "inter percentage ",
//             sort: "asc",
//             width: 150,
//           },
//           {
//             label: "Diploma percentage",
//               field: "diploma percentage ",
//               sort: "asc",
//               width: 150,
//             },
//         {
//           label: "Btech_percentage",
//             field: "btech percentage",
//             sort: "asc",
//             width: 150,
//           },
//       {
//         label: "Gender",
//         field: "gender",
//         sort: "asc",
//         width: 150,
//       },
//       {
//         label: "Mobile",
//         field: "mobile",
//         sort: "asc",
//         width: 150,
//       },
//       {
//         label: "Email",
//         field: "email",
//         sort: "asc",
//         width: 150,
//       },
//       {
//         label: "Official_mail",
//         field: "official_mail",
//         sort: "asc",
//         width: 150,
//       },
//       {
//         label: "Scholarship",
//         field: "scholarship",
//         sort: "asc",
//         width: 150,
//       },
  
  
//     ],
//     rows: [
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0502",
//         student_name: "AKULA SRI SAI PRAVALLIKA",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "92.9",
//         diploma_percentage:"",
//         btech_percentage:"64.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0503",
//         student_name: "AMAN RAJ",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "100",
//         inter_percentage: "66",
//         diploma_percentage:"56.5",
//         btech_percentage:"57.5",
//         backlogs:"3",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0504",
//         student_name: "ANNABATHULA VENKATESH",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"80.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0505",
//         student_name: "BANDRU SAI SPANDANA",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "79.17",
//         inter_percentage: "83.7",
//         diploma_percentage:"",
//         btech_percentage:"65.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0506",
//         student_name: "BAVARAJU NITHIN SAI",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "83.33",
//         inter_percentage: "76.7",
//         diploma_percentage:"56.5",
//         btech_percentage:"57.5",
//         backlogs:"2",
//         gender:"FEMale",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0507",
//         student_name: "BEZAWADA TANUJA",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "90",
//         inter_percentage: "95.1",
//         diploma_percentage:"94.87",
//         btech_percentage:"70.5",
//         backlogs:"0",
//         gender:"FEMale",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0508",
//         student_name: "BOGGAVARAPU SUGUNA SRIKANYA MANOJNA",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "93.2",
//         diploma_percentage:"",
//         btech_percentage:"74.5",
//         backlogs:"0",
//         gender:"FEMale",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0509",
//         student_name: "BORRA SRINIVASA MANIKANTA",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "90",
//         inter_percentage: "72",
//         diploma_percentage:"",
//         btech_percentage:"45.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0510",
//         student_name: "BUDDA BALA ATYUTHI SRI SAI",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "88.33",
//         inter_percentage: "94.2",
//         diploma_percentage:"96.17",
//         btech_percentage:"57.5",
//         backlogs:"1",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
      
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
//       {
//         roll_number:"18A91A0501",
//         student_name: "ADABALA HARI BHASKAR",
//         college: "AEC",
//         branch: "CSE",
//         passout_year: "2022",
//         ssc_percentage: "93.3",
//         inter_percentage: "96.5",
//         diploma_percentage:"97.83",
//         btech_percentage:"57.5",
//         backlogs:"0",
//         gender:"Male",
//         mobile:"123456",
//         email:"testing@gmail.com",
//         official_mail:"testing@gmail.com",
//         scholarship:"Yes",

      
//       },
      
      

      
      
      

      

      
      
      
      
//    ],
//   }

//   return (
//     <React.Fragment>

//           <Row>
//             <Col className="col-12">
//               <Card>
//                 <CardBody>
//                   <CardTitle className="h4">Default Datatable </CardTitle>
//                   <p className="card-title-desc">
//                     mdbreact DataTables has most features enabled by default, so
//                     all you need to do to use it with your own tables is to call
//                     the construction function:{" "}
//                     <code>&lt;MDBDataTable /&gt;</code>.
//                   </p>

//                   <MDBDataTable responsive bordered data={data} />
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>

//           <Row>
//             <Col className="col-12">
//               <Card>
//                 <CardBody>
//                   <CardTitle className="h4">Stripped example </CardTitle>
//                   <p className="card-title-desc">
//                     mdbreact DataTables has most features enabled by default, so
//                     all you need to do to use it with your own tables is to call
//                     the construction function:{" "}
//                     <code>&lt;MDBDataTable striped /&gt;</code>.
//                   </p>

//                   <MDBDataTable responsive striped bordered data={data} />
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
        
//     </React.Fragment>
//   )
// }

// export default connect(null, { setBreadcrumbItems })(DatatableTables);
// async function DatatableTables() {
//   try {
//       const response = await fetch('/api/csvData'); // Adjust the endpoint as per your backend setup
//       if (!response.ok) {
//           throw new Error('Failed to fetch data');
//       }
//       const data = await response.json();

//       // Convert data to CSV format
//       const csvContent = 'data:text/csv;charset=utf-8,';
//       data.forEach(entry => {
//           const row = Object.values(entry).join(',');
//           csvContent += row + '\r\n';
//       });

//       // Create a CSV blob and initiate download
//       const encodedUri = encodeURI(csvContent);
//       const link = document.createElement('a');
//       link.setAttribute('href', encodedUri);
//       link.setAttribute('download', 'student_new_Data.csv');
//       document.body.appendChild(link);
//       link.click();

//       // Redirect to a website after download
//       window.location.href = '/tables-datatable'; // Replace with your desired URL
//   } catch (error) {
//       console.error('Error fetching data:', error);
//   }
// }

// DatatableTables();
// DatatableComponent.js
// import React, { useEffect } from 'react';
// import { datatablecomponent } from './DatatableComponent'; // Adjust the path as necessary

// const DatatableTables= () => {
//   useEffect(() => {
//     datatablecomponent();
//   }, []);

//   return (
//     <div>
//       Downloading data...
//     </div>
//   );
// };

// export default DatatableTables;
// DatatableTables.js
// import React, { useEffect } from 'react';
// import { fetchAndDownloadCSV } from './DatatableComponent'; // Adjust the path as necessary

// const DatatableTables = () => {
//   useEffect(() => {
//     fetchAndDownloadCSV();
//   }, []);

//   return (
//     <div>
//       Downloading data...
//     </div>
//   );
// };

// export default DatatableTables;
// DatatableTables.js
// DatatableTables.js
import React, { useEffect, useState } from 'react';

const DatatableTables = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/csvData'); // Ensure this URL is correct
        const contentType = response.headers.get('content-type');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        if (contentType && contentType.indexOf('application/json') !== -1) {
          const result = await response.json();
          setData(result);
        } else {
          const text = await response.text();
          throw new Error(`Unexpected content type: ${contentType}\n\n${text}`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.toString());
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Student Data</h1>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <table>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Roll Number</th>
              <th>Admission No</th>
              <th>Student Name</th>
              <th>College</th>
              <th>Branch</th>
              <th>Passout Year</th>
              <th>SSC Percent</th>
              <th>Inter Percent</th>
              <th>Diploma Percent</th>
              <th>BTech Percent</th>
              <th>Backlogs</th>
              <th>Date of Birth</th>
              <th>Blood Group</th>
              <th>Category</th>
              <th>Nationality</th>
              <th>Religion</th>
              <th>Mother Tongue</th>
              <th>Entrance Type</th>
              <th>Rank</th>
              <th>Joining Date</th>
              <th>Seat Type</th>
              <th>Admission Type</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Official Mail</th>
              <th>Scholarship</th>
              <th>PHC</th>
              <th>Father Name</th>
              <th>Annual Income</th>
              <th>Mother Name</th>
              <th>Mother Mobile No</th>
              <th>Identification Marks</th>
              <th>Corresponding Address</th>
              <th>Permanent Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, index) => (
              <tr key={index}>
                {/* <td>{student.id}</td> */}
                <td>{student.roll_number}</td>
                <td>{student.admission_no}</td>
                <td>{student.student_name}</td>
                <td>{student.college}</td>
                <td>{student.branch}</td>
                <td>{student.passout_year}</td>
                <td>{student.ssc_percent}</td>
                <td>{student.inter_percent}</td>
                <td>{student.diploma_percent}</td>
                <td>{student.btech_percent}</td>
                <td>{student.backlogs}</td>
                <td>{student.date_of_birth}</td>
                <td>{student.blood_group}</td>
                <td>{student.category}</td>
                <td>{student.nationality}</td>
                <td>{student.religion}</td>
                <td>{student.mother_tongue}</td>
                <td>{student.entrance_type}</td>
                <td>{student.rank}</td>
                <td>{student.joining_date}</td>
                <td>{student.seat_type}</td>
                <td>{student.admission_type}</td>
                <td>{student.mobile}</td>
                <td>{student.email}</td>
                <td>{student.official_mail}</td>
                <td>{student.scholarship}</td>
                <td>{student.phc}</td>
                <td>{student.father_name}</td>
                <td>{student.annual_income}</td>
                <td>{student.mother_name}</td>
                <td>{student.mother_mobile_no}</td>
                <td>{student.identification_marks}</td>
                <td>{student.corresponding_address}</td>
                <td>{student.permanent_address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DatatableTables;
