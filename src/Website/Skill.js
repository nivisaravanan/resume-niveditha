import React from 'react';
import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiJquery } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

const Skill = () => {
  return (
    <div>
      <div className='skill'>
          <div className='skill-head'>
            <h1 className='skill-my'>My</h1>
            <h1 className='skill-skill'>Skill</h1>
          </div>
          <div className='skill-content'>
            <div className='technical-skill'>
              <h3 className='techinical-head'>Technical skill</h3>
              <div className='technical-bar'>
                <div className='bar' style={{ color: "#c95d2e" }}>
                 <FaHtml5 />
                  <div className='info'>
                    <span style={{ color: "white" }} className='infohtml'>HTML</span>
                  </div>
                  <div className='progress-line html'>
                    <span></span>
                  </div>
                </div>
                <div className='bar' style={{ color: "#147bbc" }}><FaCss3Alt />
                  <div className='info'>
                    <span style={{ color: "white" }}>CSS</span>
                  </div>
                  <div className='progress-line css'>
                    <span></span>
                  </div>
                </div>
                <div className='bar' style={{ color: "#b0bc1e" }}><DiJavascript1 />
                  <div className='info'>
                    <span style={{ color: "white" }}>JavaScript</span>
                  </div>
                  <div className='progress-line javascript'>
                    <span></span>
                  </div>
                </div>
                <div className='bar' style={{ color: "#c32ec9" }}><SiJquery />
                  <div className='info'>
                    <span style={{ color: "white" }}>JQuery</span>
                  </div>
                  <div className='progress-line jquery'>
                    <span></span>
                  </div>
                </div>
                <div className='bar' style={{ color: "#69cb5" }}><FaReact />
                  <div className='info'>
                    <span style={{ color: "white" }}>React</span>
                  </div>
                  <div className='progress-line react'>
                    <span></span>
                  </div>
                </div>
                <div className='bar' style={{ color: "#1daa67" }}><SiMongodb />
                  <div className='info'>
                    <span style={{ color: "white" }}>Mongo DB</span >
                  </div>
                  <div className='progress-line mongodb'>
                    <span></span>
                  </div>
                </div>
                <div className='bar' style={{ color: "#5a7e2b" }}><DiNodejs />
                  <div className='info'>
                    <span style={{ color: "white" }}>Node Js</span>
                  </div>
                  <div className='progress-line nodejs'>
                    <span></span>
                  </div>
                </div>
              </div>
              </div>
            <h3 className='professional-head'>Professional skill</h3>
            <div className='Professional-Skill'>

              <div className='radial1'>
                <div className='radial-bar1'>
                  <svg x={"0px"} y={"0px"} viewBox={'0 0 200 200'}>
                    <circle className='progress-bar' cx={"100"} cy={"100"} r={"80"}></circle>
                    <circle className='path path-1' cx={"100"} cy={"100"} r={"80"}></circle>

                  </svg>
                  <div className='percent' style={{ color: "white" }}>80%</div>
                  <div className='text' style={{ color: "white" }}>Creativity</div>
                </div>
                <div className='radial-bar2'>
                  <svg x={"0px"} y={"0px"} viewBox={'0 0 200 200'}>
                    <circle className='progress-bar' cx={"100"} cy={"100"} r={"80"}></circle>
                    <circle className='path path-2' cx={"100"} cy={"100"} r={"80"}></circle>

                  </svg>
                  <div className='percent' style={{ color: "white" }}>70%</div>
                  <div className='text' style={{ color: "white" }}>Communication</div>
                </div>
              </div>
              <div className='radial2'>
                <div className='radial-bar3'>
                  <svg x={"0px"} y={"0px"} viewBox={'0 0 200 200'}>
                    <circle className='progress-bar' cx={"100"} cy={"100"} r={"80"}></circle>
                    <circle className='path path-3' cx={"100"} cy={"100"} r={"80"}></circle>

                  </svg>
                  <div className='percent' style={{ color: "white" }}>75%</div>
                  <div className='text' style={{ color: "white" }}>Problem solving</div>
                </div>
                <div className='radial-bar4'>
                  <svg x={"0px"} y={"0px"} viewBox={'0 0 200 200'}>
                    <circle className='progress-bar' cx={"100"} cy={"100"} r={"80"}></circle>
                    <circle className='path path-4' cx={"100"} cy={"100"} r={"80"}></circle>

                  </svg>
                  <div className='percent' style={{ color: "white" }}>85%</div>
                  <div className='text' style={{ color: "white" }}>Team Work</div>
                </div>
              </div>


            </div>
          </div>
        </div>
    </div>
  )
}

export default Skill