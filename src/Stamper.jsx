import { useState } from 'react'
import { Button, Container } from '@chakra-ui/react'
import { Temporal } from '@js-temporal/polyfill'
import { Select } from "chakra-react-select"

const stamps = Array.from(Array(10).keys()).map(key => ({
  id: `id${key}`,
  description: `description ${key}`,
  when: Temporal.Now.instant(),
}))

const pickerItems = stamps.map(stamp => ({
  label: stamp.description,
  value: stamp.id,
}))

export function Stamper() {
  const [selected, setSelected] = useState()

  const onChange = (option) => {
    setSelected(option)
  }

  return (
    <Container w='500px' maxW='80%'>
      <Select options={pickerItems} w='100%' onChange={onChange} />
      <Button isDisabled={!selected} w='100%'>STAMP</Button>
    </Container>
  )
}
