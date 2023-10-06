import { TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';

describe(TableComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(TableComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(TableComponent,);
  })

})
