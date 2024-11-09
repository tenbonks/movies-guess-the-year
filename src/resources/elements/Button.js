export default function Button({children, onClick, additionalClasses = ""}) {
    return <button className={`button ${additionalClasses}`}
                   onClick={() => onClick(states.isShowingAddBorrower)}>{children}</button>
}