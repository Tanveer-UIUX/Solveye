import IntegrationsTabsClient, { type IntegrationsTab } from './IntegrationsTabsClient'

const TABS: IntegrationsTab[] = [
  {
    id: 'ehr',
    label: 'EHR / EMR',
    tiles: [
      { mark: 'E', label: 'Epic' },
      { mark: 'C', label: 'Cerner' },
      { mark: 'A', label: 'athenahealth' },
      { mark: 'e', label: 'eClinicalWorks' },
      { mark: 'N', label: 'NextGen' },
      { mark: 'M', label: 'Meditech' },
      { mark: 'A', label: 'Allscripts' },
      { mark: 'G', label: 'Greenway' },
      { mark: 'P', label: 'Practice Fusion' },
      { mark: 'D', label: 'DrChrono' },
      { mark: 'E', label: 'Elation' },
      { mark: '+', label: '20 more' },
    ],
  },
  {
    id: 'pm',
    label: 'Practice Management',
    tiles: [
      { mark: 'K', label: 'Kareo' },
      { mark: 'A', label: 'AdvancedMD' },
      { mark: 'N', label: 'NextGen PM' },
      { mark: 'C', label: 'CollaborateMD' },
      { mark: 'M', label: 'MedEvolve' },
      { mark: '+', label: '15 more' },
    ],
  },
  {
    id: 'clearing',
    label: 'Clearinghouses',
    tiles: [
      { mark: 'W', label: 'Waystar' },
      { mark: 'C', label: 'Change Healthcare' },
      { mark: 'A', label: 'Availity' },
      { mark: 'T', label: 'Trizetto' },
      { mark: 'O', label: 'Office Ally' },
      { mark: '+', label: '8 more' },
    ],
  },
  {
    id: 'payers',
    label: 'Payers',
    tiles: [
      { mark: 'UHG', label: 'UnitedHealth' },
      { mark: 'A', label: 'Aetna' },
      { mark: 'H', label: 'Humana' },
      { mark: 'BCBS', label: 'Blue Cross' },
      { mark: 'C', label: 'Cigna' },
      { mark: 'CMS', label: 'Medicare/Medicaid' },
    ],
  },
]

export default function IntegrationsTabs() {
  return <IntegrationsTabsClient tabs={TABS} />
}
