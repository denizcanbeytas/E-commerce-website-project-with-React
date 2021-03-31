import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../../components/Product/Product';
import classNames from 'classnames';
import LayoutMode from '../../components/LayoutMode/LayoutMode';
import { paginationPipe } from '../../pipes/paginationFilter';
import Pagination from '../../components/Pagination/Pagination';

import axios from 'axios';
import Title from '../../components/Title/Title';

class ProductList extends Component {
	state = {
		colValue: 'col-lg-4',
		pagination: {
			perPage: 12,
			currentPage: 1,
			pagesToShow: 3,
		},
		gridValue: 3,
		products: [],
	};
	componentDidMount = () => axios.get(`https://5fd9d76f6cf2e7001737ead3.mockapi.io/api/v1/dress`).then(({ data: products }) => this.setState({ products }));

	onPrev = () => {
		const { pagination } = this.state;
		this.setState({
			pagination: {
				...pagination,
				currentPage: pagination.currentPage - 1,
			},
		});
	};
	onNext = () => {
		const { pagination } = this.state;
		this.setState({
			pagination: {
				...pagination,
				currentPage: pagination.currentPage + 1,
			},
		});
	};

	goPage = (n) =>
		this.setState({
			pagination: {
				...this.state.pagination,
				currentPage: n,
			},
		});
	render() {
		let activeLayout = this.state.gridValue;
		const colValue = 'col-lg-' + (this.state.gridValue === 4 ? 3 : 4);
		const changeLayout = (newGridValue) => () => this.setState({ gridValue: newGridValue });

		return (
			<div className="col-lg-9">
				<div className="row mb-3">
					<div className="col-12 d-none d-lg-block d-xl-block">
						<div className="container">
							<Title name="Dress" title="E-Commerce"></Title>
						</div>
						<div className="card ">
							<div className="card-header d-flex justify-content-end">
								<span className="mr-3">Change Layout: </span>
								<LayoutMode len={3} isActive={activeLayout === 3} click={changeLayout(3)} />
								<LayoutMode len={4} isActive={activeLayout === 4} click={changeLayout(4)} />
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{paginationPipe(this.state.products, this.state.pagination).map((product) => (
						<div key={product.id} className={classNames(colValue, 'col-md-6 mb-4')}>
							<Product {...product} />
						</div>
					))}
				</div>
				<div className="d-flex justify-content-end">
					<Pagination totalItemsCount={this.state.products.length} {...this.state.pagination} onGoPage={this.goPage} onPrevPage={this.onPrev} onNextPage={this.onNext} />
				</div>
			</div>
		);
	}
}



export default connect()(ProductList);
