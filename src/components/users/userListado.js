
import React, { useState, useEffect} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import userService from '../../services/userService';

export default function UserListado(props) {

    const [users, setUsers] = useState(null);


    useEffect(() => {
        userService.buscarTodos().then(res => setUsers(res.data));
    }, []);

    return(
        <div>
            <div className="card">
                <DataTable value={users} responsiveLayout="scroll">
                    <Column field="id" header="ID"></Column>
                    <Column field="name" header="Nombre" sortable></Column>
                    <Column field="email" header="e-mail"></Column>
                    <Column field="gender" header="Género" sortable></Column>
                    <Column field="status" header="Estado" sortable></Column>
                </DataTable>
            </div>
        </div>
    );
}