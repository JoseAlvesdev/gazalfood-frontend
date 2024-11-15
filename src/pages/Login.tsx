import Input from "@/components/Input";
import { useState } from "react";

export default function Login() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [user, setUser] = useState({});

    function verificarLogin(e) {
        e.preventDefault();
        setUser(
            { username: username, password: password }
        );
        setUsername('');
        setPassword('');
    }
    
    return (
        <div className="c-login">
            <div className="c-login__wrapper o-flex-container">
                <div className="c-login__left">
                    
                </div>
                <div className="c-login-card o-flex-container">
                    <h1 className="c-login-card__title">Faça login</h1>
                    <form onSubmit={verificarLogin} className="c-login-card__form o-flex-container">
                        <Input label="Email" id="email" type="text" value={username} state={setUsername} />
                        <Input label="Senha" id="password" type="password" value={password} state={setPassword} />
                        <Input label="Lembrar login" id="checkbox" type="checkbox" />
                        <button className="c-login-card__button" type="submit">Entrar</button>
                        <div className="c-login-card_links o-flex-container">
                            <a className="c-login-card__link c-login-card__link--secondary" href="#">Esqueci a senha</a>
                            <a className="c-login-card__link" href="#">Criar conta</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
