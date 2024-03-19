// import React, { useEffect, useState } from "react"
// import {
//   Card,
//   CardBody,
//   Col,
//   Row,
//   DropdownMenu,
//   DropdownItem,
//   DropdownToggle,
//   UncontrolledDropdown,
//   Modal,
//   ModalBody,
//   ModalHeader,
//   Form,
//   Label,
//   Input,
//   FormFeedback,
// } from "reactstrap"
// import { useFormik } from "formik"
// import * as Yup from "yup"

// import {
//   getTasks as onGetTasks,
//   addCardData as onAddCardData,
//   updateCardData as onUpdateCardData,
//   deleteKanban as OnDeleteKanban,
// } from "store/tasks/actions"

// //redux
// import { useSelector, useDispatch } from "react-redux"
// import { createSelector } from "reselect"
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
// import { Link } from "react-router-dom"
// import { AddTeamMember } from "common/data"
// import SimpleBar from "simplebar-react"
// import moment from "moment"
// import Spinners from "components/Common/Spinner"

// //Import Action to copy breadcrumb items from local state to redux state
// import { setBreadcrumbItems } from "../../store/actions";
// import { connect } from "react-redux"

// const Kanban = (props) => {
//  document.title = "Kanban Board | Lexa  - React Admin & Dashboard Template"

//  const breadcrumbItems = [
//   { title: "Lexa", link: "#" },
//   { title: "Kanban Board", link: "#" },
// ]

// useEffect(() => {
//   props.setBreadcrumbItems('Kanban Board', breadcrumbItems)
// })

//   const dispatch = useDispatch()
//   const [images, setImages] = useState([])

//   const [modal, setModal] = useState(false)
//   const toggle = () => {
//     if (modal) {
//       setModal(false)
//       setImages([])
//       setCard(null)
//     } else {
//       setModal(true)
//     }
//   }

//   const selectTasksState = state => state.tasks
//   const TasksKanbanProperties = createSelector(selectTasksState, Tasks => ({
//     kanbanTasks: Tasks.tasks,
//     loading: Tasks.loading
//   }))

//   const { kanbanTasks, loading } = useSelector(TasksKanbanProperties)
//   const [isLoading, setLoading] = useState(loading)
//   useEffect(() => {
//     dispatch(onGetTasks())
//   }, [dispatch])

//   const [cards, setCards] = useState()
//   const [kanbanTasksCards, setKanbanTasksCards] = useState()

//   useEffect(() => {
//     setCards(kanbanTasks)
//   }, [kanbanTasks])

//   const onClickDelete = card => {
//     if (card && card.id) {
//       dispatch(OnDeleteKanban(card.id))
//     }
//   }

//   const [isEdit, setIsEdit] = useState(false)
//   const [card, setCard] = useState(null)
//   // validation
//   const validation = useFormik({
//     // enableReinitialize : use this flag when initial values needs to be changed
//     enableReinitialize: true,

//     initialValues: {
//       id: (card && card.cardId) || "",
//       cardTitle: (card && card.cardTitle) || "",
//       taskdesc: (card && card.taskdesc) || "",
//       budget: (card && card.budget) || "",
//       userImages: (card && card.userImages) || [],
//       badgeText: (card && card.badgeText) || ""
//     },
//     validationSchema: Yup.object({
//       cardTitle: Yup.string().required("Please Enter Your Job Title"),
//       taskdesc: Yup.string().required("Please Enter Your Task Description"),
//       budget: Yup.string().required("Please Enter Your budget"),
//       badgeText: Yup.string().required("Please Enter Your Status"),
//       userImages: Yup.array().required("Select at least one team member")
//     }),
//     onSubmit: (values) => {
//       if (isEdit) {
//         const updatedCards = {
//           id: card ? card.id : 0,
//           kanId: kanbanTasksCards,
//           cardId: values.id,
//           title: values.cardTitle,
//           taskdesc: values.taskdesc,
//           budget: values.budget,
//           date: moment(new Date()).format("DD MMMM , YYYY"),
//           badgeText: values.badgeText,
//           badgeColor: values.badgeColor,
//           userImages: values.userImages,
//         }
//         // update Job
//         dispatch(onUpdateCardData(updatedCards))
//         validation.resetForm()
//       } else {
//         const newCardData = {
//           id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
//           kanId: kanbanTasksCards,
//           cardId: values["id"],
//           title: values["cardTitle"],
//           taskdesc: values["taskdesc"],
//           budget: values["budget"],
//           date: moment(new Date()).format("DD MMMM , YYYY"),
//           userImages: values["userImages"],
//           badgeText: values["badgeText"],
//           badgeColor: values["badgeColor"],
//         }
//         dispatch(onAddCardData(newCardData))
//         validation.resetForm()
//       }
//       toggle()
//     },
//   })

