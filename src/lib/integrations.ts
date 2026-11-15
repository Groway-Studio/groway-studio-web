export const INTEGRATIONS = [
  { name: 'HubSpot', slug: 'hubspot' },
  { name: 'Notion', slug: 'notion' },
  { name: 'Drive', slug: 'googledrive' },
  { name: 'Slack', slug: 'slack' },
  { name: 'Salesforce', slug: 'salesforce' },
  { name: 'Gmail', slug: 'gmail' },
  { name: 'Sheets', slug: 'googlesheets' },
  { name: 'Calendar', slug: 'googlecalendar' },
  { name: 'Trello', slug: 'trello' },
  { name: 'Dropbox', slug: 'dropbox' },
  { name: 'Asana', slug: 'asana' },
  { name: 'Airtable', slug: 'airtable' },
  { name: 'GitHub', slug: 'github' },
  { name: 'Jira', slug: 'jira' },
  { name: 'Shopify', slug: 'shopify' },
  { name: 'Zendesk', slug: 'zendesk' },
] as const

/** Replace one app without duplicates or changing the same position twice in a row. */
export function nextIntegration(current: readonly number[], previousSlot: number, random: () => number = Math.random) {
  const available = INTEGRATIONS.map((_, index) => index).filter(index => !current.includes(index))
  const slots = current.map((_, index) => index).filter(index => index !== previousSlot)
  const slot = slots[Math.floor(random() * slots.length)]
  const app = available[Math.floor(random() * available.length)]
  return { slot, apps: current.map((value, index) => index === slot ? app : value) }
}
