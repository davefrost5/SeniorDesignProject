import MilestoneContent from './milestone-content';

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}

export default function MilestonePage() {
  return <MilestoneContent />;
}