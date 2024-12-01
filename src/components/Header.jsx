import logo from "../assets/investment-calculator-logo.png"

export default function Header (){
    return (
        <header id = "header">
            <img src={logo} alt="logo img for investment"></img>
                    <h1>React Investment Calculator</h1>
        </header>
    )
}