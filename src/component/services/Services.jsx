import React from 'react'
import './serives.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What Skills I have</h5>
      <h2>Skills</h2>

      <div className="container skills__container">
        <article className="skills">
          <div className="skill__head">
            <h3>Data Structures & Algorithms</h3>
          </div>

          <ul className="skills__lists">
            <li>
              <BiCheck className='skills__list-icon' />
              <p>Solved 300+ problems on Leetcode based on DSA</p>
            </li>
            <li>
              <BiCheck className='skills__list-icon' />
              <p>A coding score of 300+ on Geeks For Geeks</p>
            </li>
            <li>
              <BiCheck className='skills__list-icon' />
              <p>Completed Udemy certified Course of DSA in Java By Elshad Karimov.</p>
            </li>
          </ul>
        </article>


        <article className="skills">
          <div className="skill__head">
            <h3>Development</h3>
          </div>

          <ul className="skills__lists">
            <li>
              <BiCheck className='skills__list-icon' />
              <p>Well Equpped with Knowledge in HTML,CSS and Javascript</p>
            </li>
            <li>
              <BiCheck className='skills__list-icon' />
              <p>A decent Knowledge of Backend Technologies like Node,Express and MongoDB</p>
            </li>
            <li>
              <BiCheck className='skills__list-icon' />
              <p>Expertse in ReactJs using Which I made This Portfolio Website</p>
            </li>
            <li>
              <BiCheck className='skills__list-icon' />
              <p>Completed Udemy Certified Web development Course By Angela Yu</p>
            </li>
          </ul>
        </article>


        <article className="skills">
          <div className="skill__head">
            <h3>Competitive Programming</h3>
          </div>

          <ul className="skills__lists">
            <li>
              <BiCheck className='skills__list-icon' />
              <p>Pupil On Codeforces(Max-1302)</p>
            </li>
            <li>
              <BiCheck className='skills__list-icon' />
              <p>4-star raing on CodeChef(Max-1830)</p>
            </li>
            <li>
              <BiCheck className='skills__list-icon' />
              <p>Global Rank 17 In Starters 105 Division 3 (CodeChef)</p>
            </li>
            <li>
              <BiCheck className='skills__list-icon' />
              <p>Global Rank 65 In Starters 114 Division 3 (CodeChef)</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
