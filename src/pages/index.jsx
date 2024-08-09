


import ActionChip from '@/components/ActionChip';
import PrimaryButton from '@/components/PrimaryButton';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter()
    return (
        <div className='display flex flex-col gap-16 items-center justify-center mt-24'>
            <ActionChip info={'Things yo should know about E-waste'} label={'Read more'} onClick={()=>router.push('https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)')} />
            <div className='display flex flex-col items-center gap-4 justify-center'>
                <span className='text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r leading-snug line from-primary-800 to-primary-600'>Where PC Gamers Come</span>
                <span className='text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r leading-snug from-slate-400 to-slate-50'>To Build Their Perfect Rig</span>
                <span className='text-slate-400'>The ultimate market place to buy and sell you components</span>
            </div>
            <div className='display flex flex-row items-center gap-16 justify-center'>
                <PrimaryButton label='Start buying' onClick={()=>router.push('/buy')}></PrimaryButton>
                <PrimaryButton label='Start Selling' onClick={()=>router.push('/sell')}></PrimaryButton>
            </div>


        </div>
    );
}