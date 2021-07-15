context('wallet/balances/convert - accountToUtxos', () => {
  before(function () {
    cy.createEmptyWallet(true)

    cy.getByTestID('bottom_tab_settings').click()
    cy.sendDFItoWallet().sendTokenToWallet(['DFI']).wait(10000)
    cy.getByTestID('playground_wallet_fetch_balances').click()

    cy.getByTestID('bottom_tab_balances').click()
    cy.getByTestID('balances_list').should('exist')
    cy.getByTestID('balances_row_0_utxo').should('exist')
    cy.getByTestID('balances_row_0_utxo_amount').contains(10)
    cy.getByTestID('balances_row_0').should('exist')
    cy.getByTestID('balances_row_0_amount').contains(10)
  })
  it('navigate through DFI token detail', function () {
    cy.getByTestID('balances_row_0').click()
    cy.getByTestID('convert_button').click()

    cy.getByTestID('text_preview_input_desc').contains('DFI (TOKEN)')
    cy.getByTestID('text_preview_input_value').contains('10 DFI')
    cy.getByTestID('text_preview_output_desc').contains('DFI (UTXO)')
    cy.getByTestID('text_preview_output_value').contains('10 DFI')

    cy.getByTestID('button_continue_convert').should('not.be.enabled')
  })

  it('amount > balance', function () {
    cy.getByTestID('text_input_convert_from_input')
      .invoke('attr', 'type', 'text') // cypress issue with numeric/decimal input, must cast
      .type('11.1')

    cy.getByTestID('text_preview_input_value').contains('-1.1 DFI')
    cy.getByTestID('text_preview_output_value').contains('21.1 DFI')

    cy.getByTestID('button_continue_convert').should('not.be.enabled')
  })

  it('should insert balance as amount on MAX pressed', function () {
    cy.getByTestID('button_max_convert_from').click()

    cy.getByTestID('text_preview_input_value').contains('0 DFI')
    cy.getByTestID('text_preview_output_value').contains('20 DFI')
    cy.getByTestID('button_continue_convert').should('not.be.disabled')
  })

  it('should be able to toggle into "utxosToAccount" mode', function () {
    cy.getByTestID('button_convert_mode_toggle').click()
    cy.getByTestID('text_preview_input_desc').contains('DFI (UTXO)')
    cy.getByTestID('text_preview_output_desc').contains('DFI (TOKEN)')
  })
})