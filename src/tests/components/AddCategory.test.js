import { shallow } from "enzyme"
import AddCategory from "../../components/AddCategory";

describe('Pruebas en <AddCategory/>', () => {


    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe monstrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe cambiar input text', () => {
        const input = wrapper.find('input');

        const value = 'hola mundo';

        input.simulate('change', { target: { value: value } });

    })

    test('No debe pstear submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar setCategories y limpiar inputValue', () => {

        const value = 'Mario Kart';

        const input = wrapper.find('input');

        input.simulate('change', { target: { value: value } });

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(input.text().trim()).toBe('');
    });

})
