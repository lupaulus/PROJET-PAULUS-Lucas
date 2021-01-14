import { Component, Input, OnInit } from '@angular/core';
import { RecapCompoComponent } from '../recap-compo/recap-compo.component';
import { FormControl, Validators} from'@angular/forms';
import { User } from '../../../models/user';
import { AppHttpService } from '../../../app-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-compo',
  templateUrl: './form-compo.component.html',
  styleUrls: ['./form-compo.component.scss']
})
export class FormCompoComponent implements OnInit {
  
  @Input() recap: RecapCompoComponent;

   civility: FormControl = new FormControl('');
   firstname:FormControl = new FormControl('');
   lastname:FormControl = new FormControl('');
   address:FormControl = new FormControl('');
   zipcode:FormControl = new FormControl('');
   tel: FormControl = new FormControl('');
   city: FormControl = new FormControl('');
   mail: FormControl = new FormControl('');
   country: FormControl  =new FormControl('');
   login: FormControl = new FormControl('');
   password: FormControl = new FormControl('');
   confirm: FormControl = new FormControl('');

  constructor(private api : AppHttpService, private route : Router) { }

  ngOnInit(): void {
    // Test
    this.civility.setValue("Monsieur");
    this.firstname.setValue("Lucas");
    this.lastname.setValue("P");
    this.address.setValue("test");
    this.zipcode.setValue("67000");
    this.tel.setValue("0388774466");
    this.city.setValue("aled");
    this.mail.setValue("a@gamil.com");
    this.country.setValue("fr");
    this.login.setValue("Login");
    this.password.setValue("pass");
    this.confirm.setValue("pass");
  }

  changeValues()
  {

  }

  onSubmit(): void{

    // Verification
    if (!(this.password.value === this.confirm.value))
    {
      alert("password différents"); 
      return;
    }

    if (this.tel.value.length != 10)
    {
      alert("Numéro invalide longueur 10");
      return;
    }

    const c = <User>(
      {
        id: 0,
        civilite: this.civility.value,
        username: this.login.value,
        password: this.password.value,
        firstName: this.firstname.value,
        lastName: this.lastname.value,
        address: this.address.value,
        zipcode: this.zipcode.value,
        tel: this.tel.value,
        city: this.city.value,
        mail: this.mail.value,
        country: this.country.value
      }
    );

    this.api.postSignin(c).subscribe(d => 
    {
      setTimeout(()=> {}, 5000)
      this.route.navigate(['/login']);
      // const f = <User>d["data"];
      // this.recap.civility = f.civilite;
      // this.recap.firstname = f.firstName;
      // this.recap.lastname = f.lastName;
      // this.recap.address = f.address;
      // this.recap.zipcode = f.zipcode;
      // this.recap.tel = f.tel;
      // this.recap.city = f.city;
      // this.recap.mail = f.mail;
      // this.recap.country = f.country;
      // this.recap.login = f.username;
      // this.recap.password = f.password;
    })
    

  }

}
