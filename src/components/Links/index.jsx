import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Links = () => {
  const emailAddress = 'lanxeyu@gmail.com';

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink);
  };

  return (
    <DropdownButton className="links-btn" id="dropdown-basic-button" title="GET IN TOUCH" variant="outline-dark">
      <Dropdown.Item href="https://www.linkedin.com/in/lanxeyu/" target="_blank">LinkedIn</Dropdown.Item>
      <Dropdown.Item onClick={handleEmailClick}>Email: {emailAddress}</Dropdown.Item>
    </DropdownButton>
  );
};

export default Links;
