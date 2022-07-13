import React, { useState } from 'react';
import { Button, Checkbox, Form, Rating, Header, Accordion } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Create() {
    let history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    console.log(checkbox)
    const postData = () => {
        axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read')
        })
    }
    return (
        <div>
            <Header as='h3'>
                Learn More
            </Header>
            <Accordion panels={[
                { title: 'What is a dog?', content: 'Shorthand props generate markup for you, making many use cases a breeze' },
                { title: 'What kinds are there?', content: 'All object props are spread on the child components' },
                ]} />
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <div style={{ color: 'yellow'}}>
                    <h4>Please rate us</h4>
                    <Rating rating={4.5} maxRating={5} /><br/>
                </div>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
