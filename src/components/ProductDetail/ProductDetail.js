import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = (props) => {
	const { buttonLabel, className } = props;
	const axios = require('axios');

	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);
	const [dress, setDress] = useState([]);

	useEffect(() => {
		axios
			.get('https://5fd9d76f6cf2e7001737ead3.mockapi.io/api/v1/dress')
			.then(function (response) {
				setDress(response.data);
				console.log('dress: ', dress);
			})
			.catch(function (error) {
				console.log('error: ', error);
			});
	}, []);
	const id = window.location.pathname.split('/')[2];
	const data = dress.map((item) => {
		return {
			name: item.name,
			description: item.description,
			price: item.price,
			id: item.id,
			img: item.img,
		};
	});
	console.log('data: ', data);
	const filterData = data.filter((item) => item.id === id);
	console.log('filterData: ', filterData);
	return (
		<div>
			{dress.length == 0 ? (
				<Spinner style={{ width: '16rem', height: '16rem' }} color="danger" />
			) : (
				filterData.map((item) => {
					return (
						<Card>
							<CardImg className="cardImg" top width="100%" src={item.img} alt={item.name} />
							<CardBody>
								<CardTitle tag="h5">{item.name}</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									${item.price}
								</CardSubtitle>
								<CardText>{item.description}</CardText>
								<Link to={'/dress'}>
									<Button>Geri Dön </Button>
								</Link>
							</CardBody>
						</Card>
					);
				})
			)}
		</div>
	);
};

export default connect()(ProductDetail);
