import { Grid } from "@mui/material";
import Img from "./image-component";

export default function PageContent () {
  return(
    <>
      <Grid container>
        <Grid container>
          <Grid item xs={6}>
            <div>Icebird Algo</div>
            <hr/>
            <div>For You</div>
          </Grid>
          <Grid item xs={6}><Img src="images/0LOGO.jpg" /></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}><Img src="images/A.jpg" /></Grid>
          <Grid item xs={6}><Img src="images/B.jpg" /></Grid>
        </Grid>
        <Grid item xs={12}>
          <h2>Three words</h2>
          <h3>Three words</h3>
          <h4>Three words</h4>
        </Grid>
        <Grid item xs={8}>
          Secure: NFTs can't be faked. Pay with algo. By blockchain system, contracts can't be falsified.
        </Grid>
        <Grid item xs={4}><Img src="images/C.jpg" /></Grid>
        <Grid item xs={8}>Easy: just connect your wallet and trade. Don't worry, we generate your contracts and the payment method is also 100% automatic</Grid>
        <Grid item xs={4}><Img src="images/D.jpg" /></Grid>
        <Grid item xs={8}>Green: forget about paper. Save the trees.</Grid>
        <Grid item xs={4}><Img src="images/E.jpg" /></Grid>
        <Grid item xs={12}>Ooooooookay</Grid>
        <Grid item xs={4}><Img src="images/F.jpg" /></Grid>
        <Grid item xs={8}>But is this REAL?</Grid>
        <Grid item xs={12}>Short answer:</Grid>
        <Grid item xs={6}>Yes!</Grid>
        <Grid item xs={6}><Img src="images/G.jpg" /></Grid>
        <Grid item xs={12}>We are developing our product now. We ask people to tell about what they want. If you would like to help us with your opinion, just write feedback.</Grid>
        <Grid item xs={12}>9-es szövegdoboz (max 250 karakter)</Grid>
        <Grid item xs={12}>*Design elemek...*</Grid>
        <Grid item xs={8}>Let's talk about privacy. We know privacy is a serious thing, so we don't collect any data. Yes, it's true.</Grid>
        <Grid item xs={4}><Img src="images/I.jpg" /></Grid>
        <Grid item xs={12}>We go even further: we are an open source project, so you can be sure about how our app works.</Grid>
        <Grid item xs={12}>Design</Grid>
        <Grid item xs={8}>Hey, sounds good, but how will it look like for real?</Grid>
        <Grid item xs={4}><Img src="images/J.jpg" /></Grid>
        <Grid item xs={12}>*NYÍL LEFELÉ*</Grid>
        <Grid item xs={12}>After you opened our app, you can connect your wallet. By connecting your wallet, you have to give your sign.
        Don't worry: all your data is stored on your device. As the seller, you can generate this contract automatically,
        then send it to the buyer by reading the QR code of the other one's wallet. If the buyer accepts it,
        the algos mentioned in the contract fly over to your algo wallet. After the payment,
        the contracts being signed by the icebird and saved into your wallet in NFT.</Grid>
        <Grid item xs={12}>*NYÍL LEFELÉ*</Grid>
        <Grid item xs={12}>That's so easy. Plus as we said, secure and green. But what abour our team?</Grid>
        <Grid item xs={8}>We are based in Hungary.</Grid>
        <Grid item xs={4}><Img src="images/K.jpg" /></Grid>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>*KÉP*</Grid>
          <Grid item xs={2}>*KÉP*</Grid>
          <Grid item xs={2}>*KÉP*</Grid>
          <Grid item xs={2}>*KÉP*</Grid>
          <Grid item xs={2}>*KÉP*</Grid>
        </Grid>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>Dombi Balázs</Grid>
          <Grid item xs={2}>Begál Gábor</Grid>
          <Grid item xs={2}>Kolozsi Ádám</Grid>
          <Grid item xs={2}>Ferencsik Márk</Grid>
          <Grid item xs={2}>Gubicza Viktor</Grid>
        </Grid>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>CEO</Grid>
          <Grid item xs={2}>COO</Grid>
          <Grid item xs={2}>CFO</Grid>
          <Grid item xs={2}>Frontend developer</Grid>
          <Grid item xs={2}>Backend developer</Grid>
        </Grid>
        <Grid item xs={12}>Csapat</Grid>
        <Grid item xs={12}>Design</Grid>
        <Grid item xs={12}>If you want to support our project, just buy some NFT's from our icebird collection. *LINK*</Grid>
        <Grid item xs={4}><Img src="images/L.jpg" /></Grid>
        <Grid item xs={4}><Img src="images/M.jpg" /></Grid>
        <Grid item xs={4}><Img src="images/N.jpg" /></Grid>
        <Grid item xs={8}>Let's make it happen!</Grid>
        <Grid item xs={4}><Img src="images/O.jpg" /></Grid>
      </Grid>
    </>
  )
}