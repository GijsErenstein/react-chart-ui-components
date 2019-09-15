A LineChart element

```jsx
import { LineChart } from "graph-ui-components";

<LineChart decimals={2} prefix={'€'} postfix={'per user'} rounded={true} 
           values={[8.6,10.2,50.333,100.000001,70,80.542,20,15,34,64,73,45,23]} />
```

```jsx
import { LineChart } from "graph-ui-components";

let values = [];

    for (let i = 30; i < 80; i++) {
        values.push((Math.random() * (Math.sin(0.01*i) + 1) * (i*i)));
    }

<LineChart decimals={2} 
           color={'#4392F1'}
           prefix={'€'} 
           postfix={'per user'} 
           axis={['01-01-2019','01-02-2019', '01-03-2019', '01-04-2019','01-05-2019', '01-06-2019']}
           values={values} />
```