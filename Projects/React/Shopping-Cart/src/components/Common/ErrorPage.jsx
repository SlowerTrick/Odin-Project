import { Link } from "react-router-dom";
import PageWrapper from "./PageWrapper";
import Title from "./Title";

export default function ErrorPage() {
    return (
        <PageWrapper>
            <Title text="Error! Page not found" />
            <Link to="/" className="btn btnPrimary" style={{ marginTop: "var(--size-5)" }}>
                Back to Home
            </Link>
        </PageWrapper>
    );
}


