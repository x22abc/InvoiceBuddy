export const dashboardStats = [
  { label: 'Open AR', value: '$84,230', note: 'Across 47 invoices' },
  { label: 'Past Due', value: '$31,880', note: '18 invoices need review' },
  { label: 'Unapplied Payments', value: '$7,450', note: '4 payments missing remittance' },
  { label: 'Exceptions', value: '12', note: '6 high priority' },
]

export const sampleExceptions = [
  {
    id: 'EXC-001',
    type: 'Missing Remittance',
    customer: 'Pacific Pro Plumbing',
    invoice: 'INV-1048',
    amount: '$2,450',
    action: 'Client to confirm which invoices were paid',
    status: 'Hold Follow-Up',
  },
  {
    id: 'EXC-002',
    type: 'Short Paid',
    customer: 'Northline Services',
    invoice: 'INV-1082',
    amount: '$150 balance',
    action: 'Confirm dispute, credit, or remaining collectible balance',
    status: 'Client Review',
  },
  {
    id: 'EXC-003',
    type: 'Possible Duplicate Invoice',
    customer: 'Canyon Supply Co.',
    invoice: 'INV-1090',
    amount: '$980',
    action: 'Review duplicate customer/date/amount match',
    status: 'Needs Review',
  },
]

export const serviceCards = [
  {
    title: 'AR Diagnostic',
    text: 'Review invoice, payment, and remittance data readiness before cleanup or monthly reporting begins.',
  },
  {
    title: 'AR Tracker Setup',
    text: 'Convert available AR data into a clear invoice-level control list with reports and exception visibility.',
  },
  {
    title: 'Monthly AR Visibility',
    text: 'Refresh records and provide open invoice, aging, payment application, and Exceptions Report outputs.',
  },
  {
    title: 'CPA-Ready AR Packet',
    text: 'Prepare clean AR exports for CPA or year-end review using approved source data and mock report structure.',
  },
]

export const reportPackage = [
  'Owner AR Summary',
  'Open Invoice Report',
  'AR Aging Report',
  'Payment Applications Report',
  'Unapplied Payments Report',
  'Exceptions Report',
  'Follow-Up Eligible List',
  'CPA-Ready AR Packet',
]