//   const handleCardEdit = (arg, line) => {
//     setModal(true)
//     setCard(arg)

//     let card = arg
//     setCard({
//       id: card.id,
//       cardTitle: card.title,
//       taskdesc: card.taskdesc,
//       date: card.date,
//       budget: card.budget,
//       userImages: card.userImages,
//       badgeText: card.badgeText,
//       badgeColor: card.badgeColor,
//     })

//     setKanbanTasksCards(line.id)
//     setIsEdit(true)

//     toggle()
//   }
//   const handleImage = (image) => {
//     const updatedImages = images.includes(image)
//       ? images.filter(item => item !== image)
//       : [...images, image];

//     setImages(updatedImages);
//     validation.setFieldValue('userImages', updatedImages)

//   }

//   useEffect(() => {
//     if (card) {
//       setImages([...card?.userImages])
//     }
//   }, [card])

//   const handleAddNewCard = line => {
//     setCard("")
//     setIsEdit(false)
//     toggle()
//     setKanbanTasksCards(line.id)
//   };

//   const handleDragEnd = (result) => {
//     if (!result.destination) return // If dropped outside a valid drop area, do nothing

//     const { source, destination } = result
//     // Reorder cards within the same card line
//     if (source.droppableId === destination.droppableId) {
//       const line = cards.find(line => line.id === source.droppableId)
//       const reorderedCards = Array.from(line.cards)
//       const [movedCard] = reorderedCards.splice(source.index, 1)
//       reorderedCards.splice(destination.index, 0, movedCard)

//       const updatedLines = cards.map(line => {
//         if (line.id === source.droppableId) {
//           return { ...line, cards: reorderedCards }
//         }
//         return line
//       })

//       setCards(updatedLines)
//     } else {
//       // Move card between different card lines
//       const sourceLine = cards.find(line => line.id === source.droppableId)
//       const destinationLine = cards.find(
//         line => line.id === destination.droppableId
//       )
//       const sourceCards = Array.from(sourceLine.cards)
//       const destinationCards = Array.from(destinationLine.cards)
//       const [movedCard] = sourceCards.splice(source.index, 1)
//       destinationCards.splice(destination.index, 0, movedCard)

//       const updatedLines = cards.map(line => {
//         if (line.id === source.droppableId) {
//           return { ...line, cards: sourceCards }
//         } else if (line.id === destination.droppableId) {
//           return { ...line, cards: destinationCards }
//         }
//         return line
//       })

//       setCards(updatedLines)
//     }
//   }

