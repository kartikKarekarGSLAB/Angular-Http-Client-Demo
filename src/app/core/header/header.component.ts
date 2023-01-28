import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../http-client/http-client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  responseData = '';
  constructor(private httpService: HttpClientService) {}

  ngOnInit(): void {
    console.log('HeaderComponent inside the ngOnInit method of the header');
    this.getData();
  }

  getData = () => {
    this.httpService.getPayload().subscribe({
      next: (responseData) => {
        console.log('Next callback of getPayload responseData=', responseData);
        this.responseData = this.responseData;
      },
      error: (error) => {
        console.error('Error Callback of getPayload Error =', error);
      },
      complete: () => {
        console.info('Complete callback of getPayload');
      },
    });
  };
}
