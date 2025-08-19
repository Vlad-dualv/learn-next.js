import React from 'react';
import { getSummarySales } from '../../../lib/api';
import DashboardCard from '../../../components/dashboard-card';
import SummaryTable from '@/app/components/summary-table';
import SummaryTableHeader from '../../../components/summary-table-header';
import SummaryTableCell from '../../../components/summary-table-cell';
import MagicButton from '@/app/components/magic-button';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await new Promise((res) => {
    setTimeout(() => {
      res(getSummarySales());
    }, 4000);
  });

  return (
    <DashboardCard
      label={
        <>
          Sales Details
          <MagicButton />
        </>
      }
    >
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
