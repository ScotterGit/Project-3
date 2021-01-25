import React from 'react';

function Contact(props) {
    return (
        <div>
            <h1>Contact</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
            </form>
            <form>
                <label>
                    Message:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Contact;