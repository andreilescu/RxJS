import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';

declare var require: any;
const Prism = require('prismjs');

@Component({
  selector: 'app-observable-view',
  templateUrl: './observable-view.component.html',
  styleUrls: ['./observable-view.component.css']
})
export class ObservableViewComponent implements OnInit, OnDestroy {

  /* Results */
  resultObservableOf = [];
  resultObservableCreate = [];
  resultObservableFrom = [];
  resultObservableCreateUnsubscribe = [];

  /* Html Objects */
  resultObservableOfAsHtml;
  resultObservableCreateAsHtml;
  resultObservableFromAsHtml;
  resultObservableCreateUnsubscribeAsHtml;
  /* Observables objects */
  observableOf;
  observableCreate;
  observableCreateUnsubscribe;
  observableFrom;

  constructor() {
  }

  ngOnInit() {
    this.observableOf = Observable.of(10, 20, 30)
      .subscribe(x => {
        this.resultObservableOf.push(x);
      });

    const resultObservableOfCode = 'this.observableOf = Observable.of(10, 20, 30)\n' +
      '      .subscribe(x => {\n' +
      '        this.resultObservableOf.push(x);\n' +
      '       });'

    this.resultObservableOfAsHtml = Prism.highlight(resultObservableOfCode, Prism.languages.javascript);

    this.observableCreate = Observable.create(function subscribe(observer) {
      observer.next(10);
      observer.next(20);
      observer.next(30);
      observer.complete();
    })
      .subscribe(
        x => this.resultObservableCreate.push(x * 2),
        error => {
        },
        () => this.resultObservableCreate.push('Complete')
      );

    const resultObservableCreateCode = 'this.observableCreate = Observable.create(function subscribe(observer) {\n' +
      '      observer.next(10);\n' +
      '      observer.next(20);\n' +
      '      observer.next(30);\n' +
      '      observer.complete();\n' +
      '    })\n' +
      '      .subscribe(\n' +
      '        x => this.resultObservableCreate.push(x * 2),\n' +
      '        error => {\n' +
      '        },\n' +
      '        () => this.resultObservableCreate.push(\'Complete\')\n' +
      '      );';

    this.resultObservableCreateAsHtml = Prism.highlight(resultObservableCreateCode, Prism.languages.javascript);

    /* Create with timeout and unsubcribe */
    this.observableCreateUnsubscribe = Observable.create(function (observer) {
      const id = setTimeout(() => observer.next('...'), 5000); // emit value after 5s

      return () => {
        clearTimeout(id);
        console.log('cleared!');
      };
    }).subscribe(
      value => console.log('Print value' + value)
    );
    setTimeout(() => this.observableCreateUnsubscribe.unsubscribe(), 3000);
    
    this.resultObservableCreateUnsubscribe.push(`cleared! is diplayed at the console.
    After 3 seconds unsubscribe is executed`);

    const resultObservableCreateUnsubscribe = 'this.observableCreateUnsubscribe = Observable.create(function (observer) {\n' +
      '      const id = setTimeout(() => observer.next(\'...\'), 5000); // emit value after 5s\n' +
      '\n' +
      '      return () => {\n' +
      '        clearTimeout(id);\n' +
      '        console.log(\'cleared!\');\n' +
      '      };\n' +
      '    }).subscribe(\n' +
      '      value => console.log(\'Print value\' + value)\n' +
      '    );\n' +
      '    setTimeout(() => this.observableCreateUnsubscribe.unsubscribe(), 3000);';

    this.resultObservableCreateUnsubscribeAsHtml = Prism.highlight(resultObservableCreateUnsubscribe, Prism.languages.javascript);

    /* From */
    this.observableFrom = Observable.from([1, 2, 3])
      .subscribe(x => {
        this.resultObservableFrom.push(x * 3);
      });
    const resultObservableFromCode = 'this.observableFrom = Observable.from([1, 2, 3])\n' +
      '      .subscribe(x => {\n' +
      '        this.resultObservableFrom.push(x * 3);\n' +
      '      });';

    this.resultObservableFromAsHtml = Prism.highlight(resultObservableFromCode, Prism.languages.javascript);
  }

  ngOnDestroy(): void {
    this.observableCreate.unsubscribe();
    this.observableOf.unsubscribe();
    this.observableFrom.unsubscribe();
  }

}
