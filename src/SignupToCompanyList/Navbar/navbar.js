import React, { Component } from 'react';
import { Link, NavLink, Redirect, withRouter } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import { tokenAuth } from '../../Company_Registration/actions';
import { compose } from 'redux';
import './navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Hidden } from '@material-ui/core';
import $ from 'jquery';

class Navbar extends Component {}
