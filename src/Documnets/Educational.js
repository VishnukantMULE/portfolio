import React, { useEffect } from 'react';
import PDFObject from 'pdfobject';

import './style/Edu.css'; 
import resumepdf from '../Assets/Doc/wl_vishnukant_mule.pdf';

export default function Educational() {
  useEffect(() => {
    const options = {
      url: resumepdf,
      pdfOpenParams: {
        view: 'Fit',
        scrollbars: '0',
        toolbar: '0',
        statusbar: '0',
        navpanes: '0',
        background: 'transparent' 
      }
    };
    PDFObject.embed(resumepdf, '#pdf-container', options);
  }, []);

  const handleDownload = () => {
    
    const link = document.createElement('a');
    link.href = resumepdf; 
    link.download = 'resume.pdf'; 
    document.body.appendChild(link); 
    link.click(); 
    document.body.removeChild(link); 
  };

  return (
    <div className="pdfshow">
      <div className="centered">
        <div id="pdf-container" style={{ width: '610px', height: '780px' }}></div>
        <button onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
}
