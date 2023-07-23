import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import Search from '../Search';

const Header = ({setResults, setTotalCount, setSearchTerm}) => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox vAlign={Alignment.right}>
			<Search setResults={setResults} setTotalCount={setTotalCount} setSearchTerm={setSearchTerm}/>
		</FlexBox>
	</header>
);

export default Header;
