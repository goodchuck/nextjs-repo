
import { auth } from '@/auth'
import LoginModal from '../_component/LoginModal';
import LogoutButton from '../_component/LogoutButton';
import styles from './page.module.css';

export default async function Login() {
    const session = await auth();
    console.log(session)
    // if (session?.user) {
    //     redirect('/home');
    //     return null;
    // }



    return (
        <div>
            <div>
                <h3>사용버전</h3>
                <span>next-auth version : 5.0.0-beta.3</span>
                <h3>사용법</h3>

            </div>
            <div>
                <h3>로그인 부분</h3>
                <div>해당부분은 session에 저장되지 않으면 보이지않습니다. 아래 로그아웃 버튼을 눌러 로그아웃을 해주세요</div>
                {!session && <LoginModal />}
            </div>
            <div>
                <h3>로그아웃 부분</h3>
                <div>해당 아래 부분은 위 로그인을 통해서 나오게되면 보입니다!</div>
                <LogoutButton me={session}></LogoutButton>
            </div>
        </div>
    )
}