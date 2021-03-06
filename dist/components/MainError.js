import React from 'react';
//@ts-ignore
import Header from './Header';
import Error from './Error';
import Footer from './Footer';
function MainError() {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(Error, null),
        React.createElement(Footer, null)));
}
export default MainError;
