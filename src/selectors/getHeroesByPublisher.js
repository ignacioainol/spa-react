import { heroes } from '../data/heroes'

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['Marvel Comics', 'DC Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Publisher ${publisher} does not exists`);
    }

    return heroes.filter(hero => hero.publisher === publisher);

}
