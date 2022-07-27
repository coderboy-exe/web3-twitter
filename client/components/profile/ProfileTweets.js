import Image from "next/image"

import Post from "../Post"
import pic from '../../public/pic.jpg'

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
        displayName: 'Uche',
        userName: '0x89werhfhwrf898984934900ewjD',
        avatar: 
            <Image 
                src={pic}
                width={30}
                height={30}
            />,
        text: 'gm',
        isProfileImgNft: false,
        timestamp: '2022-07-02T12:00:00.000Z', // sanity format for timestamps
    },
    {
        displayName: 'Uche',
        userName: '0x89werhfhwrf898984934900ewjD',
        avatar: 
            <Image 
                src={pic}
                width={50}
                height={50}
            />,
        text: 'gm',
        isProfileImgNft: false,
        timestamp: '2022-07-22T12:00:00.000Z', // sanity format for timestamps
    },
    {
        displayName: 'Uche',
        userName: '0x89werhfhwrf898984934900ewjD',
        avatar:
            <Image 
                src={pic}
                width={50}
                height={50}
            />,
        text: 'gm',
        isProfileImgNft: false,
        timestamp: '2022-07-23T08:00:00.000Z', // sanity format for timestamps
    },
    {
        displayName: 'Uche',
        userName: '0x89werhfhwrf898984934900ewjD',
        avatar:
            <Image 
                src={pic}
                width={50}
                height={50}
            />,
        text: 'gm',
        isProfileImgNft: false,
        timestamp: '2021-06-02T12:00:00.000Z', // sanity format for timestamps
    },
]

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
        {tweets.map((tweet, index) => (
            <Post 
                key={index}
                displayName={tweet.displayName}
                userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(-4)}`}
                text={tweet.text}
                avatar={tweet.avatar}
                isProfileImageNft={tweet.isProfileImgNft}
                timestamp={tweet.timestamp}

            />
        ))}
    </div>
  )
}

export default ProfileTweets