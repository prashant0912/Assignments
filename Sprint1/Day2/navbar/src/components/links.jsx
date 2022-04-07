export const Links = ()=>{
    const data = ["Services","Projects","About"]
    return (
        <div id = "link">
            {data.map((e)=>{
                return <div id = "check">{e}</div>
            })}
        </div>
    )
}