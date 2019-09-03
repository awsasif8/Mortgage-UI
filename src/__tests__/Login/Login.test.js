import React,{Component} from 'react';
import { shallow } from 'enzyme';;
import Login from '../../Components/Login/Login'
describe('when the login component is called',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallow(<Login/>);
    });
    it('should render the render method',()=>{
        expect(wrapper).toHaveLength(1);
    });
   
   
})

