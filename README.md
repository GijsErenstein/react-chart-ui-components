#React Chart component 

Basic chart components for your react app

Examples: https://gijserenstein.github.io/react-chart-ui-components/

##Line Chart:

####Code example

```jsx
import { LineChart } from "graph-ui-components";

<LineChart values={[1,2,3,4,5]} />
```

####Options:
- `values` - array of values
- `prefix` - prefixes the values shown in the tooltips
- `postfix` - postfix for the values shown in the tooltip
- `rounded` -  round the edges in the line chart
- `color` - hex color for the chart
- `axis` - positions on the axis
- `decimals` - the value's decimals

##Circle Chart:

####Code example

```jsx
import { CircleChart }  from "graph-ui-components";

<CircleChart color={'#ff0000'} value={10} maxValue={100} prefix={'€'} metric={'revenue'} postfix={'/user'} decimals={2} />
```

####Options:
- `value` - value displayed
- `maxValue` - the range of the chart
- `prefix` - prefix for the value
- `postfix` - postfix for the value
- `metric` - name of the metric shown
- `color` - hex color for the chart
- `decimals` - the value's decimals