export default function Movie({title}) {
    
    return (
            <h2>
                {title} {title === "Iron Man" &&   <em> - In Cinemas Now!</em>}
            </h2>
        )
}