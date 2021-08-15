import { getGifs } from "../../helpers/getGifs"

describe('Pruebas en Helper', () => {
   
    test('should be 10 items', async () => {
        const gifs = await getGifs('Overwatch');

        expect(gifs.length).toBe(10);

    });


    test('should be 0 items', async () => {
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

    });

})
