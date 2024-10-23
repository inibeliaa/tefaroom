import Navbar from "../component/navbar";
import Header from "../component/header";
import Room from "../component/room";
import Footer from "../component/footer";




export default function Home() {
    return (
        <>
            <div><Navbar /></div>
            <div><Header/></div>
            <div><Room/></div>
            <div><Footer/></div>
        </>
    );
}