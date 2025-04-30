import Hero from "../../components/hero"
import AutoMarkLine from "../../components/autoMark"
import WhoWeAre from "../../components/whoWeAre"
import TopSearch from "../../components/topSearch"
import Proposition from "../../components/ourProposition"

import React from 'react'

const MainPage = () => {
  return (
    <div>
      <Hero/>
      <AutoMarkLine />
      <WhoWeAre/>
      <TopSearch/>
      <Proposition />
    </div>
  )
}

export default MainPage