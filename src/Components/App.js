import React from 'react';
import '../Styles/App.css';
import Footer from '../Components/Footer';
import Nav from "./Nav";
import {Layout, Menu, Breadcrumb} from 'antd';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from "../Routers/AppRouter";

const {Header, Content,} = Layout;

const App = () => {

    return (
        <Router>
            <Layout className="layout">
                <Header>
                    <Nav/>
                </Header>
                <Content>
                    <AppRouter/>
                </Content>
                <Footer/>
            </Layout>
        </Router>
    );
}

export default App;
