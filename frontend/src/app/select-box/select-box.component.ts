import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css'],
})
export class SelectBoxComponent implements OnInit {
  options: string[] = [];
  selectedOption: string = '';
  response: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getOptions();
  }

  getOptions() {
    this.http.get<any>('/api/options').subscribe((data) => {
      this.options = data;
    });
  }

  onSelectChange() {
    this.http
      .post<any>('/api/selected-option', { selectedOption: this.selectedOption })
      .subscribe((data) => {
        this.response = data;
      });
  }
}
