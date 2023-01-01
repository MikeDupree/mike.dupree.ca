import React, { ReactNode } from 'react'
import Header from './Header'

type Props = {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div style={{ margin: '15px auto', maxWidth: '1440px' }}>
      <Header />
      {children}
    </div>
  )
}

export default Layout
