import {FaDiscord} from 'react-icons/fa'
import {Button, Stack, IconButton, Heading, VStack, Spacer, Flex} from '@chakra-ui/react'
import React from 'react';

function App() {
  return (
    <Stack background="black">
      <VStack p={5}>
        <Flex w="100%">
         <Heading ml="8" size="lg" fontWeight='semibold' color="#f7f7f7">Reaper <br></br> Civilization</Heading>
      <Spacer></Spacer>
      <Button size="md" fontWeight='semibold' color='#000000' backgroundColor="#f7f7f7" mr={3} onClick={()=> window.open("http://www.reapercraft.ga:8125")}>Harita</Button>
      <Button size="md" fontWeight='semibold' color='#000000' backgroundColor="#f7f7f7" onClick={()=> window.open("https://download1322.mediafire.com/vce0e1z1oxug/j84ozb28o96tuol/mods.zip")}>Modları İndir</Button>
      <IconButton  backgroundColor="#f7f7f7" color='#000000' isRound={true} ml={3} icon={<FaDiscord></FaDiscord>} onClick={()=> window.open("https://discord.gg/reaper")}></IconButton>
      </Flex>
      </VStack>
    </Stack>
  );
}

export default App;
