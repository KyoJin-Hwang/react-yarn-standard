import React from 'react'
import { ChildrenReactNode } from '@lib/global'

import Footer from './Footer'
import Header from './Header'

function Layout({ children }: ChildrenReactNode) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
