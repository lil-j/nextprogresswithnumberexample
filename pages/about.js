import styles from "../styles/Home.module.css";

function About({ stars }) {
    return <div style={{marginTop:"10rem"}}><div className={styles.title}>
        Nextjs has {stars} stars!
    </div></div>
}

About.getInitialProps = async (ctx) => {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
}

export default About