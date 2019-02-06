import {Component, OnInit} from '@angular/core';
import {LinksService} from '../../shared/services/links.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Link} from '../../shared/models/link.model';

@Component({
  selector: 'scu-shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.scss']
})
export class ShortcutComponent implements OnInit {

  form: FormGroup;

  constructor(
    private linksService: LinksService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'longLink': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {

    const formData = this.form.value;

    this.linksService.getShortLinkByLongLink(formData.longLink)
      .subscribe((link: Link) => {
        console.log(link);
      });
  }
}
