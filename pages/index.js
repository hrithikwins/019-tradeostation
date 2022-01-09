import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div>
            {/* this is the header component */}
            <div className="container-flex">
                <div className="d-flex justify-content-between w-100">
                    <div className="p-3">Logo</div>
                    <div className="p-2">Other texts</div>
                </div>
            </div>
            {/* this is the banner now */}
            <div className="container">
                <div className="row">
                    <h1>Slide 1</h1>
                </div>
            </div>
        </div>
    );
}
