import { Component, ElementRef, EventEmitter, Injectable, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { ModalConfig } from 'src/app/utils/models/modalconfig.model';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-shared-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit{
  @ViewChild('myModal', {static: true}) modal!: ElementRef;
  private modalRef!: NgbModalRef;
  constructor(private modalService:NgbModal){

  }
  ngOnInit(): void {
    this.modal.nativeElement.style.display = 'none';
  }
  open() {
    console.log("Hii I am called")
    this.modal.nativeElement.classList.add('modal-center');
    this.modal.nativeElement.style.display = 'block';

  }

  close() {
    this.modal.nativeElement.style.display = 'none';
    // this.modalRef.close();
  }
}
