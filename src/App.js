
import './App.css';
import PostForm from './components/PostForm';
import StudentList from './components/StudentList';
import DeleteForm from './components/DeleteForm';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
    <div className="App">
    <header className="App-header" >
    <Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/create-student"}
				className="nav-link">
				Student Management App
				</Link>
			</Navbar.Brand>

      <Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-student"}
					className="nav-link">
					Create Student
				</Link>
				</Nav>

        <Nav>
				<Link to={"/student-list"}
					className="nav-link">
					Student List
				</Link>
				</Nav>

        

			</Nav>

      </Container>
      </Navbar>
      </header>

    <Container>
		<Row>
			<Col md={12}>
			<div >
				<Routes>
				<Route path="/create-student" element={<PostForm/>} />
        <Route path="/student-list" element={<StudentList/>} />
        <Route path="/delete-student" element={<DeleteForm/>} />
				</Routes>
			</div>
			</Col>
		</Row>
		</Container>

    </div>
    </Router>
  );
}

export default App;
