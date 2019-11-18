import React from 'react';
import PropTypes from 'prop-types';
import StyledEmptyContainer from './styled/emptyContainer';
import StyledEmptyIcon from './styled/emptyIcon';
import StyledEmptyTitle from './styled/emptyTitle';
import StyledEmptyDescription from './styled/emptyDescription';

export default function Empty(props) {
    const { emptyIcon, emptyTitle, emptyDescription, columnsLength } = props;

    return (
        <tr>
            <td colSpan={columnsLength}>
                <StyledEmptyContainer>
                    <StyledEmptyIcon>{emptyIcon}</StyledEmptyIcon>
                    <StyledEmptyTitle>{emptyTitle}</StyledEmptyTitle>
                    <StyledEmptyDescription>{emptyDescription}</StyledEmptyDescription>
                </StyledEmptyContainer>
            </td>
        </tr>
    );
}

Empty.propTypes = {
    columnsLength: PropTypes.number,
    emptyIcon: PropTypes.node,
    emptyTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    emptyDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Empty.defaultProps = {
    columnsLength: 0,
    emptyIcon: undefined,
    emptyTitle: undefined,
    emptyDescription: undefined,
};