//   const getBadgeColor = (text) => {
//     switch (text) {
//       case "Waiting":
//         return 'secondary';
//       case "Approved":
//         return 'primary';
//       case "Pending":
//         return 'warning';
//       default:
//         return 'success';
//     }
//   }
//   return (
//     <React.Fragment>
//         {
//             isLoading ? <Spinners setLoading={setLoading} /> :
//               <Row>
//                 <DragDropContext onDragEnd={handleDragEnd}>
//                   {(cards || []).map(line => (
//                     <Col lg={4} key={line.id}>
//                       <Card>
//                         <CardBody>
//                           <UncontrolledDropdown className="float-end">
//                             <DropdownToggle
//                               className="arrow-none"
//                               tag="a"
//                               color="white"
//                             >
//                               <i className="mdi mdi-dots-vertical m-0 text-muted h5"></i>
//                             </DropdownToggle>
//                             <DropdownMenu className="dropdown-menu-end">
//                               <DropdownItem>Edit</DropdownItem>
//                               <DropdownItem>Delete</DropdownItem>
//                             </DropdownMenu>
//                           </UncontrolledDropdown>
//                           <h4 className="card-title mb-4">{line.name}</h4>
//                           <Droppable droppableId={line.id}>
//                             {provided => (
//                               <div
//                                 ref={provided.innerRef}
//                                 {...provided.droppableProps}
//                               >
//                                 {line.cards.map((card, index) => {
//                                   const badgeColor = getBadgeColor(card.badgeText)
//                                   return (
//                                     <Draggable
//                                       key={card.id}
//                                       draggableId={card.id}
//                                       index={index}
//                                     >
//                                       {provided => (
//                                         <div
//                                           ref={provided.innerRef}
//                                           {...provided.draggableProps}
//                                           {...provided.dragHandleProps}
//                                           // className="card task-list"
//                                           className="pb-1 task-list"
//                                           id={line.name + "-task"}
//                                         >
//                                           <div className="card task-box" id="uptask-1">
//                                             <CardBody>
//                                               <UncontrolledDropdown className="float-end">
//                                                 <DropdownToggle
//                                                   className="arrow-none"
//                                                   tag="a"
//                                                   color="white"
//                                                 >
//                                                   <i className="mdi mdi-dots-vertical m-0 text-muted h5"></i>
//                                                 </DropdownToggle>
//                                                 <DropdownMenu className="dropdown-menu-end">
//                                                   <DropdownItem
//                                                     className="edittask-details"
//                                                     onClick={() =>
//                                                       handleCardEdit(card, line)
//                                                     }
//                                                   >
//                                                     Edit
//                                                   </DropdownItem>
//                                                   <DropdownItem
//                                                     className="deletetask"
//                                                     onClick={() =>
//                                                       onClickDelete(card)
//                                                     }
//                                                   >
//                                                     Delete
//                                                   </DropdownItem>
//                                                 </DropdownMenu>
//                                               </UncontrolledDropdown>
//                                               <div className="float-end ms-2">
//                                                 <span
//                                                   className={`badge rounded-pill badge-soft-${badgeColor} font-size-12`}
//                                                   id="task-status"
//                                                 >
//                                                   {card.badgeText}
//                                                 </span>
//                                               </div>
//                                               <div>
//                                                 <h5 className="font-size-15">
//                                                   <Link
//                                                     to="#"
//                                                     className="text-dark"
//                                                     id="task-name"
//                                                   >
//                                                     {card.title}
//                                                   </Link>
//                                                 </h5>
//                                                 <p className="text-muted">
//                                                   {card.date}
//                                                 </p>
//                                               </div>
//                                               {
//                                                 card.taskdesc1 &&
//                                                 <ul className="ps-3 mb-4 text-muted" id="task-desc">
//                                                   <li className="py-1">{card.taskdesc}</li>
//                                                   <li className="py-1">{card.taskdesc1}</li>
//                                                 </ul>
//                                               }
//                                               {/* {
//                                                 card.brandLogo &&
//                                                 <ul className="list-inine ps-0 mb-4" id="task-desc">
//                                                   {
//                                                     card.brandLogo.map((logo, inx) => (
//                                                       <li key={inx} className="list-inline-item">
//                                                         <Link to="#">
//                                                           {
//                                                             logo.imges ?
//                                                               <div>
//                                                                 <img src={logo.imges} className="rounded" height={48} alt="" />
//                                                               </div>

//                                                               :
//                                                               <div className="border rounded avatar-sm">
//                                                                 <span className="avatar-title bg-transparent">
//                                                                   <img src={logo.img} className="avatar-xs" alt="" />
//                                                                 </span>
//                                                               </div>

//                                                           }
//                                                         </Link>
//                                                       </li>
//                                                     ))
//                                                   }
//                                                 </ul>
//                                               } */}
//                                               <div className="avatar-group float-start task-assigne">
//                                                 {/* {
//                                                   card.userImages && card.userImages.map(
//                                                     (usrimg, key) => (
//                                                       usrimg.img &&
//                                                       <div key={key}
//                                                         className="avatar-group-item">
//                                                         <Link
//                                                           to="#"
//                                                           className="d-inline-block"
//                                                           defaultValue="member-4">
//                                                           <img src={usrimg.img} alt="" className="rounded-circle avatar-xs" />
//                                                         </Link>
//                                                       </div>
//                                                     )
//                                                   )
//                                                 }
//                                                 {
//                                                   card.kanbanImgtext && card.kanbanImgtext.map((imgtext, inx) => (
//                                                     <div key={inx}
//                                                       className="avatar-group-item">
//                                                       <Link to="#" className="d-inline-block" defaultValue="member-4">
//                                                         <div className="avatar-xs">
//                                                           <span className={`avatar-title rounded-circle ${card.kanbanImgtextColor} text-white font-size-16`}>
//                                                             {imgtext.imageText}
//                                                           </span>
//                                                         </div>
//                                                       </Link>
//                                                     </div>
//                                                   ))
//                                                 } */}
//                                                 <button>Register</button>

