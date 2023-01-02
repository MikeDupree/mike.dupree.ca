import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

type Props = {}

const DynamicNavigationLink = () => {
  const { asPath } = useRouter();
  const uriArgs = asPath.split('/');
  if (uriArgs.length > 2) {
    return (
      <div style={{ padding: '3px 20px' }}>
        <Link href={`/${uriArgs[1]}`}><><div style={{ color: '#DA7110', display: 'inline', fontSize: '1.5rem' }}>{`↚`} </div>{`${uriArgs[1].toUpperCase()}`}</></Link>
      </div>
    )
  }
  return <></>
}

const StyledHeader = styled.div({
  padding: '0 25px',
  position: 'sticky',
  top: 0,
  width: '100%',
  height: '51px',
  background: '#282a36',
},
);

const Header = (props: Props) => {
  const { asPath } = useRouter();
  if (asPath === '/') return <></>;

  return <StyledHeader>
    <div style={{ padding: '10px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.13)', fontSize: '1.2rem', display: 'flex', alignContent: 'space-between' }}>
      <div style={{ width: '33%' }}>
        <Link href="/">
          <p style={{
            margin: '0',
            fontSize: '1.5rem',
            fontFamily: 'Yellowtail, cursive'
          }} >Michael Dupree</p>
        </Link>
      </div>
      <div style={{ width: '33%', textAlign: 'center' }}>
      {asPath.split('/').pop()}
      </div>
      <div style={{ width: '33%', display: 'flex', justifyContent: 'flex-end' }}>
        <DynamicNavigationLink />
      </div>
    </div>
  </StyledHeader>
}

export default Header
