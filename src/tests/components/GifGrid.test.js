import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import  useFetchGifs  from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Grid', () => {

    const category = 'Mario kart';

    test('Load template', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });


    test('debe de mostrar items cuando se cargan imagenes', () => {

        const gifs = [{ id: 'ABCD', url: 'https:www.google.com/cosa.jpg', title: 'Image' },{ id: 'ABC2', url: 'https:www.google.com/cosa.jpg', title: 'Image' }];


        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });


        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

    });


})
