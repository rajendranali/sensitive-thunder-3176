import React from 'react'
import {Box,Heading,Text,Flex,Button} from "@chakra-ui/react"
import {FiUserPlus} from "react-icons/fi"

import {Link} from "react-router-dom"
import styles from "./user.module.css"
import GuestInvite from './modal/GuestInvite'
import CreateGroup from './modal/CreateGroup'
import Email from "./modal/Email"
function User() {
  return (
    <div>
        <Box>
            <Box w="900px" h="50px" backgroundColor="#d9e9fe" justifyContent={"center"} borderRadius="10px" paddingTop={1}>
               <Flex> <FiUserPlus   className={styles.user}/> <Text marginTop="auto"color="#88a9f9" marginLeft="10px" >You can now invite guests like clients, vendors, or contractors. You can add them free of charge</Text>
               <a href="" target="_blank" style={{marginLeft:"2px",color:"#88a9f9" ,fontWeight:"700",textDecoration: "underline",marginTop:"auto"}}>.Invite Guest</a></Flex>
            </Box>
           <Box>
           <Flex>
           
            <GuestInvite/>
            <CreateGroup/>
            <Email/>
           
           </Flex>
           </Box>
        </Box>
        
    </div>
  )
}

export default User