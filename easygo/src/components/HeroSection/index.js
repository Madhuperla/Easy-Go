import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import Skater from '../../videos/skater.mp4'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
// import { Button } from 'react-scroll'

export const HeroSection = () => {

    const [hover,setHover]=useState(false);

    const OnHover=() => {
        setHover(!hover);
    }


  return (
    <HeroContainer id="home">
        <HeroBg>
            {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
            <VideoBg autoPlay loop muted src={Skater} type='video/mp4'/>
        </HeroBg>

        <HeroContent>
            <HeroH1>College Life Made Easy</HeroH1>
            <HeroP>
                Now college life is made much easier .. cheaper and better ... to know more explore our website.
            </HeroP>
            <HeroBtnWrapper>
            <Button to="travelbuddy" 
            onMouseEnter={OnHover} 
            onMouseLeave={OnHover} 
            primary='true' 
            dark='true'
            smooth={true} 
            duration={500} 
            spy={true} 
            exact='true' 
            offset={-80} 
         >
            Get Started {hover? <ArrowForward/> : <ArrowRight/>}
            </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection