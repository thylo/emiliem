import React from 'react';
import styled from "styled-components";
import Footer from "../footer";

const Wrapper = styled.section``;

export const PageWrapper = ({children})=>(<Wrapper>
    {children}
    <Footer />
</Wrapper>);