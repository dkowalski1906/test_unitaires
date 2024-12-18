describe("Test de Pablo",() => {

    beforeAll() {
        comm = mysql
    }

    beforeEach() {
        connection.beeginTransaction()
    }

    it("test 1", ()=>{
        let a = 2
        let b = 2
        expect(a+b).toBe(4)
    })

    it("test 2", ()=>{
        let a = 2
        let b = 2
        expect(a+b).toBe(4)
    })

    aftereach() {
		connexion.rollback()
    }
    afterall() {
            connexion.end()
    }
})