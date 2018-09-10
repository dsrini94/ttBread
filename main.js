import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './client/views/productInfo.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';


import MainLandingPage from './client/components/BlockChain.jsx'
import CreateInfo from './client/components/createInfo.jsx'
import DashBoard from './client/views/dashBoard.jsx';
import ProductInfo from './client/views/productInfo.jsx';
import Baker from './client/views/BakerCopy.jsx';
import BakerInfo from './client/views/bakerInfo.jsx';
import LogisticssPartner1 from './client/views/logisticsPartner1.jsx';
import LogisticssPartner2 from './client/views/logisticsPartner2.jsx';
import Retailer from './client/views/retailer.jsx';
import DistributionCenter from './client/views/distributionCenter.jsx';
import Customer from './client/views/customer.jsx';
import TempChart from './client/views/tempChart.jsx';
import HumidChart from './client/views/humidChart.jsx';


ReactDOM.render(<HashRouter>
      <div>
        <Route exact path='/' component={DashBoard} />
        <Route exact path='/baker' component={Baker} />
        <Route exact path='/bakerInfo' component={BakerInfo} />
        <Route exact path='/log1' component={LogisticssPartner1} />
        <Route exact path='/log2' component={LogisticssPartner2} />
        <Route exact path='/retailer' component={Retailer} />
        <Route exact path='/dc' component={DistributionCenter} />
        <Route exact path='/customer/:index' component={Customer} />
        <Route exact path='/temp' component={TempChart} />
        <Route exact path='/humid' component={HumidChart} />
      </div>
    </HashRouter>, document.getElementById('app'));
