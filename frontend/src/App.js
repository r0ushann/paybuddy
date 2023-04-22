import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
import logo from './logo.png';
import {Layout, Button} from "antd";
import {useConnect, useAccount, useDisconnect} from "wagmi";
import {MetaMaskConnector} from "wagmi/connectors/metaMask";
import CurrentBalance from "./components/CurrentBalance";
import AccountDetails from "./components/AccountDetails";
import RecentActivity from "./components/RecentActivity";
import RequestAndPay from "./components/RequestAndPay";

const { Header, Content} = Layout;

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
