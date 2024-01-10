import React from "react";

import "./SignIn.scss"
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle } from "../../Firebase/Firebase";
import { auth } from "../../Firebase/Firebase";

class SignIn extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: "", password: ""})

        }catch(error){
            console.log(error);
        }

    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }


    render () {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    
                    <FormInput 
                    name="email"
                    type="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    label='email'
                    required/>
                    
                    <FormInput
                     name="password" 
                     type="password" 
                     onChange={this.handleChange} 
                     label="password" 
                     value={this.state.password} 
                     required/>

                    <div className="buttons">
                    <CustomButton type='submit' >SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle}  isGoogleSignIn>
                        {''}
                        SIGN IN WITH GOOGLE
                        {''}
                    </CustomButton>

                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;