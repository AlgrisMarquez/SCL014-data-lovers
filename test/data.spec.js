import { datos } from '../src/data.js';

describe('datos', () => {
    it('is a function', () => {
        expect(typeof datos).toBe('function');
    });

    const camp = [{
        "Aatrox": {
            "version": "6.24.1",
            "id": "Aatrox",
            "key": "266",
            "name": "Aatrox",
            "title": "the Darkin Blade",
            "img": "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
            "splash": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
            "blurb": "Aatrox is a legendary warrior, one of only five that remain of an ancient race known as the Darkin. He wields his massive blade with grace and poise, slicing through legions in a style that is hypnotic to behold. With each foe felled, Aatrox's ...",
            "info": {
                "attack": 8,
                "defense": 4,
                "magic": 3,
                "difficulty": 4
            },
            "image": {
                "full": "Aatrox.png",
                "sprite": "champion0.png",
                "group": "champion",
                "x": 0,
                "y": 0,
                "w": 48,
                "h": 48
            },
            "tags": [
                "Fighter",
                "Tank"
            ],
            "partype": "BloodWell",
            "stats": {
                "hp": 537.8,
                "hpperlevel": 85,
                "mp": 105.6,
                "mpperlevel": 45,
                "movespeed": 345,
                "armor": 24.384,
                "armorperlevel": 3.8,
                "spellblock": 32.1,
                "spellblockperlevel": 1.25,
                "attackrange": 150,
                "hpregen": 6.59,
                "hpregenperlevel": 0.5,
                "mpregen": 0,
                "mpregenperlevel": 0,
                "crit": 0,
                "critperlevel": 0,
                "attackdamage": 60.376,
                "attackdamageperlevel": 3.2,
                "attackspeedoffset": -0.04,
                "attackspeedperlevel": 3
            }
        };
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