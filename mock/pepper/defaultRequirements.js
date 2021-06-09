export default {
  requirements: [
    {
      id: '1',
      criteria: 'Location is',
      params: ['New York', 'San Francisco'],
      priority: 'MUST'
    },
    {
      id: '2',
      criteria: 'Stage is',
      params: ['Series A', 'Seed'],
      priority: 'MUST'
    },
    {
      id: '3',
      criteria: 'CTO has led a technical team for',
      params: ['1 year', '2 years', '3+ years'],
      priority: 'NICE'
    },
    {
      id: '4',
      criteria: 'CEO and CTO have been working together for',
      params: ['1 year', '2+ years'],
      priority: 'NICE'
    },
    {
      id: '5',
      criteria: 'The company has been featured in relevant media, being this ',
      params: ['TechCrunch', 'The Verge', 'Entrepreneur'],
      priority: 'NICE'
    },
    {
      id: '6',
      criteria: 'Industry is',
      params: ['FinTech', 'InsurTech'],
      priority: 'MUST',
      selectedParam: 'FinTech'
    },
    {
      id: '8',
      criteria: 'Founding Team is ',
      params: ['part-time', 'full-time'],
      priority: 'NICE',
      selectedParam: 'part-time'
    },
    {
      id: '9',
      criteria: 'Size of the round',
      params: ['between $1M and $5M', 'below $10M'],
      priority: 'SUPER_NICE',
      selectedParam: 'between $1M and $5M'
    }
  ]
}
