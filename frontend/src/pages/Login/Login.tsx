import "./Login.css";

import LoginCard from "../../components/Auth/LoginCard/LoginCard";
import LoginForm from "../../components/Auth/LoginForm/LoginForm";

export default function Login() {

    return (

        <div className="login-page">

            <LoginCard>

                <LoginForm />

            </LoginCard>

        </div>

    );

}