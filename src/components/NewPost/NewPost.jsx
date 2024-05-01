import styles from './NewPost.module.css'

import Modal from '../Modal/Modal'
import { Link, Form, redirect } from 'react-router-dom'

function NewPost() {
    return (
        <Modal>
            <Form className={styles.form} method="post">
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} name="body" />
                </p>

                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" name="author" id="name" required />
                </p>
                <p className={styles.actions}>
                    <Link to=".." type="button">
                        Cancel
                    </Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    )
}

export default NewPost

export async function action({ request }) {
    const formData = await request.formData()
    const postData = Object.fromEntries(formData)

    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return redirect('/')
}
