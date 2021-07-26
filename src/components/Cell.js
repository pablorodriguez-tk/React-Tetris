import React from 'react';
import { TETROMINOS } from '../tetrominos';
import { StyledCell } from './styles/StyleCell';

const Cell = ({ type }) => {
  return (
    <StyledCell type={'L'} color={TETROMINOS['L'].color}>
      Cell
    </StyledCell>
  );
};

export default Cell;
