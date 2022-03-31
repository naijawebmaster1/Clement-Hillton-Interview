import Head from 'next/head';
import styles from '../styles/Home.module.css';


export const DurationData = [
    {
        id: 1,
        number:'10',
        string:'Weeks',
    },
    {
        id: 2,
        number:'06',
        string:'Days',
    },
    {
        id: 3,
        number:'45',
        string:'Hours',
    },
    {
        id: 4,
        number:'25',
        string:'Minutes',
    },
    {
        id: 5,
        number:'06',
        string:'Seconds',
    },
];
export const DaysData = [
    {
        id: 1,
        number:'16',
    },
    {
        id: 2,
        number:'17',
    },
    {
        id: 3,
        number:'18',
    },
    {
        id: 4,
        number:'19',
    },
    {
        id: 5,
        number:'20',
    },
]


export const Days = ({number}) => {
    return (
        <>
                        <li key={number} className=" cursor-pointer w-8 h-10 flex items-center justify-center text-xs">{number}</li>
        </>
    )
}


export const Duration = ({number, string}) => {
    return (
        <>
                       <div key="duration" className="mr-5 cursor-pointer flex-col text-left w-10">
                            <h2 className={"styles.pFlexT"}>{number}</h2>
                            <p className="styles.txtSpan">{string}</p>
                        </div>
        </>
    )
}

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Travel Jinni</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex justify-between w-11/12 m-auto pb-1 pt-2">
                <div>
                    <p className="text-sm">Remaining Days to my Trip</p>
                    <div className="flex">
                        {DurationData?.map((value, index) => (<Duration key={index} number={value.number} string={value.string}/>)
                         )}
                    </div>
                </div>
                <div className="flex text-sm py-5">
                    <p className="md:px-2 pl-12">My Trips</p>
                    <div className="flex">
                        <p className="px-2">|</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <span>EN (S)</span>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-500"></div>
            <div className="md:grid grid-cols-6 md:px-14 px-6 py-4">
                <div className=" col-span-1">
                    <h1 className="font-bold text-xl font-serif py-1">Six Days In Dubai</h1>
                    <ul className="flex md:block">
                        <li className="w-8 h-8 flex items-center justify-center">FEB</li>
                        <li className="bg-opacity-50 bg-black text-yellow-300 w-8 h-8 rounded-full flex items-center justify-center border-yellow-300 border-2 text-sm font-bold font-mono" >15</li>
                        {DaysData?.map((value, index) => (<Days key={index} number={value.number}/>)
                         )}
                    </ul>
                </div>
                <div className=" mx-auto col-span-4">

                <div className="md:w-2/4 px-auto mx-auto">
                    <div className="md:flex pt-16">
                    <div className="flex justify-center ">
                    <div className="rounded-full w-20 h-20 p-2 flex items-center justify-center bg-white">
                        <img src="/logo.png" className="w-18 h-18 rounded-full inline" width="auto" height="auto"/>
                        </div>
                    </div>
                        <div className="mt-10 md:mt-2 md:ml-4 text-center border border-white w-full">
                            <h1 className=" text-4xl font-bold font-mono tracking-wide px-3">HILTON HOTEL</h1>
                            <h2 className="bg-white text-black text-xl pb-1">POWERED BY TRAVEL JINNI</h2>
                        </div>
                    </div>
                    <div className=" w-auto m-auto  text-center border-white border mt-10 md:mt-2 pt-8 px-4 bg-gray-400 bg-opacity-10 blur-filter rounded-md">
                        <h1 className="text-5xl font-serif font-bold pb-5 px-4">Your Trip Awaits You!</h1>
                        <p className="text-sm pb-5">
                            We have taken some time to help plan your trip to make it a memmorable one. Access your calender for even more things you can do on your trip.
                        </p>
                        <button className="bg-yellow-300 w-full border-black border-2 text-black font-bold py-2 mb-5">ACCESS CALENDAR</button>
                    </div>
                </div>

                </div>
                <div className=" hidden md:block col-span-1 md:mt-80">
                <div className="flex justify-end">
                <img src="/avatar.svg" className="w-18 h-18 rounded-full" width="auto" height="auto"/>
                </div>
                <div className="flex justify-end">

                <img src="/twitter.svg" className="w-18 h-18 rounded-full mt-6" width="auto" height="auto"/>
                </div>
                </div>
            </div>   
        </div >
    );
}
