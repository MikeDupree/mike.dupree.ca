import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';

type Props = {}

const DynamicNavigationLink = () => {
  const { asPath } = useRouter();
  const uriArgs = asPath.split('/');
  if (uriArgs.length > 2) {
    return (
      <Link href={`/${uriArgs[1]}`} style={{ fontSize: '1.2rem' }}>{`< ${uriArgs[1].toUpperCase()}`}</Link>
    )
  }
  return <></>
}

const Header = (props: Props) => {
  const { asPath } = useRouter();
  if (asPath === '/') return <></>;

  return <div style={{ margin: '5px 0', borderBottom: '1px solid gray', fontSize: '1.2rem', display: 'flex', alignContent: 'space-between' }}>
    <div style={{ width: '25%' }}>
      <DynamicNavigationLink />
    </div>
    <div style={{ width: '50%', textAlign: 'center' }}>
      <Link href="/">
        <p style={{
          margin:'0',
          fontSize: '1.5rem',
          fontFamily: 'Yellowtail, cursive'
        }} >Michael Dupree</p>
      </Link>
    </div>
    <div style={{ width: '25%' }}></div>
  </div>
}

export default Header
