import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css'
})
export class Demo1 {
  OpenSweetAlert(){
    Swal.fire({
      title:'Hey user!',
      text:'This is sweet alert',
      icon:'success',
    timer:2000});
}

OpenConfirmation(){
  Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    Swal.fire("Saved!", "", "success");
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});
   
}
OpenSnackBar(){
  new Snackbar('Hellooo',
    {position:'top-center',theme:'light',timeout:5000,actionText:'X'});

}

}
