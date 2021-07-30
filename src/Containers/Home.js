import React from 'react'
import '../Assets/Home/Home.css'
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import pic from '../contact.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Home = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    return (
        <div className="home-container" >
            {/* <Container> */}
            <div id="wwa-top">
            <h2 className="head" >
                Contact Us
            </h2>
            </div>
            <Grid container spacing={3} style={{ textAlign: "center", marginTop: "2%" }}>
                <Grid item xs={12} sm={6} >
                    <Card className="cardstyle" id="wwa-left">
                        <CardContent>
                            <form noValidate autoComplete="off">
                                <TextField id="standard-basic" label="Your Name" 
                                InputLabelProps={{ style: { fontSize: "1.2vw" } }}
                                inputProps={{ style: { fontSize: "1.2vw" } }}
                                style={{ width: "95%", marginTop: "4%",height: '1.79vw' }} />
                                <br />
                                <TextField id="standard-basic" label="Your Email"
                                InputLabelProps={{ style: { fontSize: "1.2vw" } }}
                                inputProps={{ style: { fontSize: "1.2vw" } }}
                                 style={{ width: "95%", marginTop: "9%",height: '1.79vw' }} />
                                <br />
                                <TextField id="standard-basic" label="Subject" InputLabelProps={{ style: { fontSize: "1.2vw" } }}
                                    inputProps={{ style: { fontSize: "1.2vw" } }}
                                    style={{ width: "95%", marginTop: "9%" ,height: '1.79vw'}} />
                                <br />
                                <TextField
                                    id="standard-textarea"
                                    label="Your Message"
                                    placeholder="Message"
                                    multiline
                                    rows={4}
                                    style={{ width: "95%", marginTop: "9%" }}
                                    InputLabelProps={{ style: { fontSize: "1.2vw"} }}
                                    inputProps={{ style: { fontSize: "1.2vw" } }}
                                />
                                <br />
                                <Button variant="contained" type="submit" style={{ width: "95%", marginTop: "4%", marginBottom: "0", backgroundColor: "#5abb75", color: "white",fontSize: "1.4vw",height: '3.79vw' }}>Send</Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={pic} alt="" srcSet="" style={{ width: "85%" }} id="wwa-right"/>
                </Grid>
            </Grid>
            {/* </Container> */}
        </div>
    )
}

export default Home