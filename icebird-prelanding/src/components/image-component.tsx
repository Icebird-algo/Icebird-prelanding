export default function Img ({src, fullSize}: {src: string, fullSize: boolean}) {
    return(
        <img src={src} alt="Kép" style={{ width: fullSize ? '100%' : 'auto', height: fullSize ? '100%' : 'auto', marginTop: 'auto', marginBottom: 'auto' }} />
    )
}