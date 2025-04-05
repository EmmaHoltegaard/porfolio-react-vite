import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introHeight = document.getElementById("intro")?.offsetHeight || 300;

        
    console.log("scrollY:", window.scrollY);
    console.log("introHeight:", introHeight);
    console.log("visible?", window.scrollY > introHeight - 100);

      setIsVisible(window.scrollY > introHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return isVisible && (
    <>
      {!menuOpen && (
        <BurgerButton onClick={() => setMenuOpen(true)}>
          <GiHamburgerMenu size={24} />
        </BurgerButton>
      )}

      {menuOpen && (
        <FloatingMenu>
          <CloseButton onClick={() => setMenuOpen(false)}>
            <IoMdClose size={24} />
          </CloseButton>

          <a href="#intro" onClick={handleLinkClick}>↑ Top</a>
          <a href="#tech" onClick={handleLinkClick}>Tech</a>
          <a href="#education" onClick={handleLinkClick}>Education</a>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </FloatingMenu>
      )}
    </>
  );
};

export default FloatingNav;

const BurgerButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1001;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 50%;
  padding: 12px;
  color: white;
  cursor: pointer;
  opacity: 0;
  animation: fadeIn 0.4s ease forwards;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;

const FloatingMenu = styled.nav`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(20, 20, 20, 0.80);
  padding: 20px 20px 20px 20px;
  border-radius: 16px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  animation: fadeIn 0.3s ease;

  a {
    color: white;
    text-decoration: none;
    font-size: 0.95rem;
    &:hover {
      text-decoration: underline;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`