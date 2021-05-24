export default {
  requirements: [
    {
      id: '1',
      criteria: 'Stage is Seed or Series A',
      priority: 'MUST'
    },
    {
      id: '2',
      criteria: 'Industry is FinTech or InsurTech',
      priority: 'MUST'
    },
    {id: '3', criteria: 'Location is Bay Area', priority: 'SUPER_NICE'},
    {id: '4', criteria: 'Founding Team is full-time', priority: 'NICE'},
    {
      id: '5',
      criteria: '$0.5M < Size of the round < $2M',
      priority: 'NICE'
    }
  ]
}
