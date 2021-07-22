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
        <div className="home-container">
            {/* <Container> */}
            <h2 className="head">
                Contact Us
            </h2>
            <Grid container spacing={3} style={{ textAlign: "center", marginTop: "2%" }}>
                <Grid item xs={12} sm={6} >
                    <Card className="cardstyle">
                        <CardContent>
                            <form noValidate autoComplete="off">
                                <TextField id="standard-basic" label="Your Name" 
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                inputProps={{ style: { fontSize: 20 } }}
                                style={{ width: "100%", marginTop: "4%" }} />
                                <br />
                                <TextField id="standard-basic" label="Your Email"
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                inputProps={{ style: { fontSize: 20 } }}
                                 style={{ width: "100%", marginTop: "4%" }} />
                                <br />
                                <TextField id="standard-basic" label="Subject" InputLabelProps={{ style: { fontSize: 20 } }}
                                    inputProps={{ style: { fontSize: 20 } }}
                                    style={{ width: "100%", marginTop: "4%" }} />
                                <br />
                                <TextField
                                    id="standard-textarea"
                                    label="Your Message"
                                    placeholder="Message"
                                    multiline
                                    rows={4}
                                    style={{ width: "100%", marginTop: "4%" }}
                                    InputLabelProps={{ style: { fontSize: 20 } }}
                                    inputProps={{ style: { fontSize: 20 } }}
                                />
                                <br />
                                <Button variant="contained" type="submit" style={{ width: "100%", marginTop: "4%", marginBottom: "0", backgroundColor: "#5abb75", color: "white",fontSize: 20 }}>Send</Button>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img src={pic} alt="" srcSet="" style={{ width: "85%" }} />
                </Grid>
            </Grid>
            {/* </Container> */}
        </div>
    )
}

export default Home