import './createTheme.scss'


const CreateTheme = (props: any): JSX.Element => {
    return (
        <div className='create-theme' onClick={() => {
            props.setThems(true)
            props.addTheme(props.text, props.src)
        }}>
            <h1>{props.text}</h1>
            <img src={props.src} alt={props.text} />
        </div>
    )

}

export default CreateTheme;