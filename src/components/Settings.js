import TitleBar from "./TitleBar"
import { Container } from "react-bootstrap"

export default function Settings(props) {
    return (
        <>
            <Container fluid className="main-container">
                <TitleBar title="Settings"></TitleBar>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%' }}>
                    <h1 className="title" style={{ textAlign: 'center' }}>Coming Soon :)</h1>
                </div>
            </Container>
        </>
    )
}