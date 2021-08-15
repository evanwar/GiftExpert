import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Unit Test GridItem', () => {

    const title = 'Overwatch';
    const url = 'https://www.dzoom.org.es/wp-content/uploads/2010/09/mirada-ojos-encuadre-primer-plano-sexy-810x540.jpg';

    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('should equal argument', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('should have p whit title', () => {

        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);

    });


    test('should have image equal to Url', () => {

        const image = wrapper.find('img');

        expect(image.prop('src')).toBe(url);
        expect(image.prop('alt')).toBe(title);

    });


    test('debe tener una animacion', () => {

        const div = wrapper.find('div');

        const classStyle = div.prop('className');

        expect(classStyle.includes('animate__animated')).toBe(true);


    });

});