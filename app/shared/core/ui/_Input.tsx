import * as React from 'react'
import { TextInput } from 'react-native';

interface IInput {
  bgColor: string,
  placeholder: string
}

const _Input = ({
  bgColor,
  placeholder
}: IInput) => {
  return (
    <TextInput
      style={{
        backgroundColor: bgColor,
        paddingLeft: 15,
        borderRadius: 10
      }}
      placeholderTextColor={'#999'}
      placeholder={placeholder}
    />
  )
}

_Input.defaultProps = {
  bgColor: '#f7f7f7',
  placeholder: ""
}

export default _Input;
