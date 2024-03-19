import React from "react";
// import logourl from './aws_logo.png';

const CompanyCard = (data) => {
  console.log(data)
  return (
    // <div className="company-card">
    //   <div className="company-logo">
    //     {/* <img src={logoUrl.pic} alt={companyName} /> */}
    //     <img src={logoUrl} alt={companyName} /> 
    //   </div>
    //   <div className="company-details">
    //     <h3>Company Name: <r>{companyName}</r> </h3>
    //     <div className="dis">
    //     <h3>Description</h3>
    //         <ul>
    //           <li>{description1}</li>
    //           <li>{description2}</li>
    //           {/* <li>{description3}</li> */}
    //           {/* <li>{description4}</li> */}

    //         </ul>
    //         </div>

    //         <h3>
    //           Eligibility:</h3>
    //           <ul>
    //             <li>{dept}</li>
    //             <li><b>Percentage:   </b>{per}</li>
    //           </ul>
    //           <div class="parent">
    //             <div class="left">
    //           <h3>
    //           Package:</h3>
    //            <p>{packageoffered}LPA    </p>
    //            </div>
    //            <div class="right">
    //             <h3>Applied:</h3>
    //             <p>{applied}</p>
    //            </div>
    //            </div>
    //            <div className="another">
    //         <h3>Role:</h3><p>{role}</p>
    //         </div>

    //   </div>
    //   {/* <button>Add</button> */}
    // </div>
    <>
      <div className="Card_Outline">
        <div className="Company_logo_division">
          <img src={data.logoUrl} alt="invalid Path" />
        </div>
        <div className="Company_name">
          {data.CompanyName}
        </div>
        <div className="Description_heading">
          Description
        </div>
        <div className="Description_points">
          <ul>
            {
              data.description.map(ele => {
                return <li>{ele}</li>
              })
            }
          </ul>
        </div>
        <div className="Package_applied_division">
          <div className="Package_division">
            <div className="Package_heading">
              Package
            </div>
            <div className="Package">
              {
                data.packageOffered
              }&nbsp;&nbsp;LPA
            </div>
          </div>
          <div className="Package_division">
            <div className="Package_heading">
              Registered
            </div>
            <div className="Package">
              {
                data.applied
              }
            </div>
          </div>
        </div>
        <div className="Eligibility_Division">
            <div className="Eligibility_Heading">
                Eligibility
            </div>
          <ul>
            {
              data.eligibilty.map(ele => {
                return <li>{ele}</li>
              })
            }
          </ul>
        </div>
        <div className="Package_applied_division">
          <div className="Package_division">
            <div className="Package_heading">
              Role Offered
            </div>
            <div className="Package">
              {
                data.role
              }
            </div>
          </div>
          <div className="Package_division">
            <div className="Package_heading">
              End Date To Apply
            </div>
            <div className="Package">
              {data.date}
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default CompanyCard;
