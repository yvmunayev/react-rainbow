import styled from 'styled-components';
import { COLOR_GRAY_4 } from '../../../styles/colors';
import { FONT_SIZE_TEXT_MEDIUM } from '../../../styles/fontSizes';
import { MARGIN_SMALL, MARGIN_XX_SMALL } from '../../../styles/margins';

const StyledLegend = styled.legend`
    border: 0;
    padding: 0;
    display: inline-block;
    color: ${COLOR_GRAY_4};
    font-size: ${FONT_SIZE_TEXT_MEDIUM};
    line-height: 1.5;
    margin-right: ${MARGIN_SMALL};
    margin-bottom: ${MARGIN_XX_SMALL};
    box-sizing: border-box;
`;

export default StyledLegend;
