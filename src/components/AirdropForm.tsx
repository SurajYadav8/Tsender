"use client"
import {InputForm} from "@/components/ui/InputField"
import {useState} from "react"

export default function AirdropForm() {
    const [tokenAddress, setTokenAddress] = useState("")
    const [recipients, setRecipients] = useState("")
    const [amounts, setAmount] = useState("")

    async function handleSubmit() {
        console.log("submitted")
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