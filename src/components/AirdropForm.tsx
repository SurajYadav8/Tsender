"use client"
import {InputForm} from "@/components/ui/InputField"
import {useState} from "react"
import {chainsToTSender, tsenderAbi, erc20Abi } from "@/constants"
import {useChainId} from "wagmi"
import { log } from "node:console"

export default function AirdropForm() {
    const [tokenAddress, setTokenAddress] = useState("")
    const [recipients, setRecipients] = useState("")
    const [amounts, setAmount] = useState("")
    const chainId = useChainId()

    async function getApprovedAmount(tsenderAddress: string | null) : Promise<number> {
        if(!tsenderAddress) {
            alert("No address found, please use a supported chain")
            return 0
        }

        
    }

    async function handleSubmit() {
    //    1. Approve our tsender contract to send our tokens 
    //    2 Call the airdrop function on the tsender contract 
    //    3 Wait for the transaction to be mined 
        const tsenderAddress = chainsToTSender[chainId]["tsender"]
        
    }

    return(
        <div> 
            <InputForm
            label="Token Address"
            placeholder="0x"
            value= {tokenAddress}
            onChange={e => setTokenAddress(e.target.value)} 
            />

            <InputForm
            label="Recipients"
            placeholder="0x12345,0x123478"
            value= {recipients}
            onChange={e => setTokenAddress(e.target.value)} 
            large = {true}
            />

            <InputForm
            label="Amount"
            placeholder="100, 200, 300"
            value= {amounts}
            onChange={e => setTokenAddress(e.target.value)} 
            large = {true}
            />

            <button onClick={handleSubmit}>
                Send Tokens
            </button>
        </div>
    )
}