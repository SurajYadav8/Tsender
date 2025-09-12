"use client"
import {InputForm} from "@/components/ui/InputField"
import {useState} from "react"
import {chainsToTSender, tsenderAbi, erc20Abi } from "@/constants"
import {useChainId, useAccount} from "wagmi"
import {readContract} from "@wagmi/core"
import config from "../rainbowKitConfig"



export default function AirdropForm() {
    const [tokenAddress, setTokenAddress] = useState("")
    const [recipients, setRecipients] = useState("")
    const [amounts, setAmount] = useState("")
    const chainId = useChainId()
    const account = useAccount()

    async function getApprovedAmount(tsenderAddress: string | null) : Promise<number> {
        if(!tsenderAddress) {
            alert("No address found, please use a supported chain")
            return 0
        }

        //read from the chain to see if we have approved enough token
        const response = await  readContract(config, {
            abi: erc20Abi,
            address: tokenAddress as `0x${string}`,
            functionName: "allowance",
            args: [account.address, tsenderAddress as `0x${string}`],
        })

        return response as number 
        
    }

    async function handleSubmit() {
    //    1. Approve our tsender contract to send our tokens 
    //    2 Call the airdrop function on the tsender contract 
    //    3 Wait for the transaction to be mined 
        const tsenderAddress = chainsToTSender[chainId]["tsender"]
        const approvedAmount = await getApprovedAmount(tsenderAddress)
        
        
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
            onChange={e => setRecipients(e.target.value)} 
            large = {true}
            />

            <InputForm
            label="Amount"
            placeholder="100, 200, 300"
            value= {amounts}
            onChange={e => setAmount(e.target.value)} 
            large = {true}
            />

            <button onClick={handleSubmit} className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text -white font-semibold rounded-lg shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus: ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled: cursor-not-allowed">
                Send Tokens
            </button>
        </div>
    )
}