export default function Img ({src, fullSize, isArrow}: {src: string, fullSize: boolean, isArrow: boolean}) {
    const aspectRatio = window.innerWidth / window.innerHeight;
    console.log(aspectRatio);
    return(
        <img src={src} alt="Kép" style={{ width: fullSize ? (isArrow ? 'calc(100% * 0.3)' : '100%') : (isArrow ? '14.0625vw' : 'auto'), height: fullSize ? (isArrow ? 'auto' : '100%') : (isArrow ? '25vh' : 'auto'), marginTop: 'auto', marginBottom: 'auto' }} />
    )
}