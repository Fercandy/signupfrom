import React, {Component} from 'react';
import Authenticate from "../HOC/AuthRequired";

const InnerPage = () => (
    <div>U have authority to see this page!</div>
);

export default Authenticate(InnerPage);