import { Component, EventEmitter, Injectable, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { ModalConfig } from 'src/app/utils/models/modalconfig.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-shared-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
@Injectable()
export class ModalComponent {
  @Input() public modalConfig!: ModalConfig
  @ViewChild('modal') private modalContent!: TemplateRef<ModalComponent>
  private modalRef!: NgbModalRef

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { }

  open() {
    this.modalRef = this.modalService.open(this.modalContent)
    this.modalRef.result.then()
  }

  close() {
    this.modalRef.close()
  }

  dismiss() {
    this.modalRef.dismiss()
  }
}
