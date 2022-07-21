import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-show-contract',
  templateUrl: './show-contract.component.html',
  styleUrls: ['./show-contract.component.css'],
  animations: [
    trigger('smoothCollapse', [
      state('initialArrow', style({

      })),
      state('invertedArrow', style({
        transform: "rotate(180deg)"
      })),
      state('initial', style({
        height:'0',
        overflow:'hidden',
        opacity:'0'
      })),
      state('final', style({
        overflow:'hidden',
        opacity:'1'
      })),
      transition('initial=>final', animate('300ms')),
      transition('final=>initial', animate('300ms')),
      transition('initialArrow=>invertedArrow', animate('300ms')),
      transition('invertedArrow=>initialArrow', animate('300ms'))
    ]),
  ]
})
export class ShowContractComponent implements OnInit {
  departments = [
    {name: "التسويق", value: "MARKETING"},
    {name: "IT", value: "IT"}
  ]
  states = [
    {name:"ساري", value:"ساري", className:"activeContract"},
    {name:"مطلوب تجديده", value:"مطلوب تجديده", className:"warningContract"},
    {name:"فسخ", value:"فسخ", className:"stopContract"}
  ]

  types = [
    {name: "إيجار", value: "Lease"},
    {name: "تمليك", value: "Ownership"}
  ]

  governorates = [
    "القاهرة",
    "الجيزة",
    "الأسكندرية",
    "الدقهلية",
    "البحر الأحمر",
    "البحيرة",
    "الفيوم",
    "الغربية",
    "الإسماعلية",
    "المنوفية",
    "المنيا",
    "القليوبية",
    "الوادي الجديد",
    "السويس",
    "اسوان",
    "اسيوط",
    "بني سويف",
    "بورسعيد",
    "دمياط",
    "الشرقية",
    "جنوب سيناء",
    "كفر الشيخ",
    "مطروح",
    "الأقصر",
    "قنا",
    "شمال سيناء",
      "سوهاج",
    ]

    areas = [
      "الإسكندرية",
      "القاهرة",
      "الأقصر"
    ]
  isCollapsed = {
    contractInfo: false,
    branchInfo: false,
    dates: false,
    attachments: false
  }

  editState = false

  className = "";

  setClass(className: string): void {
    this.states.forEach(state => {
        if (className == state.value) {
          this.className = state.className;
        }
    });
  }

  colapse(type: any) {
    this.isCollapsed[type as keyof typeof this.isCollapsed] = !this.isCollapsed[type as keyof typeof this.isCollapsed];
  }

  edit():void {
    this.editState = true;
  }

  cancel(): void {
    this.editState = false;
  }

  save(): void {

  }

  constructor(private dateAdapter: DateAdapter<any>) { }

  ngOnInit(): void {
    this.dateAdapter.setLocale('ar');
  }

}
