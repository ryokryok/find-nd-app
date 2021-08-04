import React from 'react'
import { Container, HStack } from '@chakra-ui/react'

import { UserSetting } from './components/UserSetting'
import { ReferenceSetting } from './components/ReferenceSetting'
import { Footer, NDValueBox, TitleHeader } from './components/Common'
function App() {
  return (
    <Container>
      <TitleHeader />
      <HStack spacing={4} align='stretch'>
        <UserSetting />
        <ReferenceSetting />
      </HStack>
      <NDValueBox />
      <Footer />
    </Container>
  )
}
export default App
