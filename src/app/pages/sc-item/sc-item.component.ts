import { CommonModule, NgForOf } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sc-item',
  standalone: true,
  imports: [
    CommonModule,
    NgForOf,
  ],
  templateUrl: './sc-item.component.html',
  styleUrl: './sc-item.component.scss'
})
export class ScItemComponent implements OnInit {
  public saveName: string = '';

  constructor(
    private cdRef: ChangeDetectorRef,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.saveName = this.route.snapshot.paramMap.get('saveName') || '';
  }

  content = [];
  trigger = (): void => {
    (window as any)['chrome'].tabs.query({ active: true, currentWindow: true }, (tabs: any[]) => {
      const tab = tabs[0];

      function handleDomContent() {
        document.body.style.backgroundColor = 'palegreen';
        const pattern = 'table tr td a[href]';
        const content = document.querySelectorAll(pattern);
        const contentArray: Array<string> = [];
        content.forEach((item: any) => contentArray.push(item.innerText));
        return contentArray;
      }
    
      (window as any)['chrome'].scripting.executeScript({
        target: { tabId: tab.id },
        func: handleDomContent,
        args: [this.content],
      })
      .then((injectionResults: any) => {
        this.content = injectionResults[0].result;
        console.log(this.content);
        this.cdRef.detectChanges();

        const item = localStorage.getItem(this.saveName);
        const list = item === null ? [] : JSON.parse(item);
        list.push({ timestamp: Date.now(), content: JSON.stringify(this.content) });
        localStorage.setItem(this.saveName, JSON.stringify(list));
      });
    });
  };

}
