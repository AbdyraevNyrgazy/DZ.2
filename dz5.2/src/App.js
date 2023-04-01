    import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'app-my-component',
    template:
        <ul>
            <li *ngFor="let item of items">{{ item }}</li>
</ul>
,
})
export class MyComponent {
    items: string[];

    constructor(private dataService: DataService) {}

render() {
    this.dataService.getItems().subscribe(items => {
        this.items = items;
    });
}
}

> Абдыраев Нургазы:
    import React, { Component } from 'react';

class ExampleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        document.title = Count: ${this.state.count};
    }

    componentDidUpdate() {
        document.title = Count: ${this.state.count};
    }

    handleButtonClick = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    render() {
        const { count } = this.state;

        return (
            <div>
                <h1>Counter: {count}</h1>
                <button onClick={this.handleButtonClick}>Increment</button>
            </div>
        );
    }
}

export default ExampleComponent;
