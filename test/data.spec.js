import { datos } from '../src/data.js';

describe('datos', () => {
    it('is a function', () => {
        expect(typeof datos).toBe('function');
    });

    const camp = [{
        Aatrox: {
            name: "Aatrox",
            img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
            info: {
                attack: 8,
                defense: 4,
                magic: 3,
                difficulty: 4
            },
            tags: ["Fighter", "Tank"],
        }
    }, ];

    it('returns `datos`', () => {
        expect(datos(camp)).toBe(name = "Aatrox", img = "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png", tags = ["Fighter", "Tank"]);
    });
});

describe('anotherExample', () => {
    it('is a function', () => {
        expect(typeof anotherExample).toBe('function');
    });

    it('returns `anotherExample`', () => {
        expect(anotherExample()).toBe('OMG');
    });
});