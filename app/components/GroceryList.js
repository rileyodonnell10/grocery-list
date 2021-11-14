import React, { useState } from 'react';
import firebase from "firebase/compat/app";
import { firestore } from "../utils/api";
import {FaRegSquare, FaRegCheckSquare, FaRegWindowClose, FaRegEdit, FaRegSave } from 'react-icons/fa';
import {useCollectionData} from "react-firebase-hooks/firestore";


const GroceryList = () => {
    const [item, setItem] = useState("");
    const itemsRef = firestore.collection("items");
    const [items] = useCollectionData(itemsRef.orderBy("createdAt", "desc"), { idField: "id" });


    const onSubmitItem = (e) => {
        e.preventDefault();
        setItem("");
        itemsRef.add({
            name: item,
            purchased: false,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    };

    return (
        <div className="groceryList">
            <h1>My Grocery List</h1>
            <form onSubmit={onSubmitItem}>
                <input
                    required
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    placeholder="Enter a grocery item"
                />
                <button className="submitButton" type="submit">Add</button>
            </form>
            {items && items.length > 0 &&
                <ul className="list">
                    {items.map((item) => <GroceryItem key={item.id} {...item} />)}
                </ul>
            }
        </div>
    );
};

const GroceryItem = ({ id, purchased, name }) => {
    const [item, setItem] = useState(name);
    const [editMode, setEditMode] = useState(false);

    const itemsRef = firestore.collection("items");

    const onPurchaseItem = (id, purchased) => itemsRef.doc(id).set({ purchased: !purchased }, { merge: true });

    const onSaveItem = (e) => {
        e.preventDefault;
        setItem(item);
        setEditMode(false);
        itemsRef.doc(id).set({ name: item }, { merge: true });
    }

    const onDeleteItem = (id) => itemsRef.doc(id).delete();

    return (
        <li key={id} className="item">
            <button
                className="listButton purchaseButton"
                onClick={() => onPurchaseItem(id, purchased)}
            >
                { purchased ? <FaRegCheckSquare color="#008060" size={25} /> : <FaRegSquare size={25}/> }
            </button>
            {editMode ?
                <form onSubmit={onSaveItem}>
                    <input
                        required
                        autoFocus
                        className="editInput"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        onBlur={(e) => onSaveItem(e)}
                    />
                </form> :
                <div
                    className="itemName"
                    style={{ "textDecoration": purchased ? "line-through" : "none"}}
                >
                    { item }
                </div>
            }
            {!editMode &&
                <button className="listButton editButton" onClick={() => setEditMode(true)}>
                    <FaRegEdit size={25}/>
                </button>
            }
            <button className="listButton deleteButton" onClick={() => onDeleteItem(id)}>
                <FaRegWindowClose color="#F00000" size={25}/>
            </button>
        </li>

    )
};

export default GroceryList;

