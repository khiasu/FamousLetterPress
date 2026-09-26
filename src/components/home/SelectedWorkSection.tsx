import { getCMSPortfolio } from "@/lib/cms/store";
import { SelectedWorkClient } from "./SelectedWorkClient";

export function SelectedWorkSection() {
  const portfolio = getCMSPortfolio();
  const selectedWork = portfolio.slice(0, 6);

  return <SelectedWorkClient items={selectedWork} />;
}
