import React, { useState } from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import AliceCarousel from 'react-alice-carousel'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Button } from '@mui/material'
import { mens_kurta } from '../../../Data/Mens_Kurta'

const HomeSectionCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0 : {items : 1},
        720 : {items : 3},
        1024 : {items : 4.5}
    }

    const items = mens_kurta.slice(0,10).map((item) => <HomeSectionCard product={item} />)

    const slidePrev = () => setActiveIndex(activeIndex-1)
    const slideNext = () => setActiveIndex(activeIndex+1)

    const syncActiveIndex = ({item}) => setActiveIndex(item);

    return (
    <div className='border'>
       <div className='p-5 relative'>
            <AliceCarousel
              items={items}
              responsive={responsive}
              disableButtonsControls
              disableDotsControls
              onSlideChanged={syncActiveIndex}
              activeIndex={activeIndex}
            />

            {
                <Button onClick={slideNext} variant='contained' className='z-50 bg-white' 
                sx={{position : "absolute", top:'8rem' , right:'0rem', bgcolor:'white', transform: 'translateX(50%) rotate(90deg)'}}  >
                    <KeyboardArrowLeft sx={{color:'black', transform : 'rotate(90deg)'}} />
                </Button>
            }

            {
                <Button onClick={slidePrev} variant='contained' sx={{position:'absolute', top:'8rem', left:'0', bgcolor:'white', transform: 'translateX(-50%) rotate(-90deg)'}}>
                    <KeyboardArrowRight sx={{color:'black', transform:'rotate(-90deg)'}} />
                </Button>
            }
       </div>
    </div>
  )
}

export default HomeSectionCarousel