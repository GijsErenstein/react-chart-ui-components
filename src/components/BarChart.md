A LineChart element

```jsx
import { BarChart } from "graph-ui-components";

<BarChart decimals={2} 
          prefix={'€'}
          postfix={'per user'} 
          values={[{
            label: 'Small',
            value: 10,
            color: '#8338EC'
          }, {
            label : 'Medium',
            value : 13,
            color: '#FF006E'
          }, {
            label : 'Large',
            value : 19,
            color: '#FFBE0B'
          }]} />
```