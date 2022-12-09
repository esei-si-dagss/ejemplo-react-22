import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { RadioButton } from 'primereact/radiobutton';

import { useParams, useNavigate } from "react-router-dom";
import userService from '../../services/userService';

export default function UserDetalle(props) {
    const navigate = useNavigate();
    const params = useParams();

    const [user, setUser] = useState({ id: 0, name: "", email: "", gender: "", status: "" });

    useEffect(() => {
        userService.buscarPorId(params.id).then(res => setUser(res.data));
    }, []); // Carga en primer renderizado


    return (
        <React.Fragment>
            <div className="p-fluid">
                <div className="p-field">
                    <label htmlFor="id" >ID</label>
                    <InputText id="id" value={user.id} readOnly  />
                </div>
                <div className="p-field">
                    <label htmlFor="name" >Name</label>
                    <InputText id="name" value={user.name} readOnly  />
                </div>
                <div className="p-field">
                    <label htmlFor="email" >e-mail</label>
                    <InputText id="email" value={user.email} readOnly  />
                </div>
                <div className="p-field">
                    <label htmlFor="gender" >Gender</label>
                    <div className="field-radiobutton">
                        <RadioButton id="genderMale" value="male" checked={user.gender === 'male'} readOnly  />
                        <label htmlFor="genderMale">Male</label>
                    </div>
                    <div className="field-radiobutton">
                        <RadioButton id="genderFemale" value="female" checked={user.gender === 'female'} readOnly  />
                        <label htmlFor="genderFemale">Female</label>
                    </div>
                </div>
                <div className="p-field">
                    <label htmlFor="status" >Status</label>
                    <div className="field-radiobutton">
                        <RadioButton id="statusInactive" value="inactive" checked={user.status === 'inactive'} readOnly  />
                        <label htmlFor="statusInactive">Inactive</label>
                    </div>
                    <div className="field-radiobutton">
                        <RadioButton id="statusActive" value="active" checked={user.status === 'active'} readOnly  />
                        <label htmlFor="statusActive">Active</label>
                    </div>
                </div>
            </div>

            <Divider />

            <div className="p-p-3">
                <Button label="Volver" icon="pi pi-check"
                    onClick={() => { navigate("/users") }} />
            </div>
        </React.Fragment >
    )
}