import React, { useEffect, useState } from 'react';
import DeleteBtn from '../components/DeleteBtn';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';

function Saved() {
	const [saved, setSaved] = useState([]);

	function deleteBook(id) {
		API.deleteBook(id)
			.then((res) => res)
			.catch((err) => console.log(err));
	}

	useEffect(() => {
		API.loadSavedBooks()
			.then((res) => {
				setSaved(res.data);
				console.log(saved);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [saved]);

	return (
		<Container fluid>
			<Row>
				<Col size='md-6 sm-12'>
					<Jumbotron>
						<h1>Google Books Search</h1>
						<h3>Search for and Save Books of Interest</h3>
					</Jumbotron>
				</Col>
				<Col size='md-6 sm-12'>
					<h1>Saved Books</h1>
					<Row>
						{saved.length ? (
							saved.map((book) => (
								<Col size='sm-12' key={book._id}>
									<div className='mb-4 border p-3 rounded shadow'>
										<img src={book.image} alt={book.title} />
										<DeleteBtn onClick={() => deleteBook(book._id)} />
										<Link to={'/books/' + book.id} />
										<strong className='m-4'>Title: {book.title}</strong>
										<strong>Author: {book.author}</strong>
										<p>Description: {book.description}</p>
										<strong>
											<a href={book.link} target='_blank' rel="noopener noreferrer">
												click here to view book
											</a>
										</strong>
									</div>
								</Col>
							))
						) : (
							<h3> no saved books to display </h3>
						)}
					</Row>
				</Col>
			</Row>
		</Container>
	);
}

export default Saved;
