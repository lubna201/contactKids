import React from 'react'
import '../Assets/Home/Home.css'
import { StylesProvider } from '@material-ui/core'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
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
            <Container>
                <Typography style={{ textAlign: "center", fontWeight: "700", marginTop: "2%" }} variant="h5" gutterBottom>
                    Contact Us
                </Typography>
                <Grid container spacing={3} style={{ textAlign: "center", marginTop: "2%" }}>
                    <Grid item xs={12} sm={6} >
                        <Card className="cardstyle">
                            <CardContent>
                                <form noValidate autoComplete="off">
                                    <TextField id="standard-basic" label="Your Name" style={{ width: "100%", marginTop: "9px" }} />
                                    <br />
                                    <TextField id="standard-basic" label="Your Email" style={{ width: "100%", marginTop: "9px" }} />
                                    <br />
                                    <TextField id="standard-basic" label="Subject" style={{ width: "100%", marginTop: "9px" }} />
                                    <br />
                                    <TextField
                                        id="standard-textarea"
                                        label="Your Message"
                                        placeholder="Message"
                                        multiline
                                        rows={4}
                                        style={{ width: "100%", marginTop: "9px" }}
                                    />
                                    <br />
                                    <Button variant="contained" type="submit" style={{ width: "100%", marginTop: "20px", backgroundColor: "#5abb75", color: "white" }}>Send</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <img src={pic} alt="" srcSet="" style={{ width: "95%", height: "95%" }} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Home