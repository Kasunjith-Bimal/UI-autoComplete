import { Component, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { EmitType, detach } from '@syncfusion/ej2-base';
import {
  UploaderComponent,
  RemovingEventArgs,
} from '@syncfusion/ej2-angular-inputs';
import {
  createSpinner,
  showSpinner,
  hideSpinner,
} from '@syncfusion/ej2-popups';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';

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
  @ViewChild('defaultupload')
  public uploadObj: UploaderComponent;
  @ViewChild('checkbox')
  public checkboxObj: CheckBoxComponent;
  @ViewChild('checkbox1')
  public checkboxObj1: CheckBoxComponent;

  public path: Object = {
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
  };

  public dropElement: HTMLElement = document.getElementsByClassName(
    'control-fluid'
  )[0] as HTMLElement;

  public changeHandler: EmitType<Object> = () => {
    this.uploadObj.autoUpload = this.checkboxObj.checked;
    this.uploadObj.clearAll();
  };

  public changedHandler: EmitType<Object> = () => {
    this.uploadObj.sequentialUpload = this.checkboxObj1.checked;
    this.uploadObj.clearAll();
  };

  public onFileRemove(args: RemovingEventArgs): void {
    args.postRawFile = false;
  }

  public onDocumentUploading(args: any) {
    console.log(args);
  }

  public onUploadSuccess(args: any) {
    console.log(args);
  }

  constructor() {}

  fileListRendering(args) {
    console.log('status1', args);
    console.log('status2', args.fileInfo.status);
  }
}
