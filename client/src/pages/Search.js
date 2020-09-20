import React, { useState, useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, FormBtn } from '../components/Form';
import Button from 'react-bootstrap/Button';

function Search() {
	// Setting our component's initial state
	const [books, setBooks] = useState([]);
	const [formObject, setFormObject] = useState({});
	const [saveBook, setSavedBook] = useState({});

	useEffect(() => {
		API.searchTitle('The Notebook')
			.then((res) => {
				setBooks(res.data.items);
			})
			.catch((err) => {
				console.log(err);
			});
	});

	function saveBookSelection(book) {
		let newBook = {
			title: book.title,
			author: book.authors[0],
			description: book.description,
			image: book.imageLinks.smallThumbnail,
			link: book.infoLink,
		};
		API.saveBook(newBook).then((res) =>
			setSavedBook(res.data).catch((err) => console.log(err))
		);
	}

	// Handles updating component state when the user types into the input field
	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value });
	}

	// When the form is submitted, use the API.saveBook method to save the book data
	// Then reload books from the database
	function handleFormSubmit(event) {
		event.preventDefault();
		if (formObject.search) {
			API.search(formObject.search)
				.then((res) => setBooks(res.data.items))
				.catch((err) => console.log(err));
		}
	}

	return (
		<Container fluid>
			<Row>
				<Col size='md-12'>
					{/* HEADER */}
					<Jumbotron>
						<h1>Google Books Search</h1>
						<h3>Search for and Save Books of Interest</h3>
					</Jumbotron>

					{/* SEARCH BAR */}
					<form>
						<Input
							onChange={handleInputChange}
							name='search'
							placeholder='enter book title'
						/>
						<FormBtn disabled={!formObject.search} onClick={handleFormSubmit}>
							search
						</FormBtn>
					</form>
				</Col>
			</Row>
			<Row>
				<Col size='md-12 sm-12'>
						<h1>Search Results</h1>
					{books.length ? (
						<List>
							{books.map((book) => (
								<ListItem key={book.id}>
									<img
										src={book.volumeInfo.imageLinks.smallThumbnail}
										alt={book.volumeInfo.title}
									/>
									<strong>Title: {book.volumeInfo.title}</strong>
									<strong>Author: {book.volumeInfo.authors[0]}</strong>
									<p>Description: {book.volumeInfo.description}</p>
									<a
										href={book.volumeInfo.infoLink}
										target='_blank'
										rel='noopener noreferrer'
									>
										click here to view
									</a>
									<Button
										onClick={() => saveBookSelection(book.volumeInfo)}
										variant='outline-success'
										className='ml-3'
									>
										Save Book
									</Button>
								</ListItem>
							))}
						</List>
					) : (
						<h3>No Results to Display</h3>
					)}
				</Col>
			</Row>
		</Container>
	);
}

export default Search;