//                                               </div>

//                                               <div className="text-end">
//                                                 <h5
//                                                   className="font-size-15 mb-1"
//                                                   id="task-budget"
//                                                 >
//                                                   {card.budget} LPA
//                                                 </h5>
//                                                 <p className="mb-0 text-muted">
//                                                   Package
//                                                 </p>
//                                               </div>
//                                             </CardBody>
//                                           </div>
//                                         </div>
//                                       )}
//                                     </Draggable>
//                                   )
//                                 })}
//                                 {provided.placeholder}
//                                 <div className="text-center d-grid">
//                                   <Link
//                                     to="#"
//                                     className="btn btn-primary waves-effect waves-light addtask-btn"
//                                     data-bs-toggle="modal"
//                                     data-bs-target=".bs-example-modal-lg"
//                                     data-id="#upcoming-task"
//                                     onClick={() => handleAddNewCard(line)}
//                                   >
//                                     <i className="mdi mdi-plus me-1"></i> Add New
//                                   </Link>
//                                 </div>
//                               </div>
//                             )}
//                           </Droppable>
//                         </CardBody>
//                       </Card>
//                     </Col>
//                   ))}
//                 </DragDropContext>
//               </Row>
//           }
//           <Modal id="modalForm" isOpen={modal} toggle={toggle} centered={true} size="lg">
//         <ModalHeader toggle={toggle}>
//           {!!isEdit ? "Update Task" : "Add New Task"}
//         </ModalHeader>
//         <ModalBody>
//           <Form
//             onSubmit={e => {
//               e.preventDefault()
//               validation.handleSubmit()
//               return false
//             }}
//           >
//             <div className="form-group mb-3">
//               <Label htmlFor="taskname" className="col-form-label">
//                 Student Name<span className="text-danger">*</span>
//               </Label>
//               <Col lg={12}>
//                 <Input
//                   id="taskname"
//                   name="cardTitle"
//                   type="text"
//                   className="form-control validate"
//                   placeholder="Enter Task Name..."
//                   validate={{ required: { value: true } }}
//                   onChange={validation.handleChange}
//                   onBlur={validation.handleBlur}
//                   value={validation.values.cardTitle || ""}
//                   invalid={
//                     validation.touched.cardTitle && validation.errors.cardTitle
//                       ? true
//                       : false
//                   }
//                 />
//                 {validation.touched.cardTitle && validation.errors.cardTitle ? (
//                   <FormFeedback type="invalid">
//                     {validation.errors.cardTitle}
//                   </FormFeedback>
//                 ) : null}
//               </Col>
//             </div>
//             <div className="form-group mb-3">
//               <label className="col-form-label">Task Description</label>
//               <Col lg={12}>
//                 <textarea
//                   id="taskdesc"
//                   className="form-control"
//                   placeholder="Enter Task Description"
//                   name="taskdesc"
//                   onChange={validation.handleChange}
//                   onBlur={validation.handleBlur}
//                   value={validation.values.taskdesc || ""}
//                 ></textarea>
//                 {validation.touched.taskdesc &&
//                   validation.errors.taskdesc ? (
//                   <FormFeedback type="invalid" className="d-block">
//                     {validation.errors.taskdesc}
//                   </FormFeedback>
//                 ) : null}
//               </Col>
//             </div>

//             <div className="form-group mb-3">
//               <label className="col-form-label">
//                 Add Team Member<span className="text-danger">*</span>
//               </label>
//               <SimpleBar style={{ height: "200px" }}>
//                 <ul
//                   className="list-unstyled user-list validate"
//                   id="taskassignee"
//                 >
//                   {(AddTeamMember || []).map((image, index) => {
//                     const isChecked = images.some(item => item.id === image.id);
//                     return (
//                       <li key={index}>
//                         <div className="form-check form-check-primary mb-2 d-flex align-items-center">
//                           <input
//                             className="form-check-input"
//                             type="checkbox"
//                             id={"member" + image.id}
//                             name="userImages"
//                             onBlur={validation.handleBlur}
//                             value={validation.values.userImages || ''}
//                             onChange={() => handleImage(image)}
//                             checked={isChecked}
//                           />
//                           <label className="form-check-label ms-2" htmlFor={"member" + image.id}>
//                             {image.name}
//                           </label>
//                           <img
//                             src={image.img}
//                             className="rounded-circle avatar-xs m-1"
//                             alt=""
//                           />
//                         </div>
//                       </li>
//                     )
//                   })}
//                   {validation.touched.userImages &&
//                     validation.errors.userImages ? (
//                     <FormFeedback type="invalid" className="d-block">
//                       {validation.errors.userImages}
//                     </FormFeedback>
//                   ) : null}
//                 </ul>
//               </SimpleBar>
//             </div>

