import { shallow } from "enzyme";
import GifExpertApp from "../../GifExpertApp";

describe('GifExpertApp', () => {
    test('SnapShot', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();

    });

    test('should be show a list of categories', () => {

        const categories=['Ready Player One','Zelda'];
        const wrapper=shallow(<GifExpertApp defaultCategories={categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
        
    });
})
