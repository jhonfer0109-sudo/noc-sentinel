import "./LoginCard.css";

interface Props {

    children: React.ReactNode;

}

export default function LoginCard({ children }: Props) {

    return (

        <div className="login-card">

            <div className="login-logo">

                🛡️

            </div>

            <h1>NOC Sentinel</h1>

            <p>

                Intelligent Network Operations Center

            </p>

            {children}

            <small>

                Powered by Sentinel IA

            </small>

        </div>

    );

}