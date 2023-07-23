import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import Search from '../Search';

const Header = ({setResults, setTotalCount}) => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox vAlign={Alignment.right}>
			<Search setResults={setResults} setTotalCount={setTotalCount}/>
		</FlexBox>
	</header>
);

export default Header;
