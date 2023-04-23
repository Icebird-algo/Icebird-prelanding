import { Grid, TextareaAutosize } from "@mui/material";
import Img from "./image-component";

export default function PageContent () {
  return(
    <>
      <Grid container spacing={2}>
        <Grid container>
          <Grid item xs={6} style={{ marginBottom: 'auto', marginTop: 'auto' }}>
            <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
              <div style={{ fontSize: '120px' }}>Icebird.algo</div>
              <div style={{ marginTop: '20px', height: '50px', backgroundColor: '#ab36fe' }}></div>
              <div style={{ marginTop: '20px', paddingLeft: '25px', paddingRight: '25px', fontSize: '65px' }}>We are creating NFT legal smart contracts for you</div>
            </div>
          </Grid>
          <Grid item xs={6}><Img src="images/0LOGO.jpg" fullSize={true} /></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}><Img src="images/A.jpg" fullSize={true} /></Grid>
          <Grid item xs={6}><Img src="images/B.jpg" fullSize={true} /></Grid>
        </Grid>
        <Grid item xs={12} style={{ marginTop: '30px' }}>
          <div style={{ fontWeight: 'bold', fontSize: '65px' }}>Three words</div>
          <div style={{ fontWeight: 'bold', fontSize: '50px' }}>Three words</div>
          <div style={{ fontWeight: 'bold', fontSize: '40px' }}>Three words</div>
        </Grid>
        <Grid container style={{ marginTop: '50px' }}>
          <Grid item xs={8} style={{ padding: '250px 150px 250px 150px', backgroundColor: '#ab36fe', textAlign: 'justify' }}>
            <b style={{ fontSize: '65px' }}>Secure</b>
            <br/>
            NFTs can't be faked. Pay with algo. By blockchain system, contracts can't be falsified.
          </Grid>
          <Grid item xs={4}>
            <Img src="images/C.jpg" fullSize={true} />
            </Grid>
          <Grid item xs={8} style={{ padding: '250px 150px 250px 150px', textAlign: 'justify' }}>
            <b style={{ fontSize: '65px' }}>Easy</b>
            <br/>
            Just connect your wallet and trade. Don't worry, we generate your contracts and the payment method is also 100% automatic.
          </Grid>
          <Grid item xs={4}>
            <Img src="images/D.jpg" fullSize={true} />
            </Grid>
          <Grid item xs={8} style={{ padding: '250px 150px 250px 150px', backgroundColor: '#76f834', textAlign: 'justify' }}>
            <b style={{ fontSize: '65px' }}>Green</b>
            <br/>
            Forget about paper. Save the trees.
          </Grid>
          <Grid item xs={4}>
            <Img src="images/E.jpg" fullSize={true} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} style={{ height: '50px', backgroundColor: '#ab36fe' }}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Img src="images/F.jpg" fullSize={true} />
          </Grid>
          <Grid item xs={6} style={{ paddingTop: '25px' }}>
            <div style={{ paddingLeft: '50px', fontSize: '65px', textAlign: 'left' }}>Okay...</div>
            <div style={{ paddingLeft: '50px', fontSize: '120px', textAlign: 'left' }}>But is this REAL?</div>
            <div style={{ paddingLeft: '50px', fontSize: '65px', textAlign: 'left' }}>Short answer:</div>
            <div style={{ paddingLeft: '50px', fontSize: '120px', textAlign: 'left' }}>Yes!</div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <div style={{ padding: '25px 25px 0 25px' }}>
              We are developing our product now. We ask people to tell about what they want. If you would like to help us with your opinion, just write feedback.
            </div>
            <TextareaAutosize placeholder="You can write your feedback here" style={{ marginTop: '25px', width: '50%' }} />
          </Grid>
          <Grid item xs={6}>
            <Img src="images/G.jpg" fullSize={true} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} style={{ height: '50px', backgroundColor: '#ab36fe' }}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={8} style={{ paddingLeft: '25px', paddingRight: '25px', paddingTop: '50px' }}>
            Let's talk about privacy. We know privacy is a serious thing, so we don't collect any data. Yes, it's true.
          </Grid>
          <Grid item xs={4}>
            <Img src="images/i.jpg" fullSize={true} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} style={{ paddingLeft: '25px', paddingRight: '25px' }}>
            We go even further: we are an open source project, so you can be sure about how our app works.
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} style={{ height: '50px', backgroundColor: '#ab36fe' }}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={8} style={{ paddingLeft: '25px', paddingRight: '25px' }}>
            Hey, sounds good, but how will it look like for real?
          </Grid>
          <Grid item xs={4}>
            <Img src="images/J.jpg" fullSize={true} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            *NYÍL LEFELÉ*
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            After you opened our app, you can connect your wallet. By connecting your wallet, you have to give your sign.
            Don't worry: all your data is stored on your device. As the seller, you can generate this contract automatically,
            then send it to the buyer by reading the QR code of the other one's wallet. If the buyer accepts it,
            the algos mentioned in the contract fly over to your algo wallet. After the payment,
            the contracts being signed by the icebird and saved into your wallet in NFT.
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            *NYÍL LEFELÉ* 
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            That's so easy. Plus as we said, secure and green. But what abour our team?
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={8}>
            We are based in Hungary.
          </Grid>
          <Grid item xs={4}>
            <Img src="images/K.jpg" fullSize={true} />
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}><Img src="images/profile-db.jpeg" fullSize={true} /></Grid>
          <Grid item xs={2}><Img src="images/profile-bg.jpeg" fullSize={true} /></Grid>
          <Grid item xs={2}><Img src="images/profile-ka.jpeg" fullSize={true} /></Grid>
          <Grid item xs={2}><Img src="images/profile-fm.jpeg" fullSize={true} /></Grid>
          <Grid item xs={2}><Img src="images/profile-gv.jpeg" fullSize={true} /></Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>Dombi Balázs</Grid>
          <Grid item xs={2}>Begál Gábor</Grid>
          <Grid item xs={2}>Kolozsi Ádám</Grid>
          <Grid item xs={2}>Ferencsik Márk</Grid>
          <Grid item xs={2}>Gubicza Viktor</Grid>
        </Grid>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={2} style={{ fontSize: '30px' }}>CEO</Grid>
          <Grid item xs={2} style={{ fontSize: '30px' }}>COO</Grid>
          <Grid item xs={2} style={{ fontSize: '30px' }}>CFO</Grid>
          <Grid item xs={2} style={{ fontSize: '30px' }}>Frontend developer</Grid>
          <Grid item xs={2} style={{ fontSize: '30px' }}>Backend developer</Grid>
        </Grid>
        <Grid item xs={12}>Csapat</Grid>
        <Grid item xs={12}>Design</Grid>
        <Grid item xs={12}>If you want to support our project, just buy some NFT's from our icebird collection. *LINK*</Grid>
        <Grid container>
          <Grid item xs={4}>
            <Img src="images/L.jpg" fullSize={true} />
          </Grid>
          <Grid item xs={4}>
            <Img src="images/M.jpg" fullSize={true} />
          </Grid>
          <Grid item xs={4}>
            <Img src="images/N.jpg" fullSize={true} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={8}>
            <div style={{ fontSize: '150px' }}>Let's make it happen!</div>
          </Grid>
          <Grid item xs={4}>
            <Img src="images/O.jpg" fullSize={true} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}