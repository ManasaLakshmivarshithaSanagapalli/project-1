
const User = require("../models/user");


const addUser = async (req, res, next) => {
  console.log("write ur functionality here")
 
}

const AddCompany = (req,res,next) => {
  const Data  = [
    {
      companyName: "DXC",
      description:["DXC Technology,formed by the merger of CSC and HPE's Enterprise Services, delivers global IT solutions for digital transformation, cloud services, cybersecurity, and consulting.","Operating in over 70 countries, DXC serves industries like healthcare, finance, manufacturing, and government with end-to-end IT services"],
      packageoffered:"10",
      logoUrl:pic3,
      eligibilty:['Cse','Should be > 80%','No Backlog History'],

      role:"Testing",
      applied:"400",
      date:"12-12-2132",
      
    },
    {
      companyName: "AWS",
      description:["","AWS (Amazon Web Services), established in 2006, leads the cloud computing industry with a vast array of services ranging from computing power to storage and AI","Offering end-to-end cloud solutions, AWS enables businesses to innovate and scale globally, leveraging robust infrastructure and advanced technologies."],
      packageoffered:"33.3",
      logoUrl:pic,
      eligibilty:['Cse','IT','Should be > 80%','No Backlog History'],

      role:"Testing",
      applied:"200",
      date:"12-12-2132",
      
    },
    {

      companyName: "Cisco",
      description:["Cisco Systems, a networking pioneer since 1984, delivers cutting-edge solutions across routers, switches, security, and collaboration ","Renowned for end-to-end networking prowess, Cisco offers comprehensive infrastructure and services empowering businesses worldwide."],
      packageoffered:"15",
      logoUrl:pic2,
      eligibilty:['Cse','ECE','Should be > 80%','No Backlog History'],
     
      role:"Networking",
      applied:"300",
      date:"12-12-2132",
      
    },
    {

      companyName: "Flipkart",
      description:["Flipkart, founded in 2007, is a pioneering force in e-commerce, transforming the retail landscape with innovative solutions and a vast product range","As a comprehensive online marketplace, Flipkart empowers customers with a seamless shopping experience, diverse offerings, and efficient delivery services, revolutionizing the way India shops"],
      packageoffered:"12",
      logoUrl:pic4,
      eligibilty:['Cse','It','Aids','Aiml','Should be > 80%','No Backlog History'],
     
      role:"Testing",
      applied:"600",
      date:"12-12-2132",
      
    },
    {

      companyName: "Pega",
      description:["Pega, established in 1983, leads in business process management (BPM) and customer engagement solutions, revolutionizing operations and customer experiences","Offering a comprehensive software suite, Pega enables organizations to automate processes, optimize workflows, and deliver personalized interactions"],
      packageoffered:"10",
      logoUrl:pic5,
      eligibilty:['Cse','Should be > 80%','No Backlog History'],
     
      role:"Testing",
      applied:"400",
      date:"12-12-2132",
      
    },
    {

      companyName: "Netflix",
      description:["Netflix, established in 1997, revolutionized entertainment by pioneering online streaming, offering a vast library of movies, series, and original conten"," a leading global streaming service, Netflix provides subscribers with personalized viewing experiences, convenient access to a diverse range of content, and groundbreaking original productions, reshaping how the world consumes entertainment"],
      packageoffered:"12",
      logoUrl:pic6,
      eligibilty:['Cse','It','Aiml','Should be > 80%','No Backlog History'],
     
      role:"Testing",
      applied:"100",
      date:"12-12-2132",
      
    },
    {

      companyName: "divami",
      description:["Divami specializes in humanizing technology to help digital businesses grow. They offer a mix of design strategy and platform engineering expertise, and have been recognized for their work on UX UI design","The company has been offering these services since 2008, and has clients across 13 countries and six continents"],
      packageoffered:"6",
      logoUrl:pic9,
      eligibilty:['Cse','It','Should be > 80%','No Backlog History'],
     
      role:"Development",
      applied:"600",
      date:"12-12-2132",
      
    },
    {

      companyName: "Accenture",
      description:["1.Accenture, established in 1989, stands as a global leader in consulting, technology services, and outsourcing, driving innovation and digital transformation across industries.","With a comprehensive suite of services spanning strategy, consulting, digital, technology, and operations, Accenture helps clients navigate complex challenges."],
      packageoffered:"4.5",
      logoUrl:pic8,
      eligibilty:['Cse','Should be > 80%','No Backlog History'],
     
      role:"Testing",
      applied:"400",
      date:"12-12-2132",
      
    },
    {
 
      companyName: "Pengwin Solutions",
      description:["Pengwin Solutions","Operating in over 70 countries, DXC serves industries like healthcare, finance, manufacturing, and government with end-to-end IT services","2.The company also offers web development services, such as crafting user-friendly websites"],
      packageoffered:"10",
      logoUrl:pic7,
      eligibilty:['Cse','Should be > 80%','No Backlog History'],
     
      role:"Testing",
      applied:"400",
      date:"12-12-2132",
    }
  ]
}
// console.log(Data)

const CheckUSer = (req,res,next) => {
  res.send("working")
}






exports.addUser = addUser;
exports.CheckUSer = CheckUSer;

