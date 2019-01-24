import React from 'react';
import { shallow } from 'enzyme';
import '../setupTests';

import {Wallet} from '../components/Wallet';


describe('Wallet', () => {
    const mockDeposit = jest.fn();
    const mockWithDraw = jest.fn();
    const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithDraw };
    const wallet = shallow(<Wallet {...props} />);

    it('renders properly', () => {
        expect(wallet).toMatchSnapshot();
    })

    it('display the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20')
    })

    it('creates an input to deposit or withdraw from balance', () => {
        expect(wallet.find('.input-wallet').exists()).toBe(true);
    })
    

    describe('when the user types into the wallet input', () => {
        const userBalance = 25;

        beforeEach(() => {
            wallet.find('.input-wallet').simulate('change', { target: { value: userBalance } })
        })

        it('updates the wallet balance and converts into a number', () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10))
        })

        describe('and the user wants to make depost', () => {
            beforeEach(() => wallet.find('.btn-deposit').simulate('click'));

            it('dispatches the `deposit()` it receives from props with local balance', () => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance));
            })
        })

        describe('and the user want to withdraw money', () => {
            beforeEach(() => wallet.find('.btn-withdraw').simulate('click'));

            it('dispatches the `withdraw()` it receives from props with the local balance ', () => {
                expect(mockWithDraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
            })
        })
    })
})