import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import { ButtonR } from '../ButtonElements'
import { ServicesContainer, ServicesH1, Servicesp, ServicesWrapper, ServicesCard, ServicesCardTwo, ServicesIcon, ServicesH2, ServicesP, SocialIconLink } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>OurServices</ServicesH1>
      <Servicesp>We know above features make your college life easier but we wan't to make it way more easier with some other features</Servicesp>
      <ServicesWrapper>

        <ServicesCard to='/otherserviceshaf'>
           <ServicesIcon src={Icon1} />
           <ServicesH2>Help Buddy</ServicesH2>
           <ServicesP>We help your friends who can't travel for some reasons.</ServicesP>
        </ServicesCard>

        <ServicesCard to='/otherservicesebt'>
           <ServicesIcon src={Icon2} />
           <ServicesH2>Extra Tickets</ServicesH2>
           <ServicesP>Need extra tickets or got extra ticktes buy/sell them here</ServicesP>
        </ServicesCard>

        <SocialIconLink href="mailto:vadlakondakrishna219@gmail.com" target="_blank" aria-label="twitter">
        <ServicesCardTwo>
           <ServicesIcon src={Icon3} />
           <ServicesH2>FeedBack Us</ServicesH2>
           <ServicesP> Did we meet your expectations? let us know from your reviews .</ServicesP>
        </ServicesCardTwo>
        </SocialIconLink> 


      </ServicesWrapper>

      {/* <ButtonR to='/otherservices' >Explore</ButtonR> */}
    </ServicesContainer>
    
  )
}

export default Services