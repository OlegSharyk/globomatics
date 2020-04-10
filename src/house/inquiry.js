import React, { Component } from 'react';

class Inquiry extends Component {
    state = {
        name: '',
        email: '',
        remarks: '',
    };

    onNameChange = (e) => {
        e.preventDefault();
        this.setState({ name: e.target.value });
    };

    onEmailChange = (e) => {
        e.preventDefault();
        this.setState({ email: e.target.value });
    };

    onRemarksChange = (e) => {
        e.preventDefault();
        this.setState({ remarks: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const house = this.props.house;
        const contactInfo = this.state;

        //send
        // use send form

        console.log(house);
        console.log(contactInfo);
    };

    render() {
        return (
            <form className="mt-2">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        id="name"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        value={this.state.name}
                        onChange={this.onEmailChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="remarks">Remarks</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Remarks"
                        id="remarks"
                        value={this.state.name}
                        onChange={this.onRemarksChange}
                    />
                </div>
                <button
                    className="btn btn-primary"
                    disabled={
                        this.state.name.length === 0 ||
                        this.state.email.length === 0
                    }
                    onClick={this.onSubmit}
                >
                    Submit
                </button>
            </form>
        );
    }
}

export default Inquiry;
