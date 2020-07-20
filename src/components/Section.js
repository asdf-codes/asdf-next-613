export default function Section(props) {
    return(
        <>
        <div className="section">
            {props.children}
        </div>

        <style jsx>{`
            .section {
                min-height: 100vh;
                display: grid;
            }
        `}</style>
        </>
    )
}