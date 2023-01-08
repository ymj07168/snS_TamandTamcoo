import React from 'react';

//style
import {Container} from './style';

const index =(props)=>{
    const {text} = props;
    return(
        <Container>
            {text}
        </Container>
    )
}

export default index;