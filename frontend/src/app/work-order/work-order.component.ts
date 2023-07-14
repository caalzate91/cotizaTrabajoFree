import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.css']
})
export class WorkOrderComponent {

  titleWorkOrderCustom : String = "Bienvenido a la creacion de orden de servicio"
  nameSourceUser : String = ""
  namePlace : String = ""
  nameDateCreation : String = ""
  nameDateRequest : String = ""
  nameTargetUser : String = ""
  conceptName : String = ""
  conceptValue : String = ""

  ngOnInit(): void {
  }

}
