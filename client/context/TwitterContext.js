import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const TwitterContext = createContext()

export const TwitterProvider = ({ children }) => {
    const [appStatus, setAppStatus] = useState('');
    const [currentAccount, setCurrentAccount] = useState('')

    const router = useRouter()

    useEffect(() => {
      checkIfWalletIsConnected ()
    }, [])
    

    const checkIfWalletIsConnected = async () => {
        if (!window.ethereum) return setAppStatus('noMetamask')

        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
        })
        if (addressArray.length > 0) {
            setAppStatus('connected')
            setCurrentAccount(addressArray[0])
        } else {
            router.push('/')
            setAppStatus('notConnected')
        }

        } catch (error) {
            console.log(error)
        }
    }

    //Initiate Metamask Connection
    const connectWallet = async () => {
        if (!window.ethereum) return setAppStatus('noMetamask')

        try {
            setAppStatus('loading')

            const addressArray = await window.ethereum.request({
                method: 'eth_requestAccounts'
            })
            if (addressArray.length > 0) {
                setCurrentAccount(addressArray[0])
                setAppStatus('connected')
            } else {
                router.push('/')
                setAppStatus('notConnected')
            }

        } catch (error) {
            setAppStatus('error')
        }
    }


    return (
        <TwitterContext.Provider value={{ appStatus, currentAccount, connectWallet }}>
            {children}
        </TwitterContext.Provider>
    )
}