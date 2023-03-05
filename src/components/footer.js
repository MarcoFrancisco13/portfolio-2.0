import React from 'react'

import Container from './container'


const Footer = () => (
  <Container as="footer">
    <div class="flex flex-col justify-center text-center py-8 bg-[#36454F]">
        <div class="flex flex-row justify-center">
          <div class="flex w-3/4 min-[767px]:w-1/4 text-5xl justify-around text-[#f97419]">
            <a
              href="https://www.linkedin.com/in/marco-francisco-5aa8ab1a1/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin hover:text-[#db6616]"></i>
            </a>
            <a href="mailto:mfranciscowork13@gmail.com">
              <i class="fa-solid fa-envelope hover:text-[#db6616]"></i>
            </a>
            <a href="https://github.com/MarcoFrancisco13" target="_blank">
              <i class="fa-brands fa-github hover:text-[#db6616]"></i>
            </a>
          </div>
        </div>
      </div>
  </Container>
)

export default Footer
