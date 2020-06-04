import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from 'src/app/models/job';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  jobList: Array<Job>;
  filterObj: any = [];
  isRole: boolean = false;
  isLevel: boolean = false;
  isLanguage: boolean = false;
  constructor(private http: HttpClient, private data: DataService) { }

  ngOnInit() {
    this.data.getAllJobs().subscribe(
      data => {
        localStorage.setItem("jobList", JSON.stringify(data));
        this.jobList = data;
      }
    );

  }
  filterRole(filter: any) {
    if (!this.filterObj.includes(filter)) {
      this.filterObj.push(filter);
    }
    this.jobList = this.jobList.filter(item => item.role.toLowerCase() == filter.toLowerCase());
  }
  filterLevel(filter: any) {
    if (!this.filterObj.includes(filter)) {
      this.filterObj.push(filter);
    }
    this.jobList = this.jobList.filter(item => item.level.toLowerCase() == filter.toLowerCase());
  }
  filterLang(filter: any) {
    if (!this.filterObj.includes(filter)) {
      this.filterObj.push(filter);
    }
    this.jobList = this.jobList.filter(item => {
      if (item.languages)
        return item.languages.includes(filter)
    });
  }
  close(value: any) {

    this.filterObj = this.filterObj.filter(item => item != value);
    if (this.filterObj.length == 0)
      this.jobList = JSON.parse(localStorage.getItem("jobList"));
    else {
      this.jobList = JSON.parse(localStorage.getItem("jobList"));
      this.jobList = this.jobList.filter(item => {
        let flag = false;
        this.filterObj.forEach(obj => {
          if (item.role.toLowerCase() == obj.toLowerCase() || item.level.toLowerCase() == obj.toLowerCase()) {
            flag = true;
            return;
          }

          else if (item.languages && item.languages.includes(obj)) {
            flag = true;
            return;
          }
          else
            return;
        });
        return flag;
      });
    }

  }
  clear() {
    this.filterObj = [];
    this.jobList = JSON.parse(localStorage.getItem("jobList"));

  }

}
