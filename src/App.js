import React, {useState, useEffect} from 'react';
import './App.css';
import {GuestList} from "./components/GuestList/GuestList";
import {AddGuestForm} from "./components/AddGuestForm/AddGuestForm";
import {EditGuestForm} from "./components/EditGuestForm/EditGuestForm";

export const App = () => {
    const guestData = [
        {
            id: 1,
            name: "John Smith",
            street: "Main St",
            city: "Mountain View",
            state: "CA",
            zip: "90202",
            phone: "212 444 5566"
        }
    ];
    const initialFormState = {
        id: null,
        name: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        phone: ""
    };

    const [guests, setGuests] = useState([]);
    const [editing, setEditing] = useState(false);
    const [currentGuest, setCurrentGuest] = useState(initialFormState);

    useEffect(() => {
        setGuests(guestData);
    }, []); // "Dependencies" array is empty because we are not watching anything!


    // Add guest
    const addGuest = (guest) => {
        guest.id = guests.length + 1;
        setGuests([...guests, guest]);
    };

    const deleteGuest = (id) => {
        setGuests(guests.filter(guest => guest.id !== id));
    };

    const editGuest = (guest) => {
        setEditing(true);
        setCurrentGuest({...guest});
        // setCurrentGuest({
        //     id: guest.id,
        //     name: guest.name,
        //     street: guest.street,
        //     city: guest.city,
        //     state: guest.state,
        //     zip: guest.zip,
        //     phone: guest.phone
        // });
    };

    const updateGuest = (id, updatedGuest) => {
        setEditing(false);
        const newGuests = guests.map(guest => (guest.id === id ? updatedGuest : guest));
        setGuests(newGuests);
    };

    return (
        <div className="container">
            <h1>Please sign my guest book</h1>
            <div className="row">
                <div className="col">
                    {
                        editing ? (
                            <div>
                                <h2>Edit Guest</h2>
                                <EditGuestForm editing={editing} setEditing={setEditing} currentGuest={currentGuest}
                                               updateGuest={updateGuest}/>
                            </div>
                        ) : (
                            <div>
                                <h2>Sign In</h2>
                                <AddGuestForm addGuest={addGuest}/>
                            </div>)
                    }
                </div>
                <div className="col">
                    <h2>Guests</h2>
                    <GuestList guests={guests} deleteGuest={deleteGuest} editGuest={editGuest}/>
                </div>
            </div>
        </div>
    );
};
