import React from 'react';
import imageDictionary from '../utils/imageDictionary.js';
import { Container, BigText, BigIcon, Description } from './Styles';

const Loading = (props) => {
    return (
        <Container>
            <BigText>Splash</BigText>
            {/* <BigIcon source={imageDictionary["01d"]} /> */}
            <Description>로딩중...</Description>
        </Container>
    );
};
export default Loading;
