import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AboutUs.css';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const AboutUs = () => {
	return (
		<div className="container mb-5 ">
			<Card>
				<CardBody>
					<CardTitle tag="h5">Öykü Yüksel</CardTitle>
					<CardSubtitle tag="h6" className="mb-2 text-muted">
						oykue9@icloud.com
					</CardSubtitle>
					<CardText>Web Programmer</CardText>
				</CardBody>
			</Card>
			<div>
				<Card>
					<CardBody>
						<CardTitle tag="h5">Beyza Sarıkaya</CardTitle>
						<CardSubtitle tag="h6" className="mb-2 text-muted">
							rukiyebeyzasarikaya@gmail.com
						</CardSubtitle>
						<CardText>Web Programmer</CardText>
					</CardBody>
				</Card>
			</div>
		</div>
	);
};
export default connect()(AboutUs);
