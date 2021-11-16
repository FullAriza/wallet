import React from 'react'
import BigNumber from 'bignumber.js'
import { ThemedIcon, ThemedProps, ThemedText, ThemedTouchableOpacity, ThemedView } from '../../../../../components/themed'
import { tailwind } from '@tailwind'
import { View } from '@components'
import { translate } from '@translations'
import { TokenIconGroup } from '@components/TokenIconGroup'
import { IconButton } from '@components/IconButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { LoanParamList } from '@screens/AppNavigator/screens/Loans/LoansNavigator'
import { VaultInfo } from '@screens/AppNavigator/screens/Loans/components/VaultInfo'
import { VaultStatus, VaultStatusTag } from './VaultStatusTag'

export interface VaultCardProps {
  vaultAddress: string
  status?: VaultStatus
  collaterals: Collateral[]
  activeLoans?: LoanToken[]
  totalLoanAmount?: BigNumber
  collateralAmount?: BigNumber
  collateralRatio?: BigNumber
  actions: any[]
  onAddCollateral?: () => void
  onViewLoans?: () => void
  testID?: string
}

export interface Collateral {
  id: string
  vaultProportion: BigNumber
}

export interface LoanToken {
  tokenId: string
}

type VaultAction = 'ADD_COLLATERAL' | 'VIEW_LOANS'

export function VaultCard (props: VaultCardProps): JSX.Element {
  const navigation = useNavigation<NavigationProp<LoanParamList>>()
  const onCardPress = (vaultId: string): void => {
    navigation.navigate('VaultDetailScreen', {
      vaultId
    })
  }
  return (
    <ThemedView
      light={tailwind('bg-white border-gray-200')}
      dark={tailwind('bg-blue-800 border-blue-900')}
      style={tailwind('rounded mb-2 border p-4')}
    >
      <ThemedTouchableOpacity
        testID={props.testID}
        onPress={() => onCardPress(props.vaultAddress)}
        light={tailwind('border-b-0')}
        dark={tailwind('border-b-0')}
      >
        <View style={tailwind('flex flex-row justify-between mb-4')}>
          <View style={tailwind('flex flex-row items-center')}>
            <ThemedView
              light={tailwind('bg-gray-100')}
              dark={tailwind('bg-blue-900')}
              style={tailwind('w-8 h-8 rounded-full flex items-center justify-center mr-2')}
            >
              <ThemedIcon
                iconType='MaterialIcons'
                name='shield'
                size={14}
                light={tailwind('text-gray-600')}
                dark={tailwind('text-gray-300')}
              />
            </ThemedView>
            <View style={tailwind('flex flex-col')}>
              <View style={tailwind('flex flex-row')}>
                <ThemedText
                  style={tailwind('font-semibold w-44 flex-shrink')}
                  numberOfLines={1}
                  ellipsizeMode='middle'
                >
                  {props.vaultAddress}
                </ThemedText>
                {props.status !== undefined &&
                  (
                    <VaultStatusTag status={props.status} />
                  )}
              </View>
              <View style={tailwind('flex flex-row')}>
                <ThemedText
                  light={tailwind('text-gray-500')}
                  dark={tailwind('text-gray-300')}
                  style={tailwind('text-xs mr-1')}
                >
                  {translate('components/VaultCard', 'Collaterals:')}
                </ThemedText>
                {props.collaterals.length === 0 &&
                  (
                    <ThemedText
                      light={tailwind('text-gray-500')}
                      dark={tailwind('text-gray-300')}
                      style={tailwind('text-xs ml-1')}
                    >
                      {translate('components/VaultCard', 'None')}
                    </ThemedText>
                  )}
                <TokenIconGroup symbols={props.collaterals.map(collateral => collateral.id)} maxIconToDisplay={3} />
              </View>
            </View>
          </View>
        </View>
        <View style={tailwind('flex flex-row flex-wrap -mb-2')}>
          <VaultInfo label='Active loans' tokens={props.activeLoans?.map(loan => loan.tokenId)} valueType='TOKEN_ICON_GROUP' />
          <VaultInfo label='Total loan amount' value={props.totalLoanAmount} prefix='$' decimalPlace={2} valueType='NUMBER' />
          <VaultInfo label='Collateral amount' value={props.collateralAmount} prefix='$' decimalPlace={2} valueType='NUMBER' />
          <VaultInfo
            label='Collateral ratio'
            value={props.collateralRatio}
            suffix='%'
            decimalPlace={2}
            valueType='NUMBER'
            valueThemedProps={props.collateralRatio !== undefined ? getCollateralRatioColor(props.collateralRatio) : undefined}
          />
        </View>
      </ThemedTouchableOpacity>
      <VaultActionButton
        actions={props.actions}
        onAddCollateral={() =>
          navigation.navigate({
            name: 'AddCollateralScreen',
            params: {
              vaultId: props.vaultAddress
            },
            merge: true
        })}
      />
    </ThemedView>
  )
}

function getCollateralRatioColor (value: BigNumber): ThemedProps {
  let lightStyle, darkStyle

  if (value.isLessThan(100)) {
    lightStyle = 'text-error-500'
    darkStyle = 'text-darkerror-500'
  } else if (value.isLessThan(300)) {
    lightStyle = 'text-warning-500'
    darkStyle = 'text-darkwarning-500'
  } else {
    lightStyle = 'text-success-500'
    darkStyle = 'text-darksuccess-500'
  }

  return {
    light: tailwind(lightStyle),
    dark: tailwind(darkStyle)
  }
}

function VaultActionButton (props: {actions: VaultAction[], onAddCollateral?: () => void, onViewLoans?: () => void}): JSX.Element | null {
  if (props.actions.length === 0) {
    return null
  }

  return (
    <ThemedView
      light={tailwind('border-gray-200')}
      dark={tailwind('border-gray-700')}
      style={tailwind('flex flex-row mt-4 flex-wrap -mb-2')}
    >
      {
        props.actions.map(action => {
          if (action === 'ADD_COLLATERAL') {
            return (
              <IconButton
                key={action}
                iconType='MaterialIcons'
                iconName='add'
                iconLabel={translate('components/VaultCard', 'ADD COLLATERAL')}
                iconSize={16}
                style={tailwind('mr-2 mb-2')}
                onPress={props.onAddCollateral}
              />
            )
          } else {
            return (
              <IconButton
                key={action}
                iconType='MaterialIcons'
                iconName='credit-card'
                iconLabel={translate('components/VaultCard', 'VIEW LOANS')}
                iconSize={16}
                style={tailwind('mr-2 mb-2')}
                onPress={props.onViewLoans}
              />
            )
          }
        })
      }
    </ThemedView>
  )
}
