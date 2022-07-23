import { BsStars } from 'react-icons/bs'
import Post from '../Post'
import TweetBox from './TweetBox'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d]`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }

const tweets = [
    {
        displayName: 'Uche',
        userName: '0x89werhfhwrf898984934900ewjD',
        avatar: '../../public/pic.png',
        text: 'gm',
        isProfileImgNft: false,
        timestamp: '2022-06-02T12:00:00.000Z', // sanity format for timestamps
    },
    {
        displayName: 'Uche',
        userName: '0x89werhfhwrf898984934900ewjD',
        avatar: '../../public/pic.png',
        text: 'gm',
        isProfileImgNft: false,
        timestamp: '2022-06-02T12:00:00.000Z', // sanity format for timestamps
    },
    {
        displayName: 'Uche',
        userName: '0x89werhfhwrf898984934900ewjD',
        avatar: '../../public/pic.png',
        text: 'gm',
        isProfileImgNft: false,
        timestamp: '2022-06-02T12:00:00.000Z', // sanity format for timestamps
    },
    {
        displayName: 'Uche',
        userName: '0x89werhfhwrf898984934900ewjD',
        avatar: '../../public/pic.png',
        text: 'gm',
        isProfileImgNft: false,
        timestamp: '2022-06-02T12:00:00.000Z', // sanity format for timestamps
    },
]

const HomeFeed = () => {
  return (
    <div className={style.wrapper}>
        <div className={style.header}>
            <div className={style.headerTitle}>Home</div>
            <BsStars />
        </div>
        <TweetBox />
        {
            tweets.map((tweet, index) => (
                <Post 
                    key={index}
                    displayName={tweet.displayName}
                    userName={tweet.userName}
                    avatar={tweet.avatar}
                    text={tweet.text}
                    isProfileImgNft={tweet.isProfileImgNft}
                    timestamp={tweet.timestamp}
                />
            ))
        }
    </div>
  )
}

export default HomeFeed