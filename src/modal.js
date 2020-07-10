import lol from "./data/lol/lol.js";

const modalLol = lol.data

const datoscard = {
    CardsChamp: () => {
        const championCard = [];
        for (let champ in modalLol) {
            let card = {
                    name: modalLol[champ].name,
                    image: modalLol[champ].img,
                    difficulty: modalLol[champ].info.difficulty,
                    ataque: modalLol[champ].info.attack,
                    defense: modalLol[champ].info.defense,
                    magic: modalLol[champ].magic,
                    tags: modalLol[champ].tags,
                },
        }
        championCard.push(card);
    },
    return championCard;
};

}

export default datoscard;