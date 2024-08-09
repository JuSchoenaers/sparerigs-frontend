


import login from '@/app/api/user';
import encrypt from '@/app/util/encryption';
import AppLink from '@/components/AppLink';
import InputCheckbox from '@/components/InputCheckbox';
import InputPassword from '@/components/InputPassword';
import InputText from '@/components/InputText';
import PrimaryButton from '@/components/PrimaryButton';
import { useRouter } from 'next/navigation';
import { useState } from 'react';



async function doLogin(loginData) {
    const userEncryptPromise = encrypt(loginData.user)
    const passwordEncryptPromise = encrypt(loginData.password)
    var encryptedData = await Promise.all([userEncryptPromise, passwordEncryptPromise])
        .then((encryption) => {
            return { "user": encryption[0], "password": encryption[1] }
        })
        .catch((error) => {
            console.error('Error Encrypting data:', error);
        });
    login(encryptedData).then(data => {
        if (data.token) {
            localStorage.setItem('jwtToken', data.token);
            return true
        }else{
            return false
        }
    }).catch(error => {
        console.log(error)
    })
}

export default function SignIn() {
    const router = useRouter()
    const [loginData, setLoginData] = useState({ "user": "", "password": "" })
    const [errorMessageVisible, setErrorMessageVisible] = useState(false)
    const submit = () => {
        doLogin(loginData).then(val=>{
            if(val){
                router.push('/')
            }else{
                setErrorMessageVisible(val)
            }
        })



    }

    const handleChange = (field, value) => {
        setLoginData({ ...loginData, [field]: value })
    }

    return (
        <div className='w-1/3 h-1/2 m-auto  bg-tertiary-900 justify-center items-center rounded-2xl flex flex-col gap-8 py-12 px-24'>
            <h1 className='text-2xl'>Sign in</h1>
            <InputText name="user" type='text' className='w-full' placeholder='Email or username' onChange={(e) => handleChange('user', e.target.value)}></InputText>
            <InputPassword name="password" className='w-full' placeholder='Password' onChange={(e) => handleChange('password', e.target.value)}></InputPassword>
            {errorMessageVisible &&
                <span className='text-red-800'>Invalid login attempt</span>
            }
            <div className='flex flex-row text-sm justify-between items-center w-full px-2'>
                <InputCheckbox name="remember" label={'Remember me'} value={loginData.remember} onChange={(e) => handleChange('remember', e.target.value)}></InputCheckbox>
                <AppLink href='/'>Forgot password ?</AppLink>
            </div>
            <PrimaryButton label='Sign in' className="w-28" onClick={submit}></PrimaryButton>
            <div className='flex flex-row text-sm justify-center gap-2 items-center w-full px-2'>
                <span>Don't have an account yet ?</span>
                <AppLink href='/signUp'>Create your account !</AppLink>
            </div>
        </div>
    );
}