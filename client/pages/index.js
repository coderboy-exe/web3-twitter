import { useContext } from "react"
import { TwitterContext } from "../context/TwitterContext"

//Components
import HomeFeed from "../components/home/HomeFeed"
import Sidebar from "../components/Sidebar"
import Widgets from "../components/Widgets"
import Image from "next/image"

import metamaskLogo from '../assets/metamask.png'
import errorImage from '../assets/error.png'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `max-w-[1400px] w-2/3 flex justify-between`,
  loginContainer: `w-full h-full flex flex-col justify-center items-center pb-48`,
  walletConnectButton: `text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]`,
  loginContent: `text-3xl font-bold text-center mt-24`,
  loadingContent: `text-3xl font-bold text-center mt-24 animate-pulse`,
}

export default function Home() {
  const { appStatus, connectWallet } = useContext(TwitterContext)

  const app = (status = appStatus) => {
    switch (status) {
      case 'connected':
        return userLoggedIn

      case 'notConnected':
        return noUserFound

      case 'noMetamask':
        return noMetamaskFound

      case 'error':
        return error

      default:
        return loading
    }
  }

  const userLoggedIn = (
    <div className={style.content}>
      <Sidebar />
      <HomeFeed />
      <Widgets />
    </div>
  )

  const noUserFound = (
    <div className={style.loginContainer}>
      <Image src={metamaskLogo} height={200} width={200} />
      <div
        className={style.walletConnectButton}
        onClick={() => connectWallet()}
      >
        Connect Wallet
      </div>
      <div className={style.loginContent}>
        Connect to Wallet
      </div>
    </div>
  )

  const noMetamaskFound = (
    <div className={style.loginContainer}>
      <Image src={metamaskLogo} height={200} width={200} />
      <div>
        <a 
          target="_blank"
          rel="noreferrer"
          href={'https://metamask.io/download.html'}
        >
          Please install Metamask, <br/> a virtual Ethereum wallet, in
          your browser.
        </a>
      </div>
    </div>
  )

  const error = (
    <div className={style.loginContainer}>
      <Image src={errorImage} height={200} width={200} />
      <div className={style.loginContent}>
          Oops! We're having a hard time processing your request.
          Please try again later or use another browser
      </div>
    </div>
  )

  const loading = (
    <div className={style.loginContainer}>
      <div className={style.loadingContent}>
        Loading...
      </div>
    </div>
  )

  return (
    <div className={style.wrapper}>
      {app(appStatus)}
    </div>
  )
}
