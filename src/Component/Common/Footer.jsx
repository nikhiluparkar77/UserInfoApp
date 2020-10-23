import React from "react"; 
const Footer = () => {
  const ToDay = new Date();

  return (
    <div className="Footer bg-dark ">
      <div className="container text-white">
        
      <div className="py-4 pt-1 text-center text-light">
        <p className="m-0">&copy; {ToDay.getFullYear()} All Right Reserve.</p>
      </div>
    </div>
    </div>
  );
};

export default Footer;
