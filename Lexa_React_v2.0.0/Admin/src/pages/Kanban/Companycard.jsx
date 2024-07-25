import React from 'react';
// import PropTypes from 'prop-types';

// const CompanyCard = ({ logoUrl, CompanyName, description, packageoffered, applied, eligibility, role, date }) => {
//   return (
//     <div className="company-card">
//       <img src={logoUrl} alt={`${CompanyName} logo`} />
//       <h2>{CompanyName}</h2>
//       <p>{description}</p> {/* Join description array */}
//       <p>Package Offered: {packageoffered}</p>
//       <p>Applied: {applied}</p>
//       <p>Eligibility: {eligibility}</p> {/* Join eligibility array */}
//       <p>Role: {role}</p>
//       <p>Date: {date}</p>
//     </div>
//   );
// };

// CompanyCard.propTypes = {
//   logoUrl: PropTypes.string.isRequired,
//   CompanyName: PropTypes.string.isRequired,
//   description: PropTypes.arrayOf(PropTypes.string).isRequired,
//   packageoffered: PropTypes.string.isRequired,
//   applied: PropTypes.string.isRequired,
//   eligibility: PropTypes.arrayOf(PropTypes.string).isRequired,
//   role: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired
// };

// export default CompanyCard;
// const CompanyCard = ({ logoUrl, CompanyName, description, packageoffered, applied, eligibility, role }) => {
//   return (
//       <div className="company-card">
//           <h3>{CompanyName}</h3>
//           <img src={logoUrl} alt={CompanyName} />
//           <p>{description}</p>
//           <p>Eligibility: {eligibility}</p>
//           <p>Package Offered: {packageoffered}</p>
//           <p>Applied: {applied}</p>
//           <p>Role: {role}</p>
//       </div>
//   );
// };

// export default CompanyCard;

const CompanyCard = ({ CompanyName, description, packageoffered, applied, eligibility, role }) => {
  // const handleImageError = (e) => {
  //   e.target.src = 'path/to/default/image.png'; // Replace with your default image path
  // };

  return (
    <div className="company-card">
      <h3>{CompanyName}</h3>
      {/* <img src={logoUrl} alt={CompanyName} onError={handleImageError} /> */}
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Eligibility:</strong> {eligibility}</p>
      <p><strong>Package Offered:</strong> {packageoffered}</p>
      <p><strong>Applied:</strong> {applied}</p>
      <p><strong>Role:</strong> {role}</p>
    </div>
  );
};

export default React.memo(CompanyCard);
