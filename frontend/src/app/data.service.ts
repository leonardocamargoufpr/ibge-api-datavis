const apiUrl = 'http://localhost:3000/api';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {}

    getData() {
        return this.http.get<any[]>(`${apiUrl}/data`);
    }

    addData(data: any) {
        return this.http.post<any>(`${apiUrl}/data`, data);
    }

    updateData(id: string, data: any) {
        return this.http.put<any>(`${apiUrl}/data/${id}`, data);
    }

    deleteData(id: string) {
        return this.http.delete<any>(`${apiUrl}/data/${id}`);
    }
}
