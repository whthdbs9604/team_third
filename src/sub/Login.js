import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../css/login.css';

export default function Login({title}) {

    const { setHeaderTitle } = useOutletContext();
    useEffect(() => {
    setHeaderTitle(title);
    }, [title, setHeaderTitle]);

    return(
        <div id='login_wrap'>

            <h3><Link to="/"><img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="로고" /></Link></h3>

            <div id='login_form'>
                <form  action="login.php" method="post" name="blanc_form">
                    <fieldset>
                        <legend>로그인</legend>

                        <label for="id">아이디</label>
                        <input type="text" maxlength="15" name="id" id="id" placeholder='아이디를 입력해주세요.'/>

                        <label for="pass">비밀번호</label>
                        <input type="password" maxlength="15" name="pass" id="pass" placeholder='비밀번호를 입력해주세요.' /><br/>

                        <div id="button">
                            <input type="submit" value="로그인"/>
                        </div>

                        <div id="member_search">
                            <Link to="id_input.php">아이디 찾기</Link>
                            <Link to="pw_input.php">비밀번호 찾기</Link>
                        </div>

                        <p>아직 계정이 없으신가요? <Link to="member_form.php">회원가입</Link></p>

                    </fieldset>
                </form>
            </div>

        </div>
        
    )

}