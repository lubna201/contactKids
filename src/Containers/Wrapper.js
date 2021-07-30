/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Home from "./Home";
import '../Assets/Background/BackgroundSetUp.css';
import gsap from 'gsap'
import NavBar from "../Components/NavBar";
import BGSect from "../Components/Backgrounds/BGSect";

class Wrapper extends React.Component {
  // When leaving each section, do this
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);

    // Initial Page
    if (destination.index === 0) {
      // Select items using id
      // Previous section reset anim
      const rec1 = document.querySelectorAll('#rec-s0-1');
      const rec2 = document.querySelectorAll('#rec-s0-2');
      const circle = document.querySelectorAll('#circle-s0');
      const tri = document.querySelectorAll('#tri-s0');
      const wwaLeft = document.querySelectorAll('#wwa-left');
      const wwaRight = document.querySelectorAll('#wwa-right');
      const wwaTop = document.querySelectorAll('#wwa-top');

      // Next section reset anim
      const rec1Last = document.querySelectorAll('#rec-s1-1');
      const rec2Last = document.querySelectorAll('#rec-s1-2');
      const circleLast = document.querySelectorAll('#circle-s1');
      const triLast = document.querySelectorAll('#tri-s1');

      // Animate using gsap library/properties, tri is an svg with css and attribute props
      // Previous section reset anim
      let tl = gsap.timeline();
      tl.to(rec1, 0.5, {y: 100}, {y: 0})
      tl.to(rec2, 0.5, {y: -100}, {y: 0})
      tl.to(circle, 0.5, {x: -100}, {x: 0})
      tl.to(tri, 2, {css:{left:0}}, {css:{left:100}})

      gsap.fromTo(wwaLeft, {opacity: 0.5,x: -100}, {opacity: 1,x: 0, duration: 3});
      gsap.fromTo(wwaRight, {opacity: 0.5,x: 100}, {opacity: 1,x: 0, duration: 3});
      gsap.fromTo(wwaTop, {opacity: 0.5,Y: 100}, {opacity: 1,Y: 15, duration: 5});

      // Next section reset anim
      tl.to(rec1Last, 0.5, {y: 0}, {y: -100})
      tl.to(rec2Last, 0.5, {y: 0}, {y: 100})
      tl.to(circleLast, 0.5, {x: 0}, {x: 100})
      tl.to(triLast, 2, {css:{left:-100}}, {css:{left:0}})
    }
  }

  // Initial loading, do this
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
    if (destination.index === 0) {
      // Select items using id
      // Initial section load anim
      const rec1 = document.querySelectorAll('#rec-s0-1');
      const rec2 = document.querySelectorAll('#rec-s0-2');
      const circle = document.querySelectorAll('#circle-s0');
      const tri = document.querySelectorAll('#tri-s0');

      const wwaLeft = document.querySelectorAll('#wwa-left');
      const wwaRight = document.querySelectorAll('#wwa-right');
      const wwaTop = document.querySelectorAll('#wwa-top');

      gsap.fromTo(wwaLeft, {opacity: 0.5,x: -100}, {opacity: 1,x: 0, duration: 3});
      gsap.fromTo(wwaRight, {opacity: 0.5,x: 100}, {opacity: 1,x: 0, duration: 3});
      gsap.fromTo(wwaTop, {opacity: 0.5,Y: 100}, {opacity: 1,y: 15, duration: 5});

      // Animate using gsap library/properties, tri is an svg with css and attribute props
      // Initial section load anim
      let tl = gsap.timeline();
      tl.to(rec1, 0.5, {y: 100}, {y: 0})
      tl.to(rec2, 0.5, {y: -100}, {y: 0})
      tl.to(circle, 0.5, {x: -100}, {x: 0})
      tl.to(tri, 2, {css:{left:0}}, {css:{left:100}})
    }
  }

  render() {
    /* Keep the sizing of pages within the proper vh for all devices */
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    return (
      <>
      {/* Send props to NavBar to allow access to the sections associated 
      window.fullpage_api is the global variable to access the fullPageApi */}
      <NavBar handleGoToTop={() => window.fullpage_api.moveTo(1)}
      handleWhatWeDo={() => window.fullpage_api.moveTo(2)}/>
      {/* Properties of FullPage.js
      For more info: readme file https://github.com/alvarotrigo/fullPage.js/#fullpagejs */}
      <ReactFullpage
        scrollOverflow={true}
        sectionsColor={["transparent", "transparent", "transparent"]}
        navigation={true}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <>
            <div id="fullpage-wrapper">
              <div className="section section1">
                {/* Send the section# through props to access css per id*/}
                <BGSect section={"s0"}/>
                {/* Send props to buttons/clickable areas */}
                <Home />
              </div>
            </div>
            </>
          );
        }}
      />
    </>
    );
  }
}

export default Wrapper;