export default function Img ({src}: {src: string}) {
    return(
        <img src={src} alt="Kép" style={{ width: '100%', height: '100%' }} />
    )
}