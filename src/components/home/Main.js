import React from 'react';
import classes from './Main.module.css'
// import Intro from './Intro'
import Exchange from './Exchange'
import Team from './Team'
import Audits from './Audits'
import Ecosystem from './Ecosystem/Ecosystem'
import SpecialFeatures from './SpecialFeatures'
import IntroNew from './Intro/IntroNew'

function Main() {
    return (
        <div className={classes.main}>
            <IntroNew />
            {/* <Intro /> */}
            <Exchange />
            <SpecialFeatures />
            <Ecosystem />
            <Audits />
            <Team />

        </div>
    )
}

export default Main
