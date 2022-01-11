import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Index.module.css";

export default function Home() {
    return (
        <div>
            {/* this is the header component */}
            <div className="container">
                <div className="d-flex justify-content-between w-100">
                    <div className="pl-4">Logo</div>
                    <div className="p-5">Other texts</div>
                </div>
            </div>
            <hr />
            {/* this is the banner now */}
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-5">
                        <div className="d-flex flex-column justify-content-center">
                            <div className="py-4">
                                <h1 className={styles.title + " fw-bold"}>
                                    Upgrade Yourself by committing some&nbsp;
                                    <span className={styles.secondaryText}>
                                        time
                                    </span>{" "}
                                    for your
                                    <span className={styles.tertiaryText}>
                                        &nbsp;self{" "}
                                    </span>
                                </h1>
                            </div>
                            <p className={styles.paragraph}>
                                Good habits can help you achieve your goals
                            </p>
                            <div className="d-flex py-md-5">
                                <div className={styles.button}>Get Started</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="" style={{ position: "relative" }}>
                            <Image
                                src="/images/banner.jpeg"
                                className={styles.bannerImage}
                                alt="banner"
                                width={900}
                                height={1600}
                                priority={true}
                            />
                        </div>
                    </div>
                    {/* column next */}
                </div>
            </div>
            {/* end banner  */}
            {/* start container for video */}
            <div className="container">
                <div className={styles.cardHeading + " card p-5 text-center"}>
                    Learn to Leverage the Price Action Strategy and become a Pro
                    Trader
                </div>
            </div>
        </div>
    );
}
