import { NextPage } from "next";
import {useAccount, useWriteContract} from 'wagmi'
import {abi} from './abi/BarakahToken.json'
import {useState} from "react";
import {formatEther, parseEther} from 'viem'
import styles from "../styles/Home.module.css";
import { send } from "process";

const Transfer: NextPage =() => {
    const {address: connectedAddress} = useAccount()
    const [transferAddress, setTransferAddress] = useState();
    const [transferAmount, setTransferAmount] = useState();
    const { writeContract } = useWriteContract()

    const sendToken = () => {
      writeContract({ 
        abi,
        address: '0x24BEd10D563E30b102ABd895eB3283851E1d79C7',
        functionName: 'transfer',
        args: [
          transferAddress,
          transferAmount
        ],
     })
    }
    return (
      <div>
        <h3>Transfer</h3>
        <input className={styles.input} placeholder="Recipient" onChange={(e) => {
                // @ts-ignore
                setTransferAddress(e.target.value);
            }}/>
            <input className={styles.input} placeholder="Amount" onChange={(e) => {
                // @ts-ignore
                setTransferAmount(e.target.value);
            }}/>
            <button className={styles.button} onClick={() => sendToken()}>
              Transfer
            </button>
      </div>
     
    );
  };
  
  export default Transfer;

