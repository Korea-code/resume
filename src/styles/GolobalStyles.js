import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export default createGlobalStyle`
    ${reset}
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap');
    *{
        box-sizing:border-box;
        
    }
    
    body {
        background-color: ${(props) => props.theme.blackColor};
        color: ${(props) => props.theme.greyColor};
        font-family: 'Noto Sans KR', sans-serif;
        min-height: 700px;
    }
    a {
        color: ${(props) => props.theme.darkGreenColor};
        text-decoration: none;
    }
    
`;
