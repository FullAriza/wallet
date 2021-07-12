import React from 'react'
import { ButtonProps, StyleSheet, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'
import { PrimaryColor } from '../constants/Theme'

export const PrimaryButtonStyle = StyleSheet.create({
  button: {
    backgroundColor: PrimaryColor,
    color: '#ffffff'
  },
  disabled: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: 'rgba(255,255,255,0.06)'
  }
})

export function PrimaryButton (props: React.PropsWithChildren<ButtonProps>): JSX.Element {
  return (
    <TouchableOpacity
      testID={props.testID}
      disabled={props.disabled}
      onPress={props.onPress}
      style={[tailwind('m-4 mt-8 p-3 rounded flex-row justify-center'), props.disabled === true ? PrimaryButtonStyle.disabled : PrimaryButtonStyle.button]}
    >
      {
        props.children
      }
    </TouchableOpacity>
  )
}