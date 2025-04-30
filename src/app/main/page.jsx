import Hero from "../../components/hero"
import AutoMarkLine from "../../components/autoMark"
import WhoWeAre from "../../components/whoWeAre"
import TopSearch from "../../components/topSearch"
import Proposition from "../../components/ourProposition"
import AutoLogo from "../../components/autoLogo"

import React from 'react'

const MainPage = () => {
  return (
    <div>
      <Hero/>
      <AutoMarkLine />
      <WhoWeAre/>
      <TopSearch/>
      <Proposition />
      <AutoLogo/>
    </div>
  )
}

export default MainPage