import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';
import { TaskService } from "../task.service";



@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  value?: string;
  date = new Date(2012, 11, 21);
  mode: NzCalendarMode = 'month';
  selectedValue = new Date('2017-01-25');
  validateForm: UntypedFormGroup;

  constructor(private fb: FormBuilder, public service: TaskService){
    this.validateForm = this.fb.group({
      description: ['', Validators.required],
      end: ['', Validators.required],
      priority: ['', Validators.required]
    })
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.service.save(this.validateForm.value)
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }


  taskForm = new FormGroup({
    description: new FormControl(''),
    end: new FormControl(''),
    priority: new FormControl('')
  })

  preview: string = '';

  save() {
    this.preview = JSON.stringify(this.taskForm.value);
  }

  onChange(result: Date): void {
    console.log('Selected Time: ', result);
  }

  onOk(result: Date | Date[] | null): void {
    console.log('onOk', result);
  }

  onCalendarChange(result: Array<Date | null>): void {
    console.log('onCalendarChange', result);
  }

  listDataMap = {
    eight: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' }
    ],
    ten: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ],
    eleven: [
      { type: 'warning', content: 'This is warning event' },
      { type: 'success', content: 'This is very long usual event........' },
      { type: 'error', content: 'This is error event 1.' },
      { type: 'error', content: 'This is error event 2.' },
      { type: 'error', content: 'This is error event 3.' },
      { type: 'error', content: 'This is error event 4.' }
    ]
  };

  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }

  selectChange(select: Date): void {
    console.log(`Select value: ${select}`);
  }
  
}
