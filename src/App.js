import React, { Component } from 'react';
// import Signup from "./SignupToCompanyList/signup/signup";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import Login from "./SignupToCompanyList/login/login";
import ThankYouLayout from './SignupToCompanyList/Layout/layout';
import CompanyList from './SignupToCompanyList/CompanyList/comapanyList';
// import Navbar from "./SignupToCompanyList/Navbar/navbar";
import Registration from './Company_Registration/Registration';
import DreamJob from './Dream_Job/Dream_Job';
import Opening from './Openings/Opening';
import Demo from './Demo/Demo';
import { tokenAuth } from './Company_Registration/actions';
import { connect } from 'react-redux';
import CompanyProject from './CompanyProjects/companyProjects';
import ProjectDescription from './ProjectDescription/projectDescription';
import CompanyDescription from './Description/CompanyDescription';
import ForgotPassword from './ForgotPassword/forgotPassword';
import Home from './Landing/home';
import User from './Userregistration/User';
import Usernext from './Userregistration/Usernext';
import Interview from './Interview/Interview';

class App extends Component {
	componentDidMount() {
		const token = localStorage.getItem('token');
		this.props.tokenAuth(token);
	}
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					{/* <Navbar /> */}
					<Switch>
						<Route exact path="/">
							{this.props.tokenReducer ? <Redirect to="/companyList" /> : <Home />}
						</Route>
						{/* <Route path="/signup" component={Signup}></Route>
            <Route path="/login" component={Login}></Route> */}
						<Route path="/assignmentKey" component={ForgotPassword} />
						<Route path="/thankyou" component={ThankYouLayout} />
						<Route path="/interview" component={Interview} />
						<Route path="/admin" component={Registration} />
						<Route path="/dreamjob" component={DreamJob} />
						<Route path="/opening" component={Opening} />
						<Route path="/user1" component={User} />
						<Route path="/demo" component={Demo} />
						<Route path="/user2" component={Usernext} />

						<Route path="/companyList" component={CompanyList} />
						<Route path="/description" component={CompanyDescription} />

						<Route exact path="/project" component={CompanyProject} />
						<Route exact path="/project/:id" component={ProjectDescription} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
const mapStateToProps = ({ tokenReducer }) => {
	return { tokenReducer };
};

export default connect(mapStateToProps, { tokenAuth })(App);
