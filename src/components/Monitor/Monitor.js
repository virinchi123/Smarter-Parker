import React from 'react';
import axios from 'axios';
import classes from './Monitor.module.css';
import supervisor from '../../assets/images/icon-supervisor.svg';
import karma from '../../assets/images/icon-karma.svg';
import calculator from '../../assets/images/icon-calculator.svg'

const rate=0.5

const slotA=()=>{
    axios.get("https://smarter-parker.firebaseio.com/A.json").then(res=>{
        console.log(res)
        console.log(res.data[Object.keys(res.data)[0]])
        if(res.data[Object.keys(res.data)[0]]===false){
            let date = new Date();
            axios.post("https://smarter-parker.firebaseio.com/slotA.json",date).then(res=>{
                alert("car parked in slot A!")
                axios.delete("https://smarter-parker.firebaseio.com/A.json").then(res=>{
                    console.log("deleted A")
                    axios.post("https://smarter-parker.firebaseio.com/A.json", true)
        }
                )
                
            })
        }
        else{
            let currDate=new Date();
            console.log(currDate)
            axios.get("https://smarter-parker.firebaseio.com/slotA.json").then(res=>{
                console.log(res)
                let time = currDate-Date.parse(res.data[Object.keys(res.data)[0]]);
                let minutes=time/60;
                minutes=minutes/1000;
                let fare=(minutes*rate).toFixed(2)
                alert("you parked for "+minutes+" minutes in slot A, and your bill is "+fare)
                axios.delete("https://smarter-parker.firebaseio.com/slotA.json").then(res => {
                    console.log("deleted slot A")
                }
            ).then(res=>{
                    console.log("deleted a")
                    axios.delete("https://smarter-parker.firebaseio.com/A.json").then(res=>{
                        console.log('posting to a')
                        axios.post("https://smarter-parker.firebaseio.com/A.json", false)}
                    )}
                    )
            })
        }
    })
}

const slotB = () => {
    axios.get("https://smarter-parker.firebaseio.com/B.json").then(res => {
        console.log(res)
        console.log(res.data[Object.keys(res.data)[0]])
        if (res.data[Object.keys(res.data)[0]] === false) {
            let date = new Date();
            axios.post("https://smarter-parker.firebaseio.com/slotB.json", date).then(res => {
                alert("car parked in slot B!")
                axios.delete("https://smarter-parker.firebaseio.com/B.json").then(res => {
                    console.log("deleted B")
                    axios.post("https://smarter-parker.firebaseio.com/B.json", true)
                }
                )

            })
        }
        else {
            let currDate = new Date();
            console.log(currDate)
            axios.get("https://smarter-parker.firebaseio.com/slotB.json").then(res => {
                console.log(res)
                let time = currDate - Date.parse(res.data[Object.keys(res.data)[0]]);
                let minutes = time / 60;
                minutes = minutes / 1000;
                let fare = (minutes * rate).toFixed(2)
                alert("you parked for " + minutes + " minutes in slot B, and your bill is " + fare)
                axios.delete("https://smarter-parker.firebaseio.com/slotB.json").then(res => {
                    console.log("deleted slot B")
                }
                ).then(res => {
                    console.log("deleted B")
                    axios.delete("https://smarter-parker.firebaseio.com/B.json").then(res => {
                        console.log('posting to B')
                        axios.post("https://smarter-parker.firebaseio.com/B.json", false)
                    }
                    )
                }
                )
            })
        }
    })
}

const slotC = () => {
    axios.get("https://smarter-parker.firebaseio.com/C.json").then(res => {
        console.log(res)
        console.log(res.data[Object.keys(res.data)[0]])
        if (res.data[Object.keys(res.data)[0]] === false) {
            let date = new Date();
            axios.post("https://smarter-parker.firebaseio.com/slotC.json", date).then(res => {
                alert("car parked in slot C!")
                axios.delete("https://smarter-parker.firebaseio.com/C.json").then(res => {
                    console.log("deleted C")
                    axios.post("https://smarter-parker.firebaseio.com/C.json", true)
                }
                )

            })
        }
        else {
            let currDate = new Date();
            console.log(currDate)
            axios.get("https://smarter-parker.firebaseio.com/slotC.json").then(res => {
                console.log(res)
                let time = currDate - Date.parse(res.data[Object.keys(res.data)[0]]);
                let minutes = time / 60;
                minutes = minutes / 1000;
                let fare = (minutes * rate).toFixed(2)
                alert("you parked for " + minutes + " minutes in slot C, and your bill is " + fare)
                axios.delete("https://smarter-parker.firebaseio.com/slotC.json").then(res => {
                    console.log("deleted slot C")
                }
                ).then(res => {
                    console.log("deleted c")
                    axios.delete("https://smarter-parker.firebaseio.com/C.json").then(res => {
                        console.log('posting to c')
                        axios.post("https://smarter-parker.firebaseio.com/C.json", false)
                    }
                    )
                }
                )
            })
        }
    })
}


const Monitor = (props) =>{
    let monitorCode = <div className={classes.body}>
                        <div id={classes.encompass}>
                            <div id={classes.header1}>Reliable, efficient delivery</div>
                            <div id={classes.header2}>Powered by IoT Technology</div>
                            <div id={classes.header3}>Automated Parking Solutions that never fail!</div>
                        </div>

                        <div id={classes.container}>
                                    <div className={classes.card} id={classes.card1}>
                                        <div className={classes.message}><p className={classes.title}>Parking Slot A</p>
                                            <div className={classes.checkin} onClick={slotA} >
                                                <p className={classes.texts}>Time Stamp</p>
                                            </div>
                                        </div>
                                        <img src={supervisor} alt="unable to load"/>
                                    </div>

                                    
                                    <div className={classes.card} id={classes.card3}>
                                        <div className={classes.message}><p className={classes.title}>Parking Slot B</p>
                                            <div className={classes.checkin} onClick={slotB}>
                                                <p className={classes.texts}>Time Stamp</p>
                                            </div>
                                        </div>
                                        <img src={karma} alt="unable to load"/>
                                    </div>

                                    <div className={classes.card} id={classes.card4}>
                                        <div className={classes.message}><p className={classes.title}>Parking Slot C</p>
                                            <div className={classes.checkin} onClick={slotC}>
                                                <p className={classes.texts}>Time Stamp</p>
                                            </div>
                                        </div>
                                        <img src={calculator} alt="unable to load"/>
                                    </div>
                            </div>
                            <footer>
                                <p onClick={props.logout}>Click here to log out!</p>
                            </footer>
                </div>

return (
<React.Fragment>
    {monitorCode}
</React.Fragment>
)
}

export default Monitor;

/*<div className={classes.card} id={classes.card2}>
                                        <div className={classes.message}><p className={classes.title}>Team Builder</p>
                                            <p className={classes.text}>Scans our talent network to create the optimal team for your project</p>
                                        </div>
                                        <img src={teamBuilder} alt="unable to load"/>
                                    </div>
                                    */
