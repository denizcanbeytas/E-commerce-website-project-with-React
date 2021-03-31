import reducer from './pagination.reducer';

describe('PaginationReducer', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			perPage: 12,
			currentPage: 1,
			pagesToShow: 3,
			totalItemsCount: 0,
		});
	});
});
