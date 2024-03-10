import { Button, Container, Group, useMantineColorScheme } from '@mantine/core'
import React from 'react'

export default function Index() {
  return (
    <Container>
      <Button variant='filled'>Click me!</Button>
    </Container>
  )
}

// function Demo() {
//   const { setColorScheme, clearColorScheme } = useMantineColorScheme();

//   return (
//     <Group>
//       <Button onClick={() => setColorScheme('light')}>Light</Button>
//       <Button onClick={() => setColorScheme('dark')}>Dark</Button>
//       <Button onClick={() => setColorScheme('auto')}>Auto</Button>
//       <Button onClick={clearColorScheme}>Clear</Button>
//     </Group>
//   );
// }