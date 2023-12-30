import logo from '../../assets/images/logo.png'

export default function Head() {
    return (
        <div style={{ display: "flex", margin: "1.4rem", backgroundColor: "black", padding: "0.5rem", borderRadius: "1rem",}}>
            <img src={logo} style={{ width: "3rem", height: "3rem", margin: "0.5rem" }} />
            <div style={{ margin: "0.7rem 0.6rem" }}>
                <p style={{ fontWeight: "550", color: "#5C92F7"}}>Task Mangement App</p>
                <p style={{ fontSize: "0.5rem", marginLeft: "5.7rem", color: "#fff" }}>Manage Your Task</p>
            </div>
        </div>
    )
}