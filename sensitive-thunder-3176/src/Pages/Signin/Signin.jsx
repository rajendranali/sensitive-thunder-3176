import React, { useContext } from 'react'

import {Box} from "@chakra-ui/react"

import SignNav from './SignNav'
import Siginform from './Siginform'

const Signin = () => {

  return (
    <Box  width={"100%"}> 
<SignNav/>
<Siginform/>


    </Box>
  )
}

export default Signin