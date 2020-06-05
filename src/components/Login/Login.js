import React,{Component} from 'react';
import classes from './Login.module.css'
import axios from 'axios'

class Login extends Component{

    state={
        fname:null,
        lname:null,
        email:null,
        pass:null,
        signup:true
    };

    fnameChangeHandler=event => {
        console.log(event.target)
        console.log('fname changed: '+this.state.fname)
        this.setState(
            { fname:event.target.value }
        )
    }
    lnameChangeHandler = event => {
        this.setState(
            { lname: event.target.value }
        )
    }
    emailChangeHandler = event => {
        this.setState(
            { email: event.target.value }
        )
    }
    passChangeHandler = event => {
        this.setState(
            { pass: event.target.value }
        )
    }

    signon = () => {
        let obj = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            pass: this.state.pass
        }
        axios.get("https://smarter-parker.firebaseio.com/users.json").then(res=>{
            let flag=false
            console.log(res)
            for(let a of Object.keys(res.data)){
                if(res.data[a].email===this.state.email){
                    flag=true
                    break
                }
            }
            if(!flag){
                axios.post("https://smarter-parker.firebaseio.com/users.json",obj).then(
                    console.log(obj)
                ).then(
                alert('Registered Successfully!')
                )
            }
            else{
                alert("Email is already Taken!")
            }
        })
    }

    validation = () => {
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const pass = document.getElementById('pass').value;

        if (fname.length === 0) {
            document.getElementById("p1").style.display = "block";
        }
        else {
            document.getElementById("p1").style.display = "none";
        }
        if (lname.length === 0) {
            document.getElementById("p2").style.display = "block";
        }
        else {
            document.getElementById("p2").style.display = "none";
        }
        if ((email.length === 0) || !this.validateEmail(email)) {
            document.getElementById("p3").style.display = "block";
        }
        else {
            document.getElementById("p3").style.display = "none";
        }
        if (pass.length === 0) {
            document.getElementById("p4").style.display = "block";
        }
        else {
            document.getElementById("p4").style.display = "none";
        }

        console.log("clicked");

        console.log(pass.length)
        this.signon()
    }

    logon = () =>{
        axios.get("https://smarter-parker.firebaseio.com/users.json").then(res=>{
            let flag = false
            for (let a of Object.keys(res.data)) {
                if (res.data[a].email === this.state.email) {
                    if(res.data[a].pass=== this.state.pass){
                        flag=true
                    }
                    break
                }
            }
            if (flag) {
                this.props.signin()
            }
            else {
                alert("Wrong Login Credentials!")
            }
        })
    }

    signup = ()=>{
        this.setState({
            signup:true
        })
    }

    signin = () =>{
        this.setState({
            signup:false
        })
    }

validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField) == false) {
        return false;
    }

    return true;

}

    render(){

        let formCode = <div className={classes.card}>
            <input type="text" placeholder="First Name" id="fname" onChange={this.fnameChangeHandler} />
            <p className={classes.alerts} id="p1"><i>First Name cannot be empty</i></p>
            <input type="text" placeholder="Last Name" id="lname" onChange={this.lnameChangeHandler} />
            <p className={classes.alerts} id="p2"><i>Last Name cannot be empty</i></p>
            <input type="email" placeholder="Email" id="email" onChange={this.emailChangeHandler} />
            <p className={classes.alerts} id="p3"><i>Looks like this is not an email</i></p>
            <input type="password" placeholder="Password" id="pass" onChange={this.passChangeHandler} />
            <p className={classes.alerts} id="p4"><i>Password cannot be empty</i></p>
            <button type="button" onClick={this.validation}>Sign Up</button>
            <p>By clicking the button, you are agreeing to our <span id={classes.TnC}>Terms and Services</span></p>
        </div>

        if(!this.state.signup){
            formCode = 
                <div className={classes.card}>
                    <input type="email" placeholder="Email" id="email" onChange={this.emailChangeHandler} />
                    <p className={classes.alerts} id="p3"><i>Looks like this is not an email</i></p>
                    <input type="password" placeholder="Password" id="pass" onChange={this.passChangeHandler} />
                    <p className={classes.alerts} id="p4"><i>Password cannot be empty</i></p>
                    <button type="button" onClick={this.logon}>Sign in</button>
                </div>
        }
    let loginCode=  <div className={classes.body}>
        <div className={classes.message}>
            <h1>Your friendly neighbourhood parking monitor!</h1>
            <p>Monitor your parking the smart way with IoT and cloud technologies! Responsive Timestamping assures perfect accuracy everytime, anytime!</p>
        </div>
        <div className={classes.cards}>
            <div className={[classes.blue,classes.card].join(' ')}>
                <div className={classes.sign} onClick={this.signup}>
                    <p>Sign up</p>
                </div>
                <div className={classes.sign} onClick = {this.signin}>
                    <p>Sign in</p>
                </div>
            </div>
            {formCode}
        </div>
    </div>

    return loginCode
    }
}

export default Login