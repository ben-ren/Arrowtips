//Assign props type
type TitleTextProps = {
    text: string
}

export const TitleText = (props: TitleTextProps) =>{  //Parse props into component
    return(
        <div>
            <h1 className="Title">{props.text}</h1>   {/** Ouput dynamic [text] variable using the assigned [props] */}
        </div>
    )
}