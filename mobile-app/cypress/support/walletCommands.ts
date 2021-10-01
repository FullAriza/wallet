import { DeFiAddress } from "@defichain/jellyfish-address";
import '@testing-library/cypress/add-commands'
import { BalanceTokenDetail } from "../integration/functional/wallet/balances/balances.spec";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * @description Verify wallet address if it's a valid
       * @param {string} network - network of wallet
       * @param {string} addressObject - optional address if needs to be used on next steps
       * @example cy.verifyWalletAddress(recoveryWords, address)
       */
      verifyWalletAddress (network: string, addressObject?: { address: string }): Chainable<Element>

      /**
       * @description Verify if connected to correct network
       * @param {string} network - network of wallet
       * @example cy.isNetworkConnected('MainNet')
       */
      isNetworkConnected (network: string): Chainable<Element>

      /**
       * @description Verify balance row if it has correct values
       * @param {string} id - token
       * @param details - token to be verified
       * @param dynamicAmount - amount can be dynamic (e.g, additional rewards)
       * @example cy.checkBalanceRow('0_utxo', { name: 'DeFiChain', amount: '10.00000000', symbol: 'DFI (Token)' }, false)
       */
      checkBalanceRow (id: string, details: BalanceTokenDetail, dynamicAmount?: boolean): Chainable<Element>

      /**
       * @description Change passcode from settings page
       * @example cy.changePasscode()
       */
      changePasscode (): Chainable<Element>
    }
  }
}

Cypress.Commands.add('verifyWalletAddress', (network: string, addressObject?: { address: string }) => {
  cy.getByTestID('bottom_tab_balances').click()
  cy.getByTestID('balances_row_0_utxo').click()
  cy.getByTestID('receive_button').click()
  cy.getByTestID('address_text').then(($txt: any) => {
    const a = $txt[0].textContent
    if (addressObject) {
      addressObject.address = a
    }
    expect(DeFiAddress.from(network, a).valid).eq(true)
  })
})

Cypress.Commands.add('isNetworkConnected', (network: string) => {
  cy.getByTestID('header_active_network').then(($txt: any) => {
    const net = $txt[0].textContent
    expect(net).eq(network)
  })
  cy.getByTestID('header_status_indicator').should('have.css', 'background-color', 'rgb(16, 185, 129)')
})

Cypress.Commands.add('checkBalanceRow', (id: string, details: BalanceTokenDetail, dynamicAmount?: boolean) => {
  const testID = `balances_row_${id}`
  cy.getByTestID(testID).should('exist')
  cy.getByTestID(`${testID}_icon`).should('exist')
  cy.getByTestID(`${testID}_symbol`).should('have.text', details.symbol)
  cy.getByTestID(`${testID}_name`).should('have.text', details.name)
  if (dynamicAmount) {
    cy.getByTestID(`${testID}_amount`).contains(details.amount)
  } else {
    cy.getByTestID(`${testID}_amount`).should('have.text', details.amount)
  }
})

Cypress.Commands.add('changePasscode', () => {
  cy.getByTestID('bottom_tab_settings').click()
  cy.getByTestID('view_change_passcode').click()
  cy.getByTestID('pin_authorize').type('000000').wait(3000)
  cy.getByTestID('pin_input').type('696969').wait(3000)
  cy.getByTestID('pin_confirm_input').type('777777').wait(3000)
  cy.getByTestID('wrong_passcode_text').should('exist')
  cy.getByTestID('pin_confirm_input').type('696969').wait(3000)
})