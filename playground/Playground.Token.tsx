import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import React from 'react'

export function PlaygroundToken (): JSX.Element {
  return (
    <View>
      <Text style={tailwind('font-bold')}>Playground Token</Text>
    </View>
  )
}

// TODO(fuxingloh): Top Up Tokens into your Wallet