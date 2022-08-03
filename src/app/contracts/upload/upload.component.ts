import { Component, OnInit, Input} from '@angular/core';
import * as $ from "jquery";


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() {

   }

  filesSelected:any[] = []

  fileReaders: FileReader[] = [];

  ngOnInit(): void {
    $('.image-upload-wrap').bind('dragover', function () {
      $('.image-upload-wrap').addClass('image-dropping');
    });
    $('.image-upload-wrap').bind('dragleave', function () {
      $('.image-upload-wrap').removeClass('image-dropping');
  });
  }

  readURL(input:any) {
    if (input.target.files['length'] > 0) {

      for (var i = 0; i < input.target.files["length"]; i++) {
        this.filesSelected.push(input.target.files[i])
        let extensionAllowed = {"pdf":true};

        if (extensionAllowed) {
          var name = this.filesSelected[i].name.split('.').pop();
          if (name != "pdf") {
            alert("يرجى التأكد من أن الملف بصيغة PDF")
            this.filesSelected.pop()
          }
      }

        if (input.target.files[i].size / 1024 / 1024 > 10) {
          alert("يرجى التأكد من أن حجم الملف أقل من 10 mb")
          this.filesSelected.pop()
        }

    }

      var reader = new FileReader();

      reader.onload = function(e:any) {
        $('.image-upload-wrap').hide();

        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();
        $('.text-add').show();

        $('.image-title').html(input.target.files[0].name);
      };

      reader.readAsDataURL(input.target.files[0]);
    } else {
      this.removeUpload("remove");
    }
  }

  removeUpload(name: String) {

    this.filesSelected.forEach((file, index, arr) => {
      if (file.name ==name) {
        this.filesSelected.splice(index, 1)
      }
    })

    if (this.filesSelected.length == 0) {
      $('.file-upload-content').hide();
      $('.image-upload-wrap').show();
    }
  }

  add() {
    $('.file-upload-input').trigger( 'click' )
    }

    @Input() disabled?: Boolean = false;



}
