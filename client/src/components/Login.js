import React, { Component } from 'react'
import { login } from './UserFunctions'
import Footer from './footer'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (!res.error) {
                this.props.history.push(`/profile`)
            }
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h2 mb-5 font-weight-bolder text-center">Log In</h1>
                            <div className="form-group">
                                <label htmlFor="email">E-Mail</label>
                                <input type="email"
                                    className="form-control form-control-lg"
                                    name="email"
                                    placeholder="email@ex.com"
                                    value={this.state.email}
                                    onChange={this.onChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password </label>
                                <input type="password"
                                    className="form-control form-control-lg"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={this.state.password}
                                    onChange={this.onChange} />
                            </div>

                            <button type="submit" className="btn btn-lg btn-info btn-block">
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
                <Footer />           

            </div>

        )
    }
}

export default Login