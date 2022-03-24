import React, { useState, Change } from 'react'

type FormProps = {
    onSubmit: (form: {
        name: string,
        description: string
    }) => void
}

function UserForm({ onSubmit }: FormProps) {
    const [form, setForm] = useState({
        name: '',
        description: ''
    })

    const { name, description } = form

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(form)
        setForm({ // submit 후 초기화
            name: '',
            description: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='name' value={name} onChange={onChange} />
            <input name='description' value={description} onChange={onChange} />
            <button type='submit'>등록</button>
        </form>
    )
}

export default UserForm