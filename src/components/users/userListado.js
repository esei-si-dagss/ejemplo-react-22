
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import userService from '../../services/userService';

export default function UserListado(props) {

    const [users, setUsers] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        userService.buscarTodos().then(res => setUsers(res.data));
    }, []);

    function accionesUsuario(rowData) {
        return (
            <React.Fragment>
                <Button icon="pi pi-eye" className="p-button-rounded p-button-success mr-2"
                    onClick={() => { navigate(rowData.id.toString()) }}
                    tooltip={`Ver datos de ${rowData.name}`} tooltipOptions={{ position: 'top' }} />
            </React.Fragment>
        );
    }

    return (
        <div>
            <div className="card">
                <DataTable value={users} showGridlines responsiveLayout="scroll">
                    <Column field="id" header="ID"></Column>
                    <Column field="name" header="Nombre" sortable></Column>
                    <Column field="email" header="e-mail"></Column>
                    <Column field="gender" header="Género" sortable></Column>
                    <Column field="status" header="Estado" sortable></Column>
                    <Column body={accionesUsuario} />
                </DataTable>
            </div>
        </div>
    );
}