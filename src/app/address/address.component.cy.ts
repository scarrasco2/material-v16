import { TestBed } from '@angular/core/testing';
import { AddressComponent } from './address.component';

describe(AddressComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(AddressComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(AddressComponent,);
  })

})
