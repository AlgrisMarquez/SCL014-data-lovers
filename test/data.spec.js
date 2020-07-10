import datos from '../src/data.js';
let list = [
    { name: "Aatrox", image: "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png", difficulty: 3, tags: ["Fighter", "Tank"] },
    { name: "Ahri", image: "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png", difficulty: 5, tags: ["Mage", "Assassin"] },
    { name: "Akali", image: "https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png", difficulty: 7, tags: ["Assassin"] }
];

describe('datos', () => {
    test('debería ser un objeto', () => {
        expect(typeof datos).toBe('object');
    });

    // Test para los roles
    describe('datos.filterbyRole', () => {
            test('debería ser una función', () => {
                expect(typeof datos.filterbyRole).toBe('function');
            });

            test('debería retornar lista filtrada por Fighter"', () => {
                expect(datos.filterbyRole(list, "Fighter") === [{ name: "Aatrox", image: "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png", difficulty: 4, tags: ["Fighter", "Tank"] }]);
            });

            test('debería retornar lista original"', () => {
                expect(datos.filterbyRole(list, "Todos los Roles") === list);
            });

        }),
        // Test para los dificultad
        describe('datos.filterbyDificult', () => {
            test('debería ser una función', () => {
                expect(typeof datos.filterbyDificult).toBe('function');
            });

            test('debería retornar lista filtrada por Easy"', () => {
                expect(datos.filterbyDificult(list, "Dificultad: Easy") === [{ name: "Aatrox", image: "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png", difficulty: 4, tags: ["Fighter", "Tank"] }]);
            });

            test('debería retornar lista filtrada por Average"', () => {
                expect(datos.filterbyDificult(list, "Dificultad: Average") === [{ name: "Ahri", image: "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png", difficulty: 5, tags: ["Mage", "Assassin"] }]);
            });

            test('debería retornar lista filtrada por Hard"', () => {
                expect(datos.filterbyDificult(list, "Dificultad: Hard") === [{ name: "Akali", image: "https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png", difficulty: 7, tags: ["Assassin"] }]);
            });

            test('debería retornar lista original"', () => {
                expect(datos.filterbyDificult(list, "Todas las Dificultades") === list);
            });

        }),

        // Test para los orden alfabetico  
        describe('datos.sortAlfabeticaly', () => {
            test('debería ser una función', () => {
                expect(typeof datos.sortAlfabeticaly).toBe('function');
            });

            test('debería retornar lista filtrada por Easy"', () => {
                expect(datos.sortAlfabeticaly(list, "Ordenar: A-Z") === list);
            });

            test('debería retornar lista filtrada por Average"', () => {
                expect(datos.filterbyDificult(list, "Ordenar: Z-A") === list);
            });

        });

});