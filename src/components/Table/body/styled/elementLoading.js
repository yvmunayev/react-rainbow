import styled from 'styled-components';
import attachThemeAttrs from '../../../../styles/helpers/attachThemeAttrs';
import { replaceAlpha } from '../../../../styles/helpers/color';

const StyledElementLoading = attachThemeAttrs(styled.div)`
    height: 10px;
    object-fit: contain;
    border-radius: 24px;
    z-index: 1;
    background: ${props => replaceAlpha(props.palette.background.secondary, 0.5)}
        linear-gradient(
            90deg,
            ${props => replaceAlpha(props.palette.background.highlight, 0.01)} 0%,
            ${props => replaceAlpha(props.palette.background.highlight, 0.7)} 50%,
            ${props => replaceAlpha(props.palette.background.highlight, 0.01)} 100%
        );
    background-size: 400% 400%;
    animation: gradient 2.5s ease-in-out infinite;
    filter: invert(3%); 
    
    @keyframes gradient {
        0% {
            background-position: 14% 0;
        }

        50% {
            background-position: 87% 100%;
        }

        100% {
            background-position: 14% 0;
        }
    }
`;

export default StyledElementLoading;
