import { Component, ElementRef, EventEmitter, Injectable, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { ModalConfig } from 'src/app/utils/models/modalconfig.model';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-shared-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
@Injectable()
export class ModalComponent {
  @ViewChild('myModal', {static: false}) modal!: ElementRef;

  open() {
    console.log("Hii I am called")
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';

  }
}
