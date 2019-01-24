import * as constants from './constants';
import * as actions from './balance';

it('create an action to set balance', () => {
    const balance = 0;

    const expectedAction = {
        type: constants.SET_BALANCE,
        balance
    };

    expect(actions.setBalance(balance)).toEqual(expectedAction);
})

it('creates an action to deposit balance', () => {
    const deposit = 10;

    const expectedAction = { type: constants.DEPOSIT, deposit};
    expect(actions.deposit(deposit)).toEqual(expectedAction);
})

it('creates a withdraw amount', () => {
    const withdraw = 10;

    const expectedAction = { type: constants.WITHDRAW, withdraw}

    expect(actions.withdraw(withdraw)).toEqual(expectedAction)
})