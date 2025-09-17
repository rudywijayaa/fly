import React, { useEffect } from 'react';
import paris from '../../assets/paris.jpg';
import lake from '../../assets/lake.png';
import italy from '../../assets/italy.png';
import england from '../../assets/england.png';

import travelers1 from '../../assets/man1.jpg';
import travelers2 from '../../assets/man2.png';
import travelers3 from '../../assets/man3.png';
import travelers4 from '../../assets/man4.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: travelers1,
    travelerName: 'Rudy Wijaya',
    travelerUsername: '@wijayaruds',
  },
  {
    id: 2,
    destinationImage: lake,
    travelerImage: travelers2,
    travelerName: 'Nicholas Jackson',
    travelerUsername: '@nicholas',
  },
  {
    id: 3,
    destinationImage: italy,
    travelerImage: travelers3,
    travelerName: 'Samantha Smith',
    travelerUsername: '@samanthasmith',
  },
  {
    id: 4,
    destinationImage: england,
    travelerImage: travelers4,
    travelerName: 'Michael Brown',
    travelerUsername: '@michaelbrown',
  },
];

const Travelers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='travelers container section'>
      <div className='sectionContainer'>
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Top travelers of this month!
        </h2>

        <div
          data-aos='fade-up'
          data-aos-duration='2500'
          className='travelersContainer grid'
        >
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              travelerUsername,
            }) => {
              return (
                <div key={id} className='singleTraveler'>
                  <img
                    src={destinationImage}
                    alt='Paris Image'
                    className='destinationImage'
                    loading='lazy'
                  />
                  <div className='travelersDetails'>
                    <div className='travelerPicture'>
                      <img
                        src={travelerImage}
                        alt='Traveler Image'
                        className='travelerImage'
                        loading='lazy'
                      />
                    </div>
                    <div className='travelerName'>
                      <span>{travelerName}</span>
                      <p>{travelerUsername}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
