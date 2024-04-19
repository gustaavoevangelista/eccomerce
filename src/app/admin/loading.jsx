import styles  from "./page.module.css"

export default function AdminLoading() {
    return <div className={styles.adminLoading}><div className={styles.spinner}></div></div>
}