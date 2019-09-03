import React,{Component} from 'react';
import { shallow } from 'enzyme';
import Login from '../../Components/Login/Login';
import Logout from './Logout';
describe('when the login component is called',()=>{
    let wrapper;
    beforeEach(()=>{
       
        wrapper=shallow(<Logout/>);
    });
    it('should render the render method',()=>{
        expect(wrapper).toHaveLength(1);
    });
   
 
    describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<Login />);
          const spy = jest.spyOn(comp.instance(), 'handleSubmit');
          comp.instance().forceUpdate();
          comp.find('#submit').simulate('click',{
            preventDefault: () => {
            }
           });
          expect(spy).toHaveBeenCalled();
        });
      });



})

