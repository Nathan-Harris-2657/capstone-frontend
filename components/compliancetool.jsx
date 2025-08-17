import { useState } from "react"

import Selector from "./selector"


function ComplianceTool(){

    const handlePrint = () => {
        window.print();}



    return(
        <>
    <div id="compContainer">
        <div id="brakesContainer">
            
            <div className="comps">
                <div>Service Brakes</div>
                <div>Parking Brake System</div>
                <div>Brake Drums or Rotors</div>
                <div>Brake Hose</div>
                <div>Brake Tubing</div>
                <div>Low Pressure Warning Device</div>
                <div>Tractor Protection Valve</div>
                <div>Air Compressor</div>
                <div>Electric Brakes</div>
                <div>Hydraulic Brakes</div>
                <div>Vacuum Systems</div>
                <div>Antilock Brake System</div>
                <div>Automatic Brake Adjusters</div>
            </div>
            
            

            <div id="selectionContainer">
                <Selector/><Selector/><Selector/><Selector/><Selector/><Selector/>
                <Selector/><Selector/><Selector/><Selector/><Selector/><Selector/>
                <Selector/>
            </div>

            
        </div>

        <div id="couplingContainer">
            
            <div className="comps">
                <div>Fifth Wheels</div>
                <div>Pintle Hooks</div>
                <div>Drawbar/Towbar Eye</div>
                <div>Drawbar/Towbar Tongue</div>
                <div>Safety Devices</div>
                <div>Saddle-Mounts</div>
            </div>

            <div id="selectionContainer">
                <Selector/><Selector/><Selector/><Selector/><Selector/><Selector/>
            </div>
        </div>


        <div id="fuelContainer">
           
            <div className="comps">
                <div>No visible leaks</div>
                <div>Missing filler cap</div>
                <div>Secure tank attachment</div>
            </div>

            <div id="selectionContainer">
                <Selector/><Selector/><Selector/>
            </div>

        </div>

        <div id="exhaustContainer">
           
            <div className="comps">
                <div>Leaks forward of or below driver/sleeper compartment</div>
                <div>Discharges violating standards</div>
                <div>Secured against shifting or vibration</div>
            </div>

            <div id="selectionContainer">
                <Selector/><Selector/><Selector/>
            </div>

        </div>

        <div id="safeLoadingContainer">
            
            <div className="comps">
                <div>Vehicle parts, load, dunnage, spare tire, ect. secured</div>
                <div>Front End Structure</div>
                <div>Intermodal Container Securment Devices</div>
            </div>

            <div id="selectionContainer">
                <Selector/><Selector/><Selector/>
            </div>

        </div>

        <div id="steeringMechContainer">
            
            <div className="comps">
                <div>Sterring Wheel Free Play</div>
                <div>Steering Column</div>
                <div>Front Axle Beam/All Other Steering Components</div>
                <div>Steering Gear Box</div>
                <div>Pitman Arm</div>
                <div>Power Steering</div>
                <div>Ball and Socket Joints</div>
                <div>Tie Rods and Drag Links</div>
                <div>Nuts</div>
                <div>Steering System</div>
            </div>

            <div id="selectionContainer">
                <Selector/><Selector/><Selector/><Selector/><Selector/><Selector/><Selector/><Selector/><Selector/><Selector/>
            </div>
        </div>

        <div id="suspContainer">
            
            <div className="comps">
                <div>Axle Positioning Parts</div>
                <div>Spring Assembly</div>
                <div>Torque, Radius or Tracking Components</div>
            </div>

            <div id="selectionContainer">
                <Selector/><Selector/><Selector/>
            </div>
        </div>

        <div id="frameContainer">
           
            <div className="comps">
                <div>Frame Members</div>
                <div>Tire and Wheels Clearance</div>
                <div>Adjustable Axle Assemblies</div>
            </div>

            <div id="selectionContainer">
                <Selector/><Selector/><Selector/>
            </div>
        </div>

        <div id="tiresContainer">
            
            <div className="comps">
                <div>Steer-Axle Tires</div>
                <div>All Other Tires</div>
                <div>Speed-Restricted Tires</div>
            </div>

            <div id="selectionContainer">
                <Selector/><Selector/><Selector/>
            </div>
        </div>

        <div id="wheelContainer">
            
            <div className="comps">
                <div>Lock or Side Ring</div>
                <div>Wheels and Rims</div>
                <div>Fasteners</div>
                <div>Welds</div>
            </div>

            <div id="selectionContainer">
                <Selector/><Selector/><Selector/><Selector/>
            </div>
        </div>

        <div id="windshieldContainer">
            
            <div className="comps">
                <div>NO crack, discoloration, obstacles, etc</div>
            </div>

            <div id="selectionContainer">
                <Selector/>
            </div>
        </div>

         <button id="printButton" onClick={handlePrint}> Print Your Check List Here</button>


    </div>
    
        </>
    )
}
export default ComplianceTool
