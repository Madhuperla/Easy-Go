import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';


const Footer = () => {


  const toggleHome = () =>  {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>

        {/* <FooterLinksContainer>
          <FooterLinksWrapper>

            <FooterLinkItems>
            <FooterLinkTitle> About us </FooterLinkTitle> 
            <FooterLink to="/signin">How to</FooterLink>
            <FooterLink to="/signin">Testimnl</FooterLink>
            <FooterLink to="/signin">invstrs</FooterLink>
            <FooterLink to="/signin">Term ofs</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
            <FooterLinkTitle> About us </FooterLinkTitle> 
            <FooterLink to="/signin">How to</FooterLink>
            <FooterLink to="/signin">Testimnl</FooterLink>
            <FooterLink to="/signin">invstrs</FooterLink>
            <FooterLink to="/signin">Term ofs</FooterLink>
            </FooterLinkItems>

          </FooterLinksWrapper>
        </FooterLinksContainer> */}
        
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>EasyGo</SocialLogo>
            {/* <WebsiteRights>EasyGo © 2023 </WebsiteRights> */}
            <WebsiteRights>EasyGo © {new Date().getFullYear()} All rights Reserved.</WebsiteRights>
         <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook/>
            </SocialIconLink> 
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram/>
            </SocialIconLink> 
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIN">
                <FaLinkedin/>
            </SocialIconLink>

            <SocialIconLink href="/" target="_blank" aria-label="twitter">
                <FaTwitter/>
            </SocialIconLink> 
            
         </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>

      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer