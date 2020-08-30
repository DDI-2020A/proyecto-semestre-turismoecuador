import React from 'react';
import '../Styles/App.css';
import Footer from '../Components/Footer';
import CardInformation from '../Components/CardInformation';
import FontSlider from '../Components/FontSlider';
import Item from "../Components/Item";
import Nav from "./Nav";
import {Layout, Menu, Breadcrumb} from 'antd';
import {BrowserRouter as Router} from 'react-router-dom';


const {Header, Content,} = Layout;

const App = () => {

    return (
        <Router>

            <Layout className="layout">
                <Header>
                    <Nav/>
                </Header>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <FontSlider/>
                    <CardInformation/>
                </Content>
                <Footer/>
            </Layout>

        </Router>
    );
}

export default App;
