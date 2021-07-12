import React from 'react'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.jpg'



const Destinations = () => {
  return (
    <section className='destinations'>
      <h3>Now available in all states of India !!</h3>
      <div className='grid'>
     
        <div>
          <img src={image1} alt='destination-1' />
          <h3>Luxury Rooms</h3>
          <p>
            Feel like a king and experience the best of the best of holidays. All luxuries inside your room!
          </p>
        
        </div>

        <div>
          <img src={image2} alt='destination-2' />
          <h3>Mid-range Rooms</h3>
          <p>
           Enjoy the best stay in the place. This make you feel special with pocket friendly rates!
          </p>
        </div>

        <div>
          <img src={image3} alt='destination-3' />
          <h3>Budget Rooms</h3>
          <p>
            We deliver the best with low budget for you. Explore the pocket friendly stays with us!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Destinations