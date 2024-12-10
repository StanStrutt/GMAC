import "./FAB.css"

export default function FAB(props) {


    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"})
    }


    return(
        <div className="up-arrow" onClick={scrollUp} >
            <p>&#8593;</p>
        </div>
    )
}