//             <div className="form-group mb-4">
//               <label className="col-form-label">
//                 Status<span className="text-danger">*</span>
//               </label>
//               <div className="col-lg-12">
//                 <select
//                   className="form-select validate"
//                   id="TaskStatus"
//                   name="badgeText"
//                   onChange={validation.handleChange}
//                   onBlur={validation.handleBlur}
//                   value={validation.values.badgeText}
//                 >
//                   <option defaultValue="">Choose..</option>
//                   <option defaultValue="secondary">Job</option>
//                   <option defaultValue="primary">Internship</option>
                  
//                 </select>
//                 {validation.touched.badgeText &&
//                   validation.errors.badgeText ? (
//                   <FormFeedback type="invalid" className="d-block">
//                     {validation.errors.badgeText}
//                   </FormFeedback>
//                 ) : null}
//               </div>
//             </div>

//             <div className="form-group mb-4">
//               <label htmlFor="taskbudget" className="col-form-label">
//                 Budget<span className="text-danger">*</span>
//               </label>
//               <Col lg={12}>
//                 <input
//                   id="taskbudget"
//                   name="budget"
//                   type="number"
//                   placeholder="Enter Task Budget..."
//                   className="form-control"
//                   onChange={validation.handleChange}
//                   onBlur={validation.handleBlur}
//                   value={validation.values.budget || ""}
//                 />
//                 {validation.touched.budget && validation.errors.budget ? (
//                   <FormFeedback type="invalid" className="d-block">
//                     {validation.errors.budget}
//                   </FormFeedback>
//                 ) : null}
//               </Col>
//             </div>
//             <Row>
//               <Col lg={10}>
//                 <button
//                   type="submit"
//                   className="btn btn-primary"
//                   id="updatetaskdetail"
//                 >
//                   {!!isEdit ? "Update Task" : "Create Task"}
//                 </button>
//               </Col>
//             </Row>
//           </Form>
//         </ModalBody>
//       </Modal>
      
//     </React.Fragment>
//   )
// }

// export default connect(null, { setBreadcrumbItems })(Kanban)

