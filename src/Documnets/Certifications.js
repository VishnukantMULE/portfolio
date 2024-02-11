import React from 'react';
import './style/Certficate.css'

const CertificationCard = ({ title, pdfUrl, coverPageUrl, details }) => {

  const openCertificate = () => {
    // Open the certificate in a new window or popup
    window.open(pdfUrl, '_blank', 'width=800,height=600,resizable=yes');
  };

  return (
    <div className="certification-card">
      <img src={coverPageUrl} alt="Cover page" onClick={openCertificate} />
      <div className="card-content">
        <h4>{title}</h4>
        <p>{details}</p>
      </div>
    </div>
  );
};

const Certifications = () => {
  const certificationsData = [
    {
      id: 1,
      title: 'IBM Python for Data Science, AI & Development - Coursera',
      pdfUrl: 'https://ik.imagekit.io/3jobkavje/Docs/CERTIFICATIONS/Coursera%20XFBQR7RTBTA7.pdf?updatedAt=1702233730638',
      coverPageUrl: 'https://1000logos.net/wp-content/uploads/2022/06/Coursera-Logo.png',
      
    },
    {
      id: 2,
      title: 'Data Structure - Coursera',
      pdfUrl: 'https://ik.imagekit.io/3jobkavje/Docs/CERTIFICATIONS/Coursera%202E9AFGR7GWAF.pdf?updatedAt=1702233730592',
      coverPageUrl: 'https://1000logos.net/wp-content/uploads/2022/06/Coursera-Logo.png',
      
    },
    {
      id: 3,
      title: 'Process Mining Virtual Internship - Celonis',
      pdfUrl: 'https://ik.imagekit.io/3jobkavje/Docs/CERTIFICATIONS/vishnukant%20sanjay%20mule%20924376_Thw2d27Bt.pdf?updatedAt=1702235458126',
      coverPageUrl: 'https://logowik.com/content/uploads/images/celonis8581.jpg',
      
    },
    {
      id: 4,
      title: 'Embedded Devloper Virtual Internship - Microchip',
      pdfUrl: 'https://ik.imagekit.io/3jobkavje/Docs/CERTIFICATIONS/vishnukant%20sanjay%20mule%20280655.pdf?updatedAt=1702235948043',
      coverPageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Microchip-Logo.svg',
      
    },
  ];

  return (
    <div className="certifications">
      <h2 className='certificate-title'>Certifications</h2>
      <ul>
        {certificationsData.map(certification => (
          <li key={certification.id}>
            <CertificationCard
              title={certification.title}
              pdfUrl={certification.pdfUrl}
              coverPageUrl={certification.coverPageUrl}
              
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
