import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

import BlackFriday from '../components/custom/BlackFriday/BlackFriday'

function Page() {
  return (
    <>
      <GatsbySeo noindex nofollow />
      <BlackFriday />
    </>
  )
}

export default Page
