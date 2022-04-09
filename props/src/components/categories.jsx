export const Category = ({image,label})=>{
    return (
        <div>
            <img src={image} alt="" />
            <b>{label}</b>
        </div>
    )
}