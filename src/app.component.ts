import {
  Component,
  ViewChild,
  ViewEncapsulation,
  Inject,
  ElementRef,
  HostListener,
} from '@angular/core';

/**
 * Default Uploader Default Component
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(private elementRef: ElementRef) {}
  public searchResult: Object[] = [];
  selectedIndex = -1;
  // defined the array of data
  public sportsData: Object[] = [
    { Id: 1, Email: 'k@gmail.com', UserName: 'American' },
    { Id: 2, Email: 'b@gmail.com', UserName: 'Badminton' },
    { Id: 3, Email: 'C@gmail.com', UserName: 'Basketball' },
    { Id: 4, Email: 'D@gmail.com', UserName: 'Cricket' },
    { Id: 5, Email: 'E@gmail.com', UserName: 'Football' },
    { Id: 6, Email: 'F@gmail.com', UserName: 'Golf' },
    { Id: 7, Email: 'G@gmail.com', UserName: 'Hockey' },
    { Id: 8, Email: 'H@gmail.com', UserName: 'Rugby' },
    { Id: 9, Email: 'I@gmail.com', UserName: 'Snooker' },
    { Id: 10, Email: 'R@gmail.com', UserName: 'Tennis' },
    { Id: 11, Email: 'Fr@gmail.com', UserName: 'American' },
  ];

  public users: any[] = [
    { Id: 1, Email: '', UserName: '' },
    { Id: 2, Email: '', UserName: '' },
    { Id: 3, Email: '', UserName: '' },
  ];

  //public fieldsForSuggestionName: Object = { value: 'UserName' };
  //public fieldsForSuggestionEmail: Object = { value: 'Email' };

  public fieldsForSuggestionName: Object = {
    value: 'UserName',
    text: 'UserName',
  };
  public fieldsForSuggestionEmail: Object = { value: 'Email', text: 'Email' };

  // maps the appropriate column to fields property
  public fields: Object = { value: 'UserName' };
  public value: string = '';
  // set the placeholder to AutoComplete input
  public waterMark: string = 'e.g. kasun';
  public waterMark1: string = 'e.g. kasunysoft@gmail.com';
  // set the height of the popup element
  public height: string = '250px';
  // bind the change event
  public onChange(args: any, user: any): void {
    // let valueEle: HTMLInputElement = document.getElementsByClassName(
    //   'e-input'
    // )[0] as HTMLInputElement;
    // // make empty the input value when typed characters is 'null' in input element
    // if (
    //   this.AutoCompleteObj.value === 'null' ||
    //   this.AutoCompleteObj.value === null ||
    //   this.AutoCompleteObj.value === ''
    // ) {
    //   valueEle.value = '';
    // }
  }
  // public selectedContact(event, user: any) {
  //   if (event.itemData) {
  //     this.users.forEach((x) => {
  //       if (x.Id == user.Id) {
  //         x.UserName = event.itemData.UserName;
  //         x.Email = event.itemData.Email;
  //       }
  //     });
  //   }
  // }

  selectData(selectData: any, user: any) {
    debugger;
    if (selectData) {
      this.users.forEach((x) => {
        if (x.Id == user.Id) {
          x.UserName = selectData.UserName;
          x.Email = selectData.Email;
        }
      });
      // this.searchResult = [];
    }
  }

  public filtering(args) {
    // let predicate = new Predicate('Email', 'contains', args.text, true);
    // predicate = predicate.or('UserName', 'contains', args.text, true);
    // let query = new Query();
    // query = args.text !== '' ? query.where(predicate) : query;
    // args.updateData(this.sportsData, query);
  }

  AddUser(length: number) {
    this.users.push({ Id: length + 1, Email: '', UserName: '' });
  }

  modelChanged(event: any, user: any) {
    console.log(event);
    console.log(user);

    // if (user.UserName === '' && user.Email === '') {
    //   this.searchResult = [];
    //   return;
    // }

    // const filteredResults = this.sportsData.filter((result: any) => {
    //   if (user.UserName != '' && user.Email != '') {
    //     result.UserName.includes(user.UserName) ||
    //       result.Email.includes(user.Email);
    //   } else if (user.UserName == '' && user.Email != '') {
    //     result.Email.includes(user.Email);
    //   } else if (user.UserName != '' && user.Email == '') {
    //     result.Email.includes(user.UserName);
    //   }
    // });

    // this.searchResult = filteredResults;
    // this.selectedIndex = -1;
  }
}
