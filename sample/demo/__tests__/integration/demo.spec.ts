import { mount } from '@cypress/vue'
import Button from '../../index.vue'

it('Button', () => {
  mount(Button, {
    propsData: {
      msg: 'Test button',
    }
  })

  cy.get('button').contains('Test button').click()
})