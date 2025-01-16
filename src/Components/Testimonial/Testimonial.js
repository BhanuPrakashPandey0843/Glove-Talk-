import React from 'react';
import PropTypes from 'prop-types';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Mr. Abhilash',
      role: 'Owner',
      image: 'https://th.bing.com/th/id/OIP.eXWcaYbEtO2uuexHM8sAwwHaHa?pid=ImgDet&rs=1',
      linkedIn: 'https://www.linkedin.com/in/bhanu-prakash-pandey',
      description:
        'As the owner, Mr. Abhilash oversees the overall vision and strategy of the team, ensuring all operations are running smoothly.',
    },
    {
      name: 'Ioana Schwalger',
      role: 'World PBC President',
      image: require('../../assets/images/image11.jpg'),
      linkedIn: 'https://www.linkedin.com/in/tabish-ahmad',
      description:
        'Ioana Schwalger, as the World PBC President, leads international initiatives and advocates for the team on a global scale.',
    },
    {
      name: 'Arden Fatu',
      role: 'Winner National Amateur Boxing',
      image: require('../../assets/images/Untitled.png'),
      linkedIn: 'https://www.linkedin.com/in/hamza-bin-majid',
      description:
        'Arden Fatu is a champion boxer who inspires the team with his discipline and drive, pushing others to excel in their respective fields.',
    },
    {
      name: 'John Glozier',
      role: 'Supervisor PCB',
      image: require('../../assets/images/Capture.JPG'),
      linkedIn: 'https://www.linkedin.com/in/anant-dandotiya',
      description:
        'John Glozier supervises the team’s PCB projects, ensuring technical precision and quality in all designs and solutions.',
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900 py-20">
      <div className="container max-w-7xl px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-red-500">Who’s <span className="text-white">behind </span> all this?</h1>
          <p className="text-lg text-gray-300 mt-4">
            With over 100 years of combined experience, we've got a well-seasoned team at the helm.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Team Member Card Component
const TeamMemberCard = ({ member }) => {
  const { name, role, image, linkedIn, description } = member;

  return (
    <div
      className="flex flex-col items-center bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg 
                  rounded-lg p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
    >
      {/* Avatar */}
      <img
        src={typeof image === 'string' ? image : image.default}
        alt={name}
        className="w-32 h-32 rounded-full shadow-md border-4 border-red-500"
      />
      {/* Details */}
      <div className="text-center mt-6">
        <h1 className="text-xl font-semibold text-red-500">{name}</h1>
        <p className="text-sm text-gray-400 mb-3">{role}</p>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        {/* LinkedIn */}
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 
                     transition-colors duration-300 text-sm font-medium"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

// PropTypes Validation
TeamMemberCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    linkedIn: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamSection;