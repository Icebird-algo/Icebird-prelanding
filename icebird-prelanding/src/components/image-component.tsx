export default function Img ({src, fullSize, isArrow}: {src: string, fullSize: boolean, isArrow: boolean}) {
    return(
        <img src={src} alt="Kép" style={{ width: fullSize ? '100%' : (isArrow ? '14.0625vw' : 'auto'), height: fullSize ? '100%' : (isArrow ? '25vh' : 'auto'), marginTop: 'auto', marginBottom: 'auto' }} />
    )
}