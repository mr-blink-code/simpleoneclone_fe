import React from 'react';
import PropTypes from 'prop-types';
import {Stack} from 'react-bootstrap';

function Progres({ now }) {
  // Define the styles as JavaScript objects
  const progressBarContainerStyle = {
    position: 'relative',
    width: '5px',   // Fixed width for vertical bar
    height: '100%',  // Full height of its parent
    backgroundColor: 'lightgrey', // Background color of the progress bar container
    borderRadius: '5px', // Rounded corners
    border: '1px solid #fff',
    overflow: 'hidden', // Ensures the progress indicator doesn't overflow the container
  };

  const progressBarFillStyle = {
    width: '100%', // Full width of the container
    height: `${now}%`, // Height based on the 'now' prop
    backgroundColor: 'grey', // Color of the progress indicator
    transition: 'height 0.3s ease-out', // Smooth transition effect
    position: 'absolute', // To ensure it fills from the bottom up
    top: 0, // Align the fill from the bottom of the container
  };
  
  const progressposition = {
    height: '70vh',
    width: '20px',
    position: 'relative',
  };

  const shadow ={
    position: 'absolute',
    top: '0%',
    left: '-100px',
    width: '100px',
    height: '70vh', /* Adjust height to control shadow size */
    background: 'linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent)',
    Zindex: '-1',
  }

const imageDiv={
  marginTop:'6vh'
}
const imageDivglow={
  marginTop:'6vh',
  filter: 'drop-shadow(1px 1px 2px rgba(255, 255, 255, .85))'
}

const caption={
  position:'absolute',
  textWarp:'none',
  backgroundColor:'white',
  width:'auto',
  textAlign: 'center',
}

  if(now<=33)
    {
      var tezt=(<div style={caption}><h1>Peer through your vehicle details in the Settings Screen</h1></div>)
      var icons=(
    <Stack className='mt-5'gap={5}>
    <img className='ms-4 p-4' style={imageDivglow} src='https://simpleenergy.in/_next/static/media/icon_settings_active.a3c7aa2f.png' alt='settings icon'/>
    <img className='ms-3 p-4' style={imageDiv} src='https://simpleenergy.in/_next/static/media/ic_locationmarker.b464417c.png' alt='map icon'/>
    <img className='ms-3 p-4' style={imageDiv} src='https://simpleenergy.in/_next/static/media/icon_charging.55b8401f.png' alt='settings icon'/>
    </Stack>)}
else if(now>=33 && now<=66)
{
  tezt=(<div style={caption}><h1>Navigate precisely to your destintions with onboard maps</h1></div>)  
  icons=(
    <Stack className='mt-5'gap={5}>
    <img className='ms-4 p-4' style={imageDiv} src='https://simpleenergy.in/_next/static/media/icon_settings.3d9de1e2.png' alt='settings icon'/>
    <img className='ms-3 p-4' style={imageDivglow} src='https://simpleenergy.in/_next/static/media/ic_locationmarker_active.d8a64334.png' alt='map icon'/>
    <img className='ms-3 p-4' style={imageDiv} src='https://simpleenergy.in/_next/static/media/icon_charging.55b8401f.png' alt='settings icon'/>
    </Stack>)
}
else{ 
  tezt=(<div style={caption}><h1>Charge your scooter as per your perfomance requirements</h1></div>)  
  icons=(
    <Stack className='mt-5'gap={5}>
    <img className='ms-4 p-4' style={imageDiv} src='https://simpleenergy.in/_next/static/media/icon_settings.3d9de1e2.png' alt='settings icon'/>
    <img className='ms-3 p-4' style={imageDiv} src='https://simpleenergy.in/_next/static/media/ic_locationmarker.b464417c.png' alt='map icon'/>
    <img className='ms-3 p-4' style={imageDivglow} src='https://simpleenergy.in/_next/static/media/icon_charging_active.af98f0fb.png' alt='settings icon'/>
    </Stack>)}
  console.log(now);

  return (
    <div 
    role="progressbar" 
    aria-valuenow={now} 
    aria-valuemin="0" 
    aria-valuemax="100" 
    aria-label="Vertical progress bar" 
    style={progressposition}>
      <div style={shadow}>
      {icons}
      </div>
      <div style={progressBarContainerStyle}>
        <div style={progressBarFillStyle}></div>
      </div>
    </div>
  );
}

Progres.propTypes = {
  now: PropTypes.number.isRequired,
};

Progres.defaultProps = {
  now: 0,
};

export default Progres;
