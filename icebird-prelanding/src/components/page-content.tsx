import { Grid, TextareaAutosize, useMediaQuery, useTheme } from "@mui/material";
import Img from "./image-component";
import { useEffect, useState } from "react";

export default function PageContent () {
  const [sizeCoefficient, setSizeCoefficient] = useState(1);

  const theme = useTheme();
  const isLSize = useMediaQuery(theme.breakpoints.down(1300));
  const isMSize = useMediaQuery(theme.breakpoints.down(1050));
  const isSSize = useMediaQuery(theme.breakpoints.down(850));
  const isXSSize = useMediaQuery(theme.breakpoints.down(600));

  useEffect(() => {
    console.log('Large:', isLSize, 'Medium:', isMSize, 'Small:', isSSize, 'Extra small:', isXSSize);
    if(isXSSize) setSizeCoefficient(0.35);
    else {
      if(isSSize) setSizeCoefficient(0.45);
      else {
        if(isMSize) setSizeCoefficient(0.6);
        else{
          if(isLSize) setSizeCoefficient(0.8);
          else setSizeCoefficient(1);
        }
      }
    }
  }, [isLSize, isMSize, isSSize, isXSSize]);

  return(
    <>
      <Grid container spacing={2}>
        <Grid container>
          <Grid item xs={6} style={{ marginBottom: 'auto', marginTop: 'auto' }}>
            <div style={{ marginTop: 'auto', marginBottom: 'auto',  paddingTop: 40 * sizeCoefficient }}>
              <div style={{ fontSize: isXSSize ? (80 * sizeCoefficient) : 120 * sizeCoefficient }}>Icebird.algo</div>
              <div style={{ marginTop: 20 * sizeCoefficient, height: '50px', backgroundColor: '#ab36fe' }}></div>
              <div style={{ marginTop: 20 * sizeCoefficient, marginBottom: 40 * sizeCoefficient, paddingLeft: '25px', paddingRight: '25px', fontSize: 65 * sizeCoefficient }}>We are creating NFT legal smart contracts for you</div>
            </div>
          </Grid>
          <Grid item xs={6}><Img src="images/0LOGO.jpg" fullSize={true} isArrow={false} /></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}><Img src="images/A.jpg" fullSize={true} isArrow={false} /></Grid>
          <Grid item xs={6}><Img src="images/B.jpg" fullSize={true} isArrow={false} /></Grid>
        </Grid>
        <Grid item xs={12} style={{ marginTop: '30px' }}>
          <div style={{ fontWeight: 'bold', fontSize: 65 * sizeCoefficient }}>Three words</div>
          <div style={{ fontWeight: 'bold', fontSize: 50 * sizeCoefficient }}>Three words</div>
          <div style={{ fontWeight: 'bold', fontSize: 40 * sizeCoefficient }}>Three words</div>
        </Grid>
        <Grid container style={{ marginTop: '50px' }}>
          <Grid item xs={8} style={{ paddingTop: 250 * sizeCoefficient, paddingBottom: 250 * sizeCoefficient, paddingLeft: 150 * sizeCoefficient, paddingRight: 150 * sizeCoefficient, backgroundColor: '#ab36fe', textAlign: 'justify', lineHeight: sizeCoefficient }}>
            <b style={{ fontSize: 65 * sizeCoefficient }}>Secure</b>
            <br/>
            <b style={{ fontWeight: 'normal', fontSize: 50 * sizeCoefficient }}>NFTs can't be faked. Pay with algo. By blockchain system, contracts can't be falsified.</b>
          </Grid>
          <Grid item xs={4}>
            <Img src="images/C.jpg" fullSize={true} isArrow={false} />
            </Grid>
          <Grid item xs={8} style={{ paddingTop: 250 * sizeCoefficient, paddingBottom: 250 * sizeCoefficient, paddingLeft: 150 * sizeCoefficient, paddingRight: 150 * sizeCoefficient, textAlign: 'justify', lineHeight: sizeCoefficient }}>
            <b style={{ fontSize: 65 * sizeCoefficient }}>Easy</b>
            <br/>
            <b style={{ fontWeight: 'normal', fontSize: 50 * sizeCoefficient }}>Just connect your wallet and trade. Don't worry, we generate your contracts and the payment method is also <b>100%</b> automatic.</b>
          </Grid>
          <Grid item xs={4}>
            <Img src="images/D.jpg" fullSize={true} isArrow={false} />
            </Grid>
          <Grid item xs={8} style={{ paddingTop: 250 * sizeCoefficient, paddingBottom: 250 * sizeCoefficient, paddingLeft: 150 * sizeCoefficient, paddingRight: 150 * sizeCoefficient, backgroundColor: '#76f834', textAlign: 'justify', lineHeight: sizeCoefficient }}>
            <b style={{ fontSize: 65 * sizeCoefficient }}>Green</b>
            <br/>
            <b style={{ fontWeight: 'normal', fontSize: 50 * sizeCoefficient }}>Forget about paper. Save the trees.</b>
          </Grid>
          <Grid item xs={4}>
            <Img src="images/E.jpg" fullSize={true} isArrow={false} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} style={{ height: '50px', backgroundColor: '#ab36fe' }}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <Img src="images/F.jpg" fullSize={true} isArrow={false} />
          </Grid>
          <Grid item xs={6} style={{ paddingTop: 25 * sizeCoefficient }}>
            <div style={{ paddingLeft: 50 * sizeCoefficient, fontSize: 65 * sizeCoefficient, textAlign: 'left' }}>Okay...</div>
            <div style={{ paddingLeft: 50 * sizeCoefficient, fontSize: 120 * sizeCoefficient, textAlign: 'left' }}>But is this real?</div>
            <div style={{ paddingLeft: 50 * sizeCoefficient, fontSize: 65 * sizeCoefficient, textAlign: 'left' }}>Short answer:</div>
            <div style={{ paddingLeft: 50 * sizeCoefficient, fontSize: 120 * sizeCoefficient, textAlign: 'left' }}>Yes!</div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <div style={{ paddingTop: 50 * sizeCoefficient, paddingRight: 150 * sizeCoefficient, paddingLeft: 150 * sizeCoefficient, textAlign: 'justify', fontSize: 50 * sizeCoefficient }}>
              We are developing our product now. We ask people to tell about what they want. If you want to help us with your opinion, just write feedback.
            </div>
            <TextareaAutosize placeholder="You can write your feedback here" style={{ marginTop: '25px', width: '50%' }} />
          </Grid>
          <Grid item xs={6}>
            <Img src="images/G.jpg" fullSize={true} isArrow={false} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} style={{ height: '50px', backgroundColor: '#76f834' }}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={8} style={{ paddingLeft: 150 * sizeCoefficient, paddingRight: 150 * sizeCoefficient, paddingTop: 50 * sizeCoefficient, textAlign: 'justify', fontSize: 50 * sizeCoefficient }}>
            Let's talk about privacy. We know privacy is a serious thing, so we don't collect any data. Yes, it's true.
          </Grid>
          <Grid item xs={4}>
            <Img src="images/i.jpg" fullSize={true} isArrow={false} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} style={{paddingTop: 50 * sizeCoefficient, paddingBottom: 50 * sizeCoefficient, paddingLeft: 150 * sizeCoefficient, paddingRight: 50 * sizeCoefficient, textAlign: 'right', fontSize: 50 * sizeCoefficient }}>
            We go even further: we are an open source project, <br/> so you can be sure about how <br/> our app works.
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} style={{ height: '50px', backgroundColor: '#76f834' }}></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={8} style={{ paddingLeft: 150 * sizeCoefficient, paddingRight: '25px', paddingTop: 25 * sizeCoefficient, textAlign: 'right', fontSize: 120 * sizeCoefficient }}>
            <div style={{ lineHeight: isSSize ? (sizeCoefficient + 0.5) : (sizeCoefficient + 0.2) }}>
              Hey! <br/> <b style={{ fontWeight: 'normal', fontSize: 80 * sizeCoefficient }}>Sounds good, but how will it look like for real?</b>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Img src="images/J.jpg" fullSize={true} isArrow={false} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Img src="images/arrow.png" fullSize={true} isArrow={false} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} style={{ paddingLeft: 150 * sizeCoefficient, paddingRight: 150 * sizeCoefficient, textAlign: 'justify', fontSize: 50 * sizeCoefficient }}>
            After you opened our app, you can connect your wallet. By connecting your wallet, you have to give your sign.
            Don't worry: all your data is stored on your device. As the seller, you can generate the contract automatically,
            then send it to the buyer by reading the QR code of the other one's wallet. If the buyer accepts it,
            the algos, or the money mentioned in the contract fly over to your wallet. After the payment,
            the contracts being signed by the icebird and saved into your algo wallet in NFT.
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Img src="images/arrow.png" fullSize={true} isArrow={false} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={8}>
            <div style={{ paddingRight: 50 * sizeCoefficient, textAlign: 'right', fontSize: 50 * sizeCoefficient }}>
              That's so <b style={{ fontWeight: 'normal', backgroundColor: 'white', color: 'black' }}>easy</b>.
              <div>
                Plus, as we said, <b style={{ fontWeight: 'normal', color: '#ab36fe' }}>secure</b> <br/> and <b style={{ fontWeight: 'normal', color: '#76f834' }}>green</b>.
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <Img src="images/K.jpg" fullSize={true} isArrow={false} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div style={{ height: '50px', backgroundColor: '#ab36fe' }}></div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <div style={{ marginTop: 50 * sizeCoefficient, fontSize: 50 * sizeCoefficient }}>
              Please, let us introduce our team!
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={4} style={{ marginTop: 50 * sizeCoefficient }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}><Img src="images/profile-db.jpeg" fullSize={true} isArrow={false} /></Grid>
          <Grid item xs={2}><Img src="images/profile-bg.jpeg" fullSize={true} isArrow={false} /></Grid>
          <Grid item xs={2}><Img src="images/profile-ka.jpeg" fullSize={true} isArrow={false} /></Grid>
          <Grid item xs={2}><Img src="images/profile-fm.jpeg" fullSize={true} isArrow={false} /></Grid>
          <Grid item xs={2}><Img src="images/profile-gv.jpeg" fullSize={true} isArrow={false} /></Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2} style={{ fontSize: isXSSize ? (35 * sizeCoefficient) : (50 * sizeCoefficient) }}>Dombi Balázs</Grid>
          <Grid item xs={2} style={{ fontSize: isXSSize ? (35 * sizeCoefficient) : (50 * sizeCoefficient) }}>Begál Gábor</Grid>
          <Grid item xs={2} style={{ fontSize: isXSSize ? (35 * sizeCoefficient) : (50 * sizeCoefficient) }}>Kolozsi Ádám</Grid>
          <Grid item xs={2} style={{ fontSize: isXSSize ? (35 * sizeCoefficient) : (50 * sizeCoefficient) }}>Ferencsik Márk</Grid>
          <Grid item xs={2} style={{ fontSize: isXSSize ? (35 * sizeCoefficient) : (50 * sizeCoefficient) }}>Gubicza Viktor</Grid>
        </Grid>
        <Grid container style={{ marginBottom: 50 * sizeCoefficient }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2} style={{ fontSize: isXSSize ? (20 * sizeCoefficient) : (25 * sizeCoefficient) }}>CEO</Grid>
          <Grid item xs={2} style={{ fontSize: isXSSize ? (20 * sizeCoefficient) : (25 * sizeCoefficient) }}>COO</Grid>
          <Grid item xs={2} style={{ fontSize: isXSSize ? (20 * sizeCoefficient) : (25 * sizeCoefficient) }}>CFO</Grid>
          <Grid item xs={2} style={{ fontSize: isXSSize ? (20 * sizeCoefficient) : (25 * sizeCoefficient) }}>Frontend <br/> developer</Grid>
          <Grid item xs={2} style={{ fontSize: isXSSize ? (20 * sizeCoefficient) : (25 * sizeCoefficient) }}>Backend <br/> developer</Grid>
        </Grid>
        <Grid item xs={12}>
          <div style={{ height: '50px', backgroundColor: '#ab36fe' }}></div>
        </Grid>
        <Grid item xs={12} style={{ marginTop: 50 * sizeCoefficient, marginBottom: 50 * sizeCoefficient, paddingLeft: 150 * sizeCoefficient, paddingRight: 150 * sizeCoefficient, textAlign: 'justify', fontSize: 50 * sizeCoefficient }}>
          If you want to support our project, just buy some NFT's from our icebird collection. <br/> NFT collection coming soon...
        </Grid>
        <Grid container>
          <Grid item xs={4}>
            <Img src="images/L.jpg" fullSize={true} isArrow={false} />
          </Grid>
          <Grid item xs={4}>
            <Img src="images/M.jpg" fullSize={true} isArrow={false} />
          </Grid>
          <Grid item xs={4}>
            <Img src="images/N.jpg" fullSize={true} isArrow={false} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={8}>
            <div style={{ fontSize: 120 * sizeCoefficient, paddingTop: 50 * sizeCoefficient, paddingLeft: 150 * sizeCoefficient, paddingRight: 150 * sizeCoefficient, textAlign: 'justify' }}>Let's make <br/> it happen!</div>
          </Grid>
          <Grid item xs={4}>
            <Img src="images/O.jpg" fullSize={true} isArrow={false} />
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}