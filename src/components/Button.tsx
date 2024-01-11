import { Button } from '@chakra-ui/react'

interface IButton {
  login: () => void
}

export const ButtonComponent  = (props: IButton) => {
  return(
    <Button onClick={props.login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
      Button
    </Button>
  )
}
