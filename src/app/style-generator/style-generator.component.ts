import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'spriticon-style-generator',
  templateUrl: './style-generator.component.html',
  styleUrls: ['./style-generator.component.css']
})
export class StyleGeneratorComponent implements OnInit, AfterViewInit {

  filename: string;
  form: FormGroup;
  output: { css: string, sass: string };

  @ViewChild('file') file: ElementRef;
  @ViewChild('frame') frame: ElementRef;

  constructor(
    private _fb: FormBuilder
  ) {
    this.filename = null;
    this.output = { css: null, sass: null };
    this.form = this._fb.group({
      url: [environment.defaultSprite],
      urlName: ['images/sprite.png', Validators.required],
      selector: ['id', Validators.required],
      selectorName: ['icon', Validators.required],
      height: [20],
      width: [20],
      positionX: [0],
      positionY: [0]
    });
  }

  ngOnInit() {
    this.form.valueChanges.subscribe(changes => {
      this.reflectFramSize();
    });
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.reflectFramSize();
    });
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {

      const file = event.target.files[0];
      if (file.type === 'image/png') {
        const reader = new FileReader();

        reader.onload = (event: ProgressEvent) => {
          this.form.get('url').patchValue((<FileReader>event.target).result);
        };
        this.filename = file.name;
        reader.readAsDataURL(event.target.files[0]);
      } else {
        alert('Please select a .png file.');
        this.filename = null;
        event.target.value = '';
      }
    }
  }
  getFrameHeight() {
    return this.form.value.height + 'px';
  }
  getFrameWidth() {
    return this.form.value.width + 'px';
  }
  getFramePositionX() {
    return this.form.value.positionX + 'px';
  }
  getFramePositionY() {
    return this.form.value.positionY + 'px';
  }
  getUrlName() {
    return this.form.value.urlName;
  }
  getSelector() {
    return this.form.value.selector;
  }
  getSelectorName() {
    return this.form.value.selectorName;
  }

  reflectFramSize() {
    this.frame.nativeElement.style.height = this.getFrameHeight();
    this.frame.nativeElement.style.width = this.getFrameWidth();
    this.buildOutput();
  }
  onFrameResize(event) {
    this.form.get('height').patchValue(event.size['height']);
    this.form.get('width').patchValue(event.size['width']);
    this.buildOutput();
  }
  onFrameMoving(event) {
    this.form.get('positionX').patchValue(event.x);
    this.form.get('positionY').patchValue(event.y);
    this.buildOutput();
  }

  setSelector(selector: string) {
    this.form.get('selector').patchValue(selector);
  }
  buildOutput() {
    const identify: string = this.getSelector() === 'class' ? '.' : '#';
    const css: string =
      `\n${identify}${this.getSelectorName()} {` +
      `\n height: ${this.getFrameHeight()};` +
      `\n width: ${this.getFrameWidth()};` +
      `\n background: url('${this.getUrlName()}') no-repeat -${this.getFramePositionX()} -${this.getFramePositionY()};` +
      `\n}`;
    const sass: string =
      `\n${identify}${this.getSelectorName()} ` +
      `\n height: ${this.getFrameHeight()}` +
      `\n width: ${this.getFrameWidth()}` +
      `\n background: url('${this.getUrlName()}') no-repeat -${this.getFramePositionX()} -${this.getFramePositionY()}` +
      `\n`;

    this.output.css = css;
    this.output.sass = sass;
  }
}