import React from 'react'
import GridItem from '../../layout/GridItem'
import Interactive from '../../layout/InteractiveIcon'
import UnAnimatedNavBar from './UnAnimatedNavBar/unAnimatedNavBar'
import AnimatedNavBar from './AnimatedNavBar/AnimatedNavBar'
import styled from 'styled-components'

const AnimatedNavBarsWrapper = styled.div`
min-width:600px;
    display:flex;
    flex-direction:column;
`

function AnimatedNav() {
    return (
        <GridItem backgroundColor="hsla(200, 42%, 93%, 1.00)"
        link="https://codesandbox.io/s/exciting-visvesvaraya-ouz89?file=/src/navigaiton/nav/Navigation.js:0-2663"
    >
        <Interactive />
        <AnimatedNavBarsWrapper>
         <UnAnimatedNavBar />   
         <AnimatedNavBar />
        </AnimatedNavBarsWrapper>
        </GridItem>

    )
}

export default AnimatedNav
