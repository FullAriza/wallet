context('app/dex/addLiquidity', () => {
  beforeEach(function () {
    cy.createEmptyWallet(true)
    cy.getByTestID('bottom_tab_liquidity').click()
    cy.getByTestID('pool_pair_add_DFI-BTC').click()
  })

  it('should update both token and build summary base on primary token input', function () {
    cy.getByTestID('token_input_primary').invoke('val').should(text => expect(text).to.contain('0'))
    cy.getByTestID('token_input_secondary').invoke('val').should(text => expect(text).to.contain('0'))

    cy.getByTestID('token_input_primary').invoke('attr', 'type', 'text').type('1.23').trigger('change')

    cy.getByTestID('token_input_primary').invoke('val').should(text => expect(text).to.contain('1.23'))
    cy.getByTestID('token_input_secondary').invoke('val').should(text => expect(text).to.contain('1.23'))

    cy.getByTestID('a_per_b_price').contains('1')
    cy.getByTestID('a_per_b_unit').contains('DFI per BTC')
    cy.getByTestID('b_per_a_price').contains('1')
    cy.getByTestID('b_per_a_unit').contains('BTC per DFI')
    cy.getByTestID('share_of_pool').contains('0.12') // 0.12xxx depend on total pool and precision
  })

  it('should update both token and build summary base on secondary token input', function () {
    cy.getByTestID('token_input_secondary').invoke('attr', 'type', 'text').type('7.8').trigger('change')

    cy.getByTestID('token_input_primary').invoke('val').should(text => expect(text).to.contain('7.8'))
    cy.getByTestID('token_input_secondary').invoke('val').should(text => expect(text).to.contain('7.8'))

    cy.getByTestID('a_per_b_price').contains('1')
    cy.getByTestID('a_per_b_unit').contains('DFI per BTC')
    cy.getByTestID('b_per_a_price').contains('1')
    cy.getByTestID('b_per_a_unit').contains('BTC per DFI')
    cy.getByTestID('share_of_pool').contains('0.7') // 0.7xxxx depend on total pool and precision
  })
})