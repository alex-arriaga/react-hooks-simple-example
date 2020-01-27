import React, {useState, useEffect, useRef} from "react";

export const AddGuestForm = (props) => {

    const nameInputEl = useRef(null);

    const initialFormState = {
        id: null,
        name: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        phone: ""
    };

    const [guest, setGuest] = useState(initialFormState);

    const handleInputChanged = (event) => {
        const {name, value} = event.target;
        setGuest({...guest, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        props.addGuest(guest);
        setGuest(initialFormState);
    };

    const setInitialFocus = () => {
        nameInputEl.current.focus();
    };

    useEffect(() => {
        setInitialFocus();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" ref={nameInputEl} name="name" value={guest.name} className="form-control" onChange={handleInputChanged} required />
            </div>

            <div className="form-group">
                <label htmlFor="street">Street</label>
                <input type="text" name="street" value={guest.street} className="form-control" onChange={handleInputChanged} required />
            </div>

            <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" name="city" value={guest.city} className="form-control" onChange={handleInputChanged} required />
            </div>

            <div className="form-group">
                <label htmlFor="state">State</label>
                <input type="text" name="state" value={guest.state} className="form-control" onChange={handleInputChanged} required />
            </div>

            <div className="form-group">
                <label htmlFor="zip">Zip</label>
                <input type="text" name="zip" value={guest.zip} className="form-control" onChange={handleInputChanged} required />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" value={guest.phone} className="form-control" onChange={handleInputChanged}/>
            </div>

            <button type="submit" className="btn btn-primary">Add New Guest</button>
        </form>

    );
};