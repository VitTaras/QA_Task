


describe('Tabela ze stawkami',()=>{

    beforeEach(() => {
      
        cy.visit('http://localhost:5175/')
      })

    it('Checking element on the Page',()=>{
        // check if selector for source country and target country visible
        cy.get("label").contains('Kraj źródłowy')
        // check heading for rows and columns
        cy.get("label").contains('Kraj docelowy')
        // ilość krajów w tabeli 29 + puste cell na poczatku
        cy.get("table thead th").should("have.length", 30)
        // Czy sa wszystkie kraje w nagłowku tabeli 
        const countryHeading = [ "", "AT", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]
        cy.get("table thead th").should(($els) => {
            const elsText = $els.toArray().map(el => el.innerText)
            expect(elsText).to.deep.eq(countryHeading)
          })

    })

    it.skip('Checking select option ...',()=>{
        // Wybieranie kraju żrodlowego i docelowego  
        cy.get("select").first().select("AT")
        cy.get("select").last().select("AT")
        cy.get("table").find("td").should("have.length", 1)
        // wybieranie tylko kraju zrodlowego

    })

    it.skip('rating check',()=>{
     

    })

})