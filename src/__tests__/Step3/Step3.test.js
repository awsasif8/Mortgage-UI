import React,{Component} from 'react';
import { shallow } from 'enzyme';
import Transaction from '../../Components/Transaction/Transaction';
import Step2 from '../../Components/Step2/Step2';
import Step3 from '../../Components/Step3/Step3';
describe('when the transaction component is called',()=>{
    let wrapper;
    beforeEach(()=>{
       
        wrapper=shallow(<Step3/>);
    });
    it('should render the render method',()=>{
        expect(wrapper).toHaveLength(1);
    });
   
   
    // describe ('when the onChange event is not triggered on the emailIdfield',()=>{
    //     it('should have an empty state',()=>{
    //         console.log("state inside login",wrapper.state())
    //         expect(wrapper.state().emailId).toEqual('');
    //     });
    // });
    // describe('when the on change event is not triggered on the password field',()=>{
    //     it('should have an empty state',()=>{
    //         expect(wrapper.state().password).toEqual('');
    //     });
    // });
    // describe('when the onchage event is triggered on the customerId field',()=>{
    //     beforeEach(()=>{
    //         const customerId=wrapper.find('#customerId');
    //         customerId.simulate('change', { target: { id: "customerId", value: 'ING42428' } });
    //     });
    //     it('should update the state',()=>{
    //         console.log(wrapper.state())
    //         expect(wrapper.state().customerId).toEqual('ING42428');
    //     });
    // });
    // describe('When first button is cliked', () => {
    //     it('should have called handle submit function', () => {
    //       const comp = shallow(<Login />);
    //       const spy = jest.spyOn(comp.instance(), 'handleSubmit');
    //       comp.instance().forceUpdate();
    //       comp.find('#submit').simulate('click',{
    //         preventDefault: () => {
    //         }
    //        });
    //       expect(spy).toHaveBeenCalled();
    //     });
    //   });



})

