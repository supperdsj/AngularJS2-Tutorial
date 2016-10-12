import {
    Component,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    Input,
    ViewChild,
    ContentChild
} from '@angular/core';

@Component({
    selector: 'app-lifecycle',
    templateUrl: './lifecycle.component.html',
    styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() bindable = 1000;

    @ViewChild('boundParagraph') boundParagraph: HTMLElement;
    @ContentChild('boundContent') boundContent: HTMLElement;

    ngOnInit() {
        this.log('ngOnInit');
    }

    ngOnChanges(): void {
        this.log('ngOnChanges');
    }

    ngDoCheck(): void {
        this.log('ngDoCheck');
    }

    ngAfterContentInit(): void {
        this.log('ngAfterContentInit');
        console.log(this.boundContent);
    }

    ngAfterContentChecked(): void {
        this.log('ngAfterContentChecked');
    }

    ngAfterViewInit(): void {
        this.log('ngAfterViewInit');
        console.log(this.boundParagraph);
    }

    ngAfterViewChecked(): void {
        this.log('ngAfterViewChecked');
    }

    ngOnDestroy(): void {
        this.log('ngOnDestroy');
    }

    constructor() {
        this.log('constructor');
    }

    private log(hook: string) {
        console.log(hook);
    }
}
