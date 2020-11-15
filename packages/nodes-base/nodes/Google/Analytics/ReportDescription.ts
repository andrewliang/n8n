import {
	INodeProperties,
} from 'n8n-workflow';

export const reportOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'report',
				],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Return the analytics data',
			},
		],
		default: 'get',
		description: 'The operation to perform',
	},
] as INodeProperties[];

export const reportFields = [
	{
		displayName: 'View ID',
		name: 'viewId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'report',
				],
				operation: [
					'get',
				]
			},
		},
		placeholder: '123456',
		description: 'The View ID of Google Analytics',
	},
	{
		displayName: 'Simple',
		name: 'simple',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [
					'get',
				],
				resource: [
					'report',
				],
			},
		},
		default: true,
		description: 'When set to true a simplify version of the response will be used else the raw data.',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'report',
				],
				operation: [
					'get',
				]
			},
		},
		options: [
			{
				displayName: 'Date Ranges',
				name: 'dateRangesUi',
				placeholder:'Add Date Range',
				type: 'fixedCollection',
				default: {},
				description: 'Date ranges in the request',
				options: [
					{
						displayName: 'Date Range',
						name: 'dateRanges',
						values:[
							{
								displayName: 'Start Date',
								name: 'startDate',
								type: 'dateTime',
								default:'',
								description: 'Start date'
							},
							{
								displayName: 'End Date',
								name: 'endDate',
								type: 'dateTime',
								default:'',
								description: 'End date'
							}
						]
					}
				]
			},
			{
				displayName: 'Dimensions',
				name: 'dimensionUi',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: true,	
				},
				placeholder:'Add Dimension',
				description: 'Dimensions are attributes of your data. For example, the dimension ga:city indicates the city, for example, "Paris" or "New York", from which a session originates.',
				options: [
					{
						displayName: 'Dimension',
						name: 'dimensionValues',
						values:[
							{
								displayName: 'Name',
								name: 'name',
								type: 'options',
								typeOptions: {
									loadOptionsMethod: 'getDimensions',
								},
								default:'',
								description: 'Name of the dimension to fetch, for example ga:browser.'
							},
						],
					},
				],
			},
			{
				displayName: 'Hide Totals',
				name: 'hideTotals',
				type: 'boolean',
				default: false,
				description: 'If set to true, hides the total of all metrics for all the matching rows, for every date range.',
			},
			{
				displayName: 'Hide Value Ranges',
				name: 'hideValueRanges',
				type: 'boolean',
				default: false,
				description: 'If set to true, hides the minimum and maximum across all matching rows.',
			},
			{
				displayName: 'Include Empty Rows',
				name: 'includeEmptyRows',
				type: 'boolean',
				default: false,
				description: 'If set to false, the response exclude rows if all the retrieved metrics are equal to zero.',
			},
			{
				displayName: 'Metrics',
				name: 'metricsUi',
				type: 'fixedCollection',
				default: {},
				typeOptions: {
					multipleValues: true,
				},
				placeholder:'Add Metrics',
				description: 'Metrics in the request',
				options: [
					{
						displayName: 'Metric',
						name: 'metricValues',
						values:[
							{
								displayName: 'Alias',
								name: 'alias',
								type: 'string',
								default: '',
								description: 'An alias for the metric expression is an alternate name for the expression. The alias can be used for filtering and sorting.',
							},
							{
								displayName: 'Expression',
								name: 'expression',
								type: 'string',
								default: 'ga:users',
								description: `A metric expression in the request. An expression is constructed from one or more metrics and numbers.<br>
								Accepted operators include: Plus (+), Minus (-), Negation (Unary -), Divided by (/), Multiplied by (*), Parenthesis,<br>
								Positive cardinal numbers (0-9), can include decimals and is limited to 1024 characters. Example ga:totalRefunds/ga:users,<br>
								in most cases the metric expression is just a single metric name like ga:users. Adding mixed MetricType (E.g., CURRENCY + PERCENTAGE)<br>
								metrics will result in unexpected results.`,
							},
							{
								displayName: 'Formatting Type',
								name: 'formattingType',
								type: 'options',
								default:'INTEGER',
								description: 'Specifies how the metric expression should be formatted',
								options: [
									{
										name: 'Currency',
										value:'CURRENCY'
									},
									{
										name: 'Float',
										value:'FLOAT'
									},
									{
										name: 'Integer',
										value:'INTEGER'
									},
									{
										name: 'Percent',
										value:'PERCENT'
									},
									{
										name: 'Time',
										value:'TIME'
									},
								],
							},
						],
					},
				],
			},
			{
				displayName: 'Use Resource Quotas',
				name: 'useResourceQuotas',
				type: 'boolean',
				default: false,
				description: 'Enables resource based quotas',
			},
		],
	}
] as INodeProperties[];