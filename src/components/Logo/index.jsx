// @flow

import React from 'react';

type PropsT = {
    src: string,
    alt?: string
}
const Logo = ({src, alt}: PropsT) => (<img src={src} alt={alt} />)
 
export default Logo;