import reducer from './pagination.reducer';

describe('ShopReducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
            products: phones,
            cart: []
		});
	});
});