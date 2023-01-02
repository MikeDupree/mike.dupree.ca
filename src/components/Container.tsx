import React, { ReactNode } from 'react'
import styled from '@emotion/styled';

const StyledContainer = styled.div({
    padding: '51px 25px 0',
  },
);

type Props = {
  children: ReactNode;
}

const Container = ({ children, ...rest }: Props) => {
  return (
    <StyledContainer {...rest}>{children}</StyledContainer>
  )
}

export default Container