import React from "react";
import { useState } from 'react';
import CompanyCard from "./Companycard";
import './Company.css';
import pic from "./AWS.png";
import pic2 from "../Kanban/images/CISCO.png";
import pic3 from "./images/dxclogo.png";
import pic4 from "./images/flipkart-logo.png";
import pic5 from "./images/PEGA LOGO.png";
import pic6 from "./images/Netflix_2015_logo.svg.png";
import pic7 from "./images/Pengwin_solutions.png";
import pic8 from "./images/accenture.jpg";
import pic9 from "./images/diwami.jpg";
import AddCompanyForm from "./AddCompanyForm";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
const companies = [
  {
    id: 1,
    CompanyName: "DXC",
    description:["DXC Technology,formed by the merger of CSC and HPE's Enterprise Services, delivers global IT solutions for digital transformation, cloud services, cybersecurity, and consulting.","Operating in over 70 countries, DXC serves industries like healthcare, finance, manufacturing, and government with end-to-end IT services"],
    packageoffered:"10",
    logoUrl:pic3,
    eligibilty:['Cse','Should be > 80%','No Backlog History'],
    per:"80",
    role:"Testing",
    applied:"400",
    date:"12-12-2132",
    
  },
  {
    id: 2,
    CompanyName: "AWS",
    description:["","AWS (Amazon Web Services), established in 2006, leads the cloud computing industry with a vast array of services ranging from computing power to storage and AI","Offering end-to-end cloud solutions, AWS enables businesses to innovate and scale globally, leveraging robust infrastructure and advanced technologies."],
    packageoffered:"33.3",
    logoUrl:pic,
    eligibilty:['Cse','IT','Should be > 80%','No Backlog History'],
    per:"80",
    role:"Testing",
    applied:"200",
    date:"12-12-2132",
    
  },
  {
    id: 3,
    CompanyName: "Cisco",
    description:["Cisco Systems, a networking pioneer since 1984, delivers cutting-edge solutions across routers, switches, security, and collaboration ","Renowned for end-to-end networking prowess, Cisco offers comprehensive infrastructure and services empowering businesses worldwide."],
    packageoffered:"15",
    logoUrl:pic2,
    eligibilty:['Cse','ECE','Should be > 80%','No Backlog History'],
    per:"80",
    role:"Networking",
    applied:"300",
    date:"12-12-2132",
    
  },
  {
    id: 4,
    CompanyName: "Flipkart",
    description:["Flipkart, founded in 2007, is a pioneering force in e-commerce, transforming the retail landscape with innovative solutions and a vast product range","As a comprehensive online marketplace, Flipkart empowers customers with a seamless shopping experience, diverse offerings, and efficient delivery services, revolutionizing the way India shops"],
    packageoffered:"12",
    logoUrl:pic4,
    eligibilty:['Cse','It','Aids','Aiml','Should be > 80%','No Backlog History'],
    per:"80",
    role:"Testing",
    applied:"600",
    date:"12-12-2132",
    
  },
  {
    id: 5,
    CompanyName: "Pega",
    description:["Pega, established in 1983, leads in business process management (BPM) and customer engagement solutions, revolutionizing operations and customer experiences","Offering a comprehensive software suite, Pega enables organizations to automate processes, optimize workflows, and deliver personalized interactions"],
    packageoffered:"10",
    logoUrl:pic5,
    eligibilty:['Cse','Should be > 80%','No Backlog History'],
    per:"80",
    role:"Testing",
    applied:"400",
    date:"12-12-2132",
    
  },
  {
    id: 6,
    CompanyName: "Netflix",
    description:["Netflix, established in 1997, revolutionized entertainment by pioneering online streaming, offering a vast library of movies, series, and original conten"," a leading global streaming service, Netflix provides subscribers with personalized viewing experiences, convenient access to a diverse range of content, and groundbreaking original productions, reshaping how the world consumes entertainment"],
    packageoffered:"12",
    logoUrl:pic6,
    eligibilty:['Cse','It','Aiml','Should be > 80%','No Backlog History'],
    per:"80",
    role:"Testing",
    applied:"100",
    date:"12-12-2132",
    
  },
  {
    id: 7,
    CompanyName: "divami",
    description:["Divami specializes in humanizing technology to help digital businesses grow. They offer a mix of design strategy and platform engineering expertise, and have been recognized for their work on UX UI design","The company has been offering these services since 2008, and has clients across 13 countries and six continents"],
    packageoffered:"6",
    logoUrl:pic9,
    eligibilty:['Cse','It','Should be > 80%','No Backlog History'],
    per:"80",
    role:"Development",
    applied:"600",
    date:"12-12-2132",
    
  },
  {
    id: 8,
    CompanyName: "Accenture",
    description:["1.Accenture, established in 1989, stands as a global leader in consulting, technology services, and outsourcing, driving innovation and digital transformation across industries.","With a comprehensive suite of services spanning strategy, consulting, digital, technology, and operations, Accenture helps clients navigate complex challenges."],
    packageoffered:"4.5",
    logoUrl:pic8,
    eligibilty:['Cse','Should be > 80%','No Backlog History'],
    per:"80",
    role:"Testing",
    applied:"400",
    date:"12-12-2132",
    
  },
  {
    id: 9,
    CompanyName: "Pengwin Solutions",
    description:["Pengwin Solutions","Operating in over 70 countries, DXC serves industries like healthcare, finance, manufacturing, and government with end-to-end IT services","2.The company also offers web development services, such as crafting user-friendly websites"],
    packageoffered:"10",
    logoUrl:pic7,
    eligibilty:['Cse','Should be > 80%','No Backlog History'],
    per:"80",
    role:"Testing",
    applied:"400",
    date:"12-12-2132",
  }
];

const Kanban = () => {
// const toggleForm = () => {
//   <AddCompanyForm/>
// }
  return (
    <div className="Card_Division">
      {
      companies.map((company) => {
        return(
       <CompanyCard
        logoUrl = {company.logoUrl}
        CompanyName = {company.CompanyName}
        description = {company.description}
        packageoffered = {company.packageoffered}
        applied = {company.applied}
        eligibilty = {company.eligibilty}
        role = {company.role}
        date = {company.date}
      />)})
}
  <Link to='/addcompany' className="btn btn-success" id="add">Add</Link> 
    </div>

  )
}
export default Kanban;
