import Hero from "../../components/hero/hero";
import AutoMarkLine from "../../components/autoBrend/autoBrend";
import WhoWeAre from "../../components/whoWeAre/whoWeAre";
import TopSearch from "../../components/topSearch/topSearch";
import Proposition from "../../components/ourProposition/ourProposition";
import AutoLogo from "../../components/autoLogo/autoLogo";

import React from "react";

const MainPage = () => {
	return (
		<div>
			<Hero />
			<AutoMarkLine />
			<WhoWeAre />
			<TopSearch />
			<Proposition />
			<AutoLogo />
		</div>
	);
};

export default MainPage;